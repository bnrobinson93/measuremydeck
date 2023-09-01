import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  listOfDeckApis: publicProcedure.query(({ ctx }) =>
    ctx.prisma.example.findMany()
  ),

  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
