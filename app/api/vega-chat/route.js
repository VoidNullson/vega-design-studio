import OpenAI from "openai";
export const runtime = "edge";

const SYSTEM = `You are Vega Design Studio's website assistant. Tone: warm, concise, conversion-focused, LA-based studio.
You help with: services (brand, web, AI for real estate), timelines, pricing ranges ($2.5k sprint, $4.5k growth kit, $2.5k + $299/mo AI), and booking calls.
If the user asks for a proposal, suggest the 60-second brief or the Book button. Keep replies under 120 words.`;

export async function POST(req) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "MISSING_OPENAI_KEY" }), { headers: { "content-type": "application/json" } });
    }
    const { messages = [] } = await req.json();
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM }, ...messages],
      temperature: 0.4,
    });
    const reply = completion.choices?.[0]?.message?.content || "How can I help?";
    return new Response(JSON.stringify({ reply }), { headers: { "content-type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ reply: "Sorry—temporary issue. Please try again." }), { status: 200, headers: { "content-type": "application/json" } });
  }
}
