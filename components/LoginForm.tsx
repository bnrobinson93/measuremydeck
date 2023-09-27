"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { Button } from "./ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least six characters" }),
  "remember-me": z.boolean(),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                Email address
              </FormLabel>
              <FormControl>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  {...field}
                />
              </FormControl>
              <FormDescription>Username or email address</FormDescription>
              <FormMessage className="text-xs italic text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-700">
                Password
              </FormLabel>
              <FormControl className="mt-1">
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  {...field}
                />
              </FormControl>
              <FormDescription>Password</FormDescription>
              <FormMessage className="text-xs italic text-red-700" />
            </FormItem>
          )}
        />

        <div>
          <FormField
            name="remember-me"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex items-center">
                <FormControl className="mt-1">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-4 w-4 rounded border-gray-300 accent-indigo-600 focus:ring-indigo-500"
                  />
                </FormControl>
                <FormLabel className="ml-2 block text-sm text-gray-900">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div className="text-sm">
          <Link
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>

        <Button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
