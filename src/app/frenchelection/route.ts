import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "/media/Deck_French Presidential Election Report TotalFinal.pdf"
  );
}
