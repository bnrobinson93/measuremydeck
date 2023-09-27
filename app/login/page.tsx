import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/LoginForm";
import LoginOptions from "@/components/LoginOptions";

export const metadata: Metadata = {
  title: "Login - Measure My Deck",
};

function Login() {
  return (
    <>
      <div className="min-h-screen px-4 py-12 lg:px-8">
        <div className="px-auto mx-auto flex max-w-md flex-col justify-center gap-4 px-4 py-2">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <div className="mt-6">
              <LoginForm />
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
            </div>
            <LoginOptions />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
