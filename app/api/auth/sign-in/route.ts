import { NextResponse, NextRequest } from "next/server";
import prisma from "@/db/prisma";

export async function POST(req: NextRequest, { params }: any) {
  const payload = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: payload?.username,
        password: payload?.password,
      },
    });

    if (user) {
      return NextResponse.json({ message: "User Found" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Profile was not found, try again" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({
      error: error,
      message: "Something went wrong, try again",
    });
  }
}
