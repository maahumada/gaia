import OpenAI from "openai";
const client = new OpenAI();

export async function POST (request, { params }) {

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const { image } = body;
  if (!image) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }

    const response = await client.responses.create({
        model: "gpt-4o",
        input: [
            { role: "user", content: "What two teams are playing in this photo?" },
            {
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

    console.log(response.output_text);
}