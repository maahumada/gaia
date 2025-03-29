import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

// Configuración de Cloudinary
cloudinary.v2.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

export async function POST(request) {
  try {
    // Leer JSON crudo
    const body = await request.json();
    const { file } = body;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convertir base64 a buffer
    const base64Data = file.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    // Subir a Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.v2.uploader.upload_stream(
        { folder: "wildlife", format: "jpg" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    return NextResponse.json({ url: uploadResult.secure_url });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
