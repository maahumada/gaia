import dbConnect from "@/lib/db";
import Capture from "@/models/Capture";
import { NextResponse } from "next/server";

// GET - Obtener captura por ID
export async function GET(request, { params }) {
  let id;
  try {
    const p = await params;
    id = p.id;
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not retrieve params" }, { status: 500 });
  }

  try {
    await dbConnect();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not connect to database" }, { status: 500 });
  }

  try {
    const capture = await Capture.findById(id);
    if (!capture) {
      return NextResponse.json({ ok: false, message: "Capture not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, message: "Capture retrieved successfully", data: capture }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not retrieve capture" }, { status: 500 });
  }
}

// DELETE - Eliminar captura por ID
export async function DELETE(request, { params }) {
  let id;
  try {
    const p = await params;
    id = p.id;
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not retrieve params" }, { status: 500 });
  }

  try {
    await dbConnect();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not connect to database" }, { status: 500 });
  }

  try {
    const capture = await Capture.findByIdAndDelete(id);
    if (!capture) {
      return NextResponse.json({ ok: false, message: "Capture not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, message: "Capture deleted successfully", data: capture }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not delete capture" }, { status: 500 });
  }
}
