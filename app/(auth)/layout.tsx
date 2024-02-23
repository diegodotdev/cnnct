import Link from "next/link";
import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";

const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen">
      <div className="w-full grid place-items-center">
        <div className="h-[10vh] w-[90vw] flex justify-start items-center">
          <Link href="/" className={cn(lobster.className, "text-4xl")}>
            Foodbase
          </Link>
        </div>
      </div>
      <div className="w-full h-[90vh] grid place-items-center">{children}</div>
    </main>
  );
}
