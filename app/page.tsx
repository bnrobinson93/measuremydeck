import { type NextPage } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authOptions from "./api/auth/[...nextauth]/options";

async function Home() {
  const session = await getServerSession(authOptions);
  const callToActionRoute = session?.user ? "/decks/create" : "/login";

  return (
    <>
      <main
        id="main"
        className="flex min-h-screen justify-center py-16 lg:py-24"
      >
        <section className="relative max-w-2xl px-5 py-6 sm:mx-auto sm:px-6 lg:mx-5">
          <div className="absolute left-96 top-32 h-96 w-96 rounded-full bg-indigo-500 opacity-[0.15] blur-3xl" />
          <div className="absolute right-48 top-8 h-96 w-96 rounded-full bg-amber-500 opacity-10 blur-3xl" />
          <div className="border-b border-gray-200  px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-medium leading-6 text-gray-900">
              How do you measure?
            </h1>
          </div>
          <p className="mt-4 pb-4 text-lg">
            Create and maintain all of your decks. With built-in Magic the
            Gathering content, our service will help track every card and deck
            it&apos;s in.
          </p>
          <Link
            className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            href={callToActionRoute}
          >
            Start Building
          </Link>
        </section>
      </main>
    </>
  );
}

export default Home;
