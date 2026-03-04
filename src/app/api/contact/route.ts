import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/form-schemas";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = contactSchema.parse(payload);

    await sendContactEmail(data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { ok: false, error: "Dati non validi." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Invio non riuscito. Riprova tra qualche minuto.",
      },
      { status: 500 },
    );
  }
}
