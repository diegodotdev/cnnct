import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";
import Leftbar from "@/components/leftbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cnnct",
  description:
    "Welcome to cnnct, a place where you can share and interact with people with similar likings as you.",
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
          <Nav />
          <div className="w-[90vw] md:w-[80vw] mx-auto h-[88vh] flex">
            <Leftbar />
            <main className="w-3/4 h-[88vh]">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
