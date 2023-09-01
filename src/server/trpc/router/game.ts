import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const gameRouter = router({
  listOfSupportedGames: publicProcedure.query(({ ctx }) =>
    ctx.prisma.game.findMany({
      select: {
        name: true,
      },
    })
  ),
});
