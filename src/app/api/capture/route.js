import dbConnect from "@/lib/db";
import Capture from "@/models/Capture";
import { NextResponse } from "next/server";

// POST - Crear una nueva captura
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not read request body" }, { status: 400 });
  }

  const { user_id, image } = body;

  if (!user_id || !image) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }
  
  try {
    await dbConnect();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not connect to database" }, { status: 500 });
  }

  try {
    const capture = await Capture.create({
          image: image,
          species_name: "species_name",
          description: "description",
          location: "location"
        });
    return NextResponse.json({ ok: true, message: "Capture created successfully", data: capture }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not create capture", error: err.message }, { status: 500 });
  }
}
