import { Post } from "@prisma/client";

export interface UserInfo extends Post {
  user: {
    username: string;
    first_name: string;
    last_name: string;
    avatar: string;
    bio: string;
  };
}
