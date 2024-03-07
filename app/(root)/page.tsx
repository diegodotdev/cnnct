import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">Sign In</Link>
      </SignedOut>
    </div>
  );
}
