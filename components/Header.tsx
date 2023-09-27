import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignInOut from "@/components/signInOut";
import authOptions from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between bg-indigo-50 p-3 align-middle">
      <div className="flex align-middle">
        <Link
          href="#main-content"
          className="absolute left-[-300px] mt-1.5 bg-indigo-300 p-2 transition-all duration-200 focus:left-3"
        >
          Jump to main content
        </Link>
        <Link
          className="flex items-center align-middle text-2xl font-semibold"
          href="/"
        >
          <Image alt="logo" src="/Logo.svg" width={50} height={50} />
          Measure My Deck
        </Link>
      </div>
      <div className="flex justify-evenly align-middle">
        <SignInOut session={session} />
      </div>
    </nav>
  );
}

export default Header;
