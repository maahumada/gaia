import OpenAI from "openai";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Capture from "@/models/Capture";
import User from "@/models/User";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const { image, location, caption, date, user_id } = body;
  if (!image || !location || !user_id) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }
  await dbConnect();

  let is_there_a_species = false, species_name, description, is_endangered = false;
  try {
    const chatResponse = await openai.responses.create({
        model: "gpt-4o",
        input: [
            { role: "system", content: 'You are a wildlife expert. You MUST only output a JSON object structured like: {"is_there_a_species": true or false, "species_name": name, "is_endangered": true or false, "description": <100-150 word description of the species. The JSON should not include triple brackets.}'},
            { role: "user", content: "Identify the name of the species shown in the picture. Be as specific as possible. If it is an invasive species, and if it is in danger of extinction" },            {
                role: "user",
                content: [
                    {
                        type: "input_image", 
                        image_url: image,
                    }
                ],
            },
        ],
    });

    const responseText = JSON.parse(chatResponse.output_text);
    species_name = typeof responseText.species_name === "string" ? responseText.species_name : JSON.stringify(responseText.species_name);
    description = typeof responseText.description === "string" ? responseText.description : JSON.stringify(responseText.description);
    is_there_a_species = responseText.is_there_a_species;
    if (!is_there_a_species) {
      return NextResponse.json({ ok: false, message: "No species found in the image" }, { status: 404 });
    }
    is_endangered = responseText.is_endangered;
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Error analyzing image", error: err.message }, { status: 500 });
  }


  try {
    const capture = await Capture.create({
      image,
      species_name,
      caption,
      description,
      location,
      is_endangered,
      date
    });

    await User.findByIdAndUpdate(
      user_id,
      { 
        $push: { captures: capture._id },
        $inc: { 
          species_found: 1,
          endangered_species_found: is_endangered ? 1 : 0 
        }
      }
    );

    return NextResponse.json({ ok: true, message: "Capture created successfully", data: capture }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Error saving to database", error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not connect to database" }, { status: 500 });
  }

  try {
    const captures = await Capture.find();
    return NextResponse.json({ ok: true, message: "Data retrieved successfully", data: captures }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not retrieve data" }, { status: 500 });
  }
}
