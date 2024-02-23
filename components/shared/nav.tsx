import Link from "next/link";
import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { NAV_LINKS, SIGNED_IN_LINKS } from "@/constants";
import { Button } from "../ui/button";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  return (
    <header className="w-full grid place-items-center h-[10vh] border-b border-zinc-100">
      <div className="w-[90vw] h-full flex justify-between items-center">
        <Link href="/">
          <span className={cn(lobster.className, "text-4xl")}>Foodbase</span>
        </Link>
        <nav className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.id}>
              <span>{link.title}</span>
            </Link>
          ))}
          <SignedIn>
            <>
              {SIGNED_IN_LINKS.map((link) => (
                <Link href={link.href} key={link.id}>
                  <span>{link.title}</span>
                </Link>
              ))}
              <UserButton afterSignOutUrl="/" />
            </>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button size="sm">Sign In</Button>
            </Link>
          </SignedOut>{" "}
        </nav>
      </div>
    </header>
  );
}
