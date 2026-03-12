import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(
      process.cwd(),
      "public/media/Deck_French Presidential Election Report TotalFinal.pdf"
    );
    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=french-election.pdf",
      },
    });
  } catch (error) {
    return new NextResponse("PDF not found", { status: 404 });
  }
}
