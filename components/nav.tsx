"use client";

import { Pacifico } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { clearLocalStorage, getLocalStorage } from "@/hooks/useLocalStorage";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  const auth = getLocalStorage();

  return (
    <header className="w-full grid place-items-center h-[12vh] border-b border-gray-900">
      <div className="w-[90vw] md:w-[80vw] flex justify-between items-center">
        <Link href="/">
          <span className={cn(pacifico.className, "text-4xl")}>cnnct</span>
        </Link>
        <nav className="flex items-center gap-4">
          {auth ? (
            <Button
              onClick={() => {
                clearLocalStorage();
                window.location.reload();
              }}
            >
              Sign Out
            </Button>
          ) : (
            <Link href="/auth">
              <Button>Sign In</Button>
            </Link>
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
