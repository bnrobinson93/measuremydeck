import { router } from "../trpc";
import { authRouter } from "./auth";
import { gameRouter } from "./game";
import { userRouter } from "./user";

export const appRouter = router({
  user: userRouter,
  auth: authRouter,
  deck: gameRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
