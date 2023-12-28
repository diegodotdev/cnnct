import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "cnnct",
  description: "Sign in or create an account to start sharing on cnnct.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="w-full h-screen flex">
            <div className="w-1/2 h-full relative">
              <Image
                src="/assets/auth.jpg"
                alt="friends"
                fill
                objectFit="cover"
              />
              <div className="absolute top-0 right-0 w-full h-full bg-black/70 z-50 grid place-items-center">
                <p className={cn(pacifico.className, "text-7xl opacity-20")}>
                  cnnct
                </p>
              </div>
            </div>
            <main className="w-1/2 h-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
