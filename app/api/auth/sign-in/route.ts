import { NextResponse, NextRequest } from "next/server";
import prisma from "@/db/prisma";

export async function POST(req: NextRequest, { params }: any) {
  const payload = await req?.json();

  try {
    const users = await prisma.user.findUnique({
      where: {
        username: payload?.username,
        password: payload?.password,
      },
    });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Somethin went wrong, try again" },
      { status: 500 }
    );
  }
}
