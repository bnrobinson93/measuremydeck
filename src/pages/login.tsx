import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import * as Form from "@radix-ui/react-form";
import {
  GithubOutline,
  TwitterOutline,
  FacebookOutline,
  GoogleOutline,
} from "@styled-icons/evaicons-outline";
import { Discord } from "@styled-icons/remix-line";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <>
      <Head>
        <title>Login - Measure My Deck</title>
        <meta
          name="description"
          content="store and assign your cards to a deck"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="min-h-screen px-4 py-12 lg:px-8">
        <div className="px-auto mx-auto flex max-w-md flex-col justify-center gap-4 px-4 py-2">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <Form.Root className="space-y-6" action="#">
              <Form.Field name="email">
                <Form.Label className="block text-sm font-medium text-gray-700">
                  Email address
                </Form.Label>
                <Form.Control asChild className="mt-1">
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </Form.Control>
                <Form.Message
                  className="text-xs italic text-red-700"
                  match="valueMissing"
                >
                  Email is required
                </Form.Message>
              </Form.Field>

              <Form.Field name="password">
                <Form.Label className="block text-sm font-medium text-gray-700">
                  Password
                </Form.Label>
                <Form.Control asChild className="mt-1">
                  <input
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </Form.Control>
                <Form.Message
                  className="text-xs italic text-red-700"
                  match="valueMissing"
                >
                  Password is required
                </Form.Message>
              </Form.Field>

              <Form.Field name="remember-me" className="flex items-center">
                <Form.Control asChild className="space-evenly flex">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 accent-indigo-600 focus:ring-indigo-500"
                  />
                </Form.Control>
                <Form.Label className="ml-2 block text-sm text-gray-900">
                  Remember me
                </Form.Label>
              </Form.Field>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>

              <Form.Submit className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign in
              </Form.Submit>
            </Form.Root>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
