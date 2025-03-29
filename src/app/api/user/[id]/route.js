import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

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
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ ok: false, message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, message: "User retrieved successfully", data: user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not retrieve data" }, { status: 500 });
  }
}

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
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return NextResponse.json({ ok: false, message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, message: "User deleted successfully", data: user }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not delete data" }, { status: 500 });
  }
}
