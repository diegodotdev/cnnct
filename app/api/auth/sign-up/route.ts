import { NextResponse, NextRequest } from "next/server";
import prisma from "@/db/prisma";

export async function POST(req: NextRequest, { params }: any) {
  const payload = await req.json();

  try {
    const userExits = await prisma.user.findUnique({
      where: {
        username: payload?.username,
      },
    });

    if (userExits) {
      return NextResponse.json(
        { message: "Username is taken, try again" },
        { status: 200 }
      );
    } else {
      await prisma.user.create({
        data: {
          username: payload?.username,
          password: payload?.password,
          first_name: payload?.first_name,
          last_name: payload?.last_name,
        },
      });

      return NextResponse.json({ message: "CREATED" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({
      error: error,
      message: "Something went wrong, try again",
    });
  }
}
