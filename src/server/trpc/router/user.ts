import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  // listOfDeckApis: publicProcedure.query(({ ctx }) =>
  //   ctx.prisma.user.findMany()
  // ),

  // hello: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input?.text ?? "world"}`,
  //     };
  //   }),

  getUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return {
        user: ctx.prisma.user.findUnique({
          where: {
            id: input?.id ?? "",
          },
        }),
      };
    }),
});
