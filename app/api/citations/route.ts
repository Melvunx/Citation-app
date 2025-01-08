import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, World!", ok: true });
}

export async function POST(req: NextRequest) {
  const formaData = await req.formData();

  const newCitation = await prisma.citation.create({
    data: {
      text: String(formaData.get("citation")),
      author: String(formaData.get("author")),
    },
  });

  return NextResponse.json({
    citation: newCitation,
  });
}
