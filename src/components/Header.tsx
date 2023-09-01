import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

function Header() {
  return (
    <nav className="flex justify-between bg-indigo-100 p-3 align-middle">
      <div className="flex align-middle">
        <Link
          href="#main-content"
          className="absolute left-[-300px] mt-1.5 bg-indigo-300 p-2 transition-all duration-200 focus:left-3"
        >
          Jump to main content
        </Link>
        <Link href="/">
          <Image alt="logo" src="/LogoWithText.svg" width={350} height={100} />
        </Link>
      </div>
      <div className="flex justify-evenly align-middle">
        <SignInOut />
      </div>
    </nav>
  );
}

const SignInOut = () => {
  const { data: sessionData } = useSession();
  console.log(sessionData);

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <button onClick={sessionData ? () => signOut() : () => signIn()}>
      {sessionData ? "Sign out" : "Sign in"}
    </button>
  );
};

export default Header;
