"use client";

import { signIn, signOut } from "next-auth/react";
import { type Session } from "next-auth";

type SignInOutProps = { session: Session | null };

export default function SignInOut({ session }: SignInOutProps) {
  if (!session) {
    return (
      <button
        className="text-grey-900 bg-transparent font-semibold transition-all hover:bg-transparent hover:text-indigo-500"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    );
  }

  return (
    <button
      className="text-grey-900 bg-transparent font-semibold transition-all hover:bg-transparent hover:text-indigo-500"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
