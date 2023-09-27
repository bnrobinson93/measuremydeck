"use client";

import { NextPage } from "next";
import {
  GithubOutline,
  TwitterOutline,
  FacebookOutline,
  GoogleOutline,
} from "@styled-icons/evaicons-outline";
import { Discord } from "@styled-icons/remix-line";
import { signIn } from "next-auth/react";

const LoginOptions: NextPage = () => {
  return (
    <div className="mt-6 grid grid-cols-5 gap-3">
      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Facebook</span>
          <FacebookOutline size={30} />
        </a>
      </div>

      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Twitter</span>
          <TwitterOutline size={30} />
        </a>
      </div>

      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with GitHub</span>
          <GithubOutline size={30} />
        </a>
      </div>

      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Google</span>
          <GoogleOutline size={30} />
        </a>
      </div>

      <div>
        <a
          onClick={() => signIn("discord")}
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Discord</span>
          <Discord size={30} />
        </a>
      </div>
    </div>
  );
};

export default LoginOptions;
