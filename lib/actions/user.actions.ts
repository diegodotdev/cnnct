"use server";

import prisma from "../db/prisma";

export const createUser = async (body: {
  username: string | null;
  firstName: string;
  lastName: string;
  avatar: string;
  bio?: string;
}) => {
  try {
    await prisma.user.create({
      data: {
        username: body?.username ? body?.username : "",
        firstName: body?.firstName,
        lastName: body?.lastName,
        avatar: body?.avatar,
        bio: body?.bio,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
