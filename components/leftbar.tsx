"use client";

import { getLocalStorage } from "@/hooks/useLocalStorage";
import { LEFTBAR_LINKS, SIGNED_IN_LINKS } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogHeader,
} from "./ui/dialog";
import { Plus } from "lucide-react";
import PostForm from "./post-form";

export default function Leftbar() {
  const auth = getLocalStorage();
  const pathname = usePathname();

  return (
    <div className="w-1/4 border-r border-gray-900 p-5 pl-0 flex flex-col gap-5">
      {LEFTBAR_LINKS.map((link) => (
        <Link href={link.href} key={link.id}>
          <Button
            variant={pathname === link.href ? "secondary" : "ghost"}
            className="w-full justify-start gap-2"
          >
            <link.icon size="20px" />
            <span>{link.title}</span>
          </Button>
        </Link>
      ))}
      {auth &&
        SIGNED_IN_LINKS.map((link) => (
          <Link href={link.href} key={link.id}>
            <Button
              variant={pathname === link.href ? "secondary" : "ghost"}
              className="w-full justify-start gap-2"
            >
              <link.icon size="20px" />
              <span>{link.title}</span>
            </Button>
          </Link>
        ))}
      {auth && (
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus />
              <span>Post</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>What&#39;s on your mind?</DialogTitle>
              <DialogDescription>
                Share what you are thinking about
              </DialogDescription>
            </DialogHeader>
            <PostForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
