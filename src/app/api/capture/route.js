import OpenAI from "openai";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Capture from "@/models/Capture";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const { image, location } = body;
  if (!image || !location) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }

  await dbConnect();

  let is_there_a_species = false, species_name, description, is_invasive = false, is_in_danger = false;
  try {
    const chatResponse = await openai.responses.create({
        model: "gpt-4o",
        input: [
            { role: "system", content: 'You are a wildlife expert. You MUST only output a JSON object structured like: {"is_there_a_species": true or false, "species_name": name, "is_invasive": true or false, "is_in_danger": true or false, "description": <100-150 word description of the species. The JSON should not include triple brackets.}'},
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
    is_invasive = responseText.is_invasive;
    is_in_danger = responseText.is_in_danger;
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Error analyzing image", error: err.message }, { status: 500 });
  }


  try {
    const capture = await Capture.create({
      image,
      species_name,
      description,
      location,
      is_invasive,
      is_in_danger
    });

    return NextResponse.json({ ok: true, message: "Capture created successfully", data: capture }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Error saving to database", error: err.message }, { status: 500 });
  }
}