import { NextResponse, NextRequest } from "next/server";
import prisma from "@/db/prisma";

// Create a post
export async function POST(req: NextRequest, { params }: any) {
  const payload = await req?.json();

  try {
    await prisma.post.create({
      data: {
        userId: payload?.userId,
        content: payload?.content,
        image: payload?.image,
      },
    });
    return NextResponse.json({ message: "Post Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error, message: "Something went wrong, try again" },
      { status: 500 }
    );
  }
}

// Fetch all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
            first_name: true,
            last_name: true,
          },
        },
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error, messgae: "Something went wrong, try again" },
      { status: 500 }
    );
  }
}
