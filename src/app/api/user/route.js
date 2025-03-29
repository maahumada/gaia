import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not connect to database" }, { status: 500 });
  }

  try {
    const users = await User.find();
    return NextResponse.json({ ok: true, message: "Data retrieved successfully", data: users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not retrieve data" }, { status: 500 });
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not read request body" }, { status: 400 });
  }

  const { name, email, password, profile_picture } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }

  try {
    await dbConnect();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not connect to database" }, { status: 500 });
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
      profile_picture
    });
    return NextResponse.json({ ok: true, message: "User created successfully", data: user }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Could not create user" }, { status: 500 });
  }
}
