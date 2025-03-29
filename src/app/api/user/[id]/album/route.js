import dbConnect from "@/lib/db";
import User from "@/models/User";
import Capture from "@/models/Capture";
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
    const user = await User.findById(id).populate("captures", "_id image species_name");
    if (!user) {
      return NextResponse.json({ ok: false, message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, message: "User album retrieved successfully", data: user.captures }, { status: 200 });
  } catch (err) {
    console.log(err)
    return NextResponse.json({ ok: false, message: "Could not retrieve data" }, { status: 500 });
  }
}