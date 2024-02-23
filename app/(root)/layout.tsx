import Nav from "@/components/shared/nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <Nav />
      <div className="w-[90vw] mx-auto">{children}</div>
    </main>
  );
}
