import Image from "next/image";
import { getPosts } from "@/lib/requests";
import { Suspense } from "react";
import Loading from "@/components/loading";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { UserInfo } from "@/types";
import { User } from "lucide-react";
import moment from "moment";

export default async function Home() {
  const posts: UserInfo[] = await getPosts();

  return (
    <ScrollArea className="w-full h-full">
      <div className=" flex flex-col gap-5 justify-start items-center p-5 pb-0">
        <Suspense fallback={<Loading />}>
          {posts?.map((post) => (
            <div
              className="w-3/4 mx-auto border border-gray-900 rounded-[.5em] p-5"
              key={post?.id}
            >
              <Link
                href={`/p/${post?.id}`}
                className="w-full flex flex-col gap-5"
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center gap-2">
                    {!post?.user?.avatar ? (
                      <div className="w-[30px] h-[30px] bg-gray-900 rounded-full grid place-items-center">
                        <User size="15px" />
                      </div>
                    ) : (
                      <div className="relative w-[20px] h-[20px]">
                        <Image src={post?.user?.avatar} alt="avatar" fill />
                      </div>
                    )}
                    <p>{post?.user?.username}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {moment(post?.created_at).fromNow()}
                  </p>
                </div>
                {post?.content !== "" && (
                  <p className="text-sm">{post?.content}</p>
                )}
                {post?.image && (
                  <div className="w-4/5 h-[200px] relative mx-auto">
                    <Image
                      src={post?.image || ""}
                      alt="post image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </Link>
            </div>
          ))}
        </Suspense>
      </div>
    </ScrollArea>
  );
}
