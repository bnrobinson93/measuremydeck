import { type NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const list = trpc.deck.listOfSupportedGames.useQuery();
  const routeToLogin = () => router.push("/login");
  console.log(list);

  let message = "Magic the Gathering";
  if (list.status === "loading") return <div />;
  if (list.isError) throw Error("Unable to fetch");

  const length = list.data.length;
  if (length <= 3) message = list.data.map((game) => game.name).join(", ");
  else
    message = `${list.data
      .slice(0, 2)
      .map((game) => game.name)
      .join(", ")}, and more`;

  return (
    <>
      <Head>
        <title>Measure My Deck</title>
        <meta
          name="description"
          content="store and assign your cards to a deck"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main
        id="main"
        className="flex min-h-screen justify-center  py-16 lg:py-24"
      >
        <section className="max-w-2xl px-5 py-6 sm:mx-auto sm:px-6 lg:mx-5">
          <div className="border-b border-gray-200  px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-medium leading-6 text-gray-900">
              How do you measure?
            </h1>
          </div>
          <p className="mt-4 pb-4 text-lg">
            Create and maintain all of your decks. With built-in{" "}
            {list.data ? message : "Magic the Gathreing"} content, our service
            will help track every card and deck it&apos;s in.
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={routeToLogin}
          >
            Start Building
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
