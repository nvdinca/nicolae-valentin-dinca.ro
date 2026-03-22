import { NextResponse } from "next/server";

// Formularul de contact redirecționează direct către WhatsApp; acest endpoint nu mai persistă date.
// Păstrăm un handler minimal ca ruta să fie validă pentru build.
export async function POST() {
  return NextResponse.json(
    { message: "Contact form redirects to WhatsApp. Use the form on the site." },
    { status: 200 }
  );
}
