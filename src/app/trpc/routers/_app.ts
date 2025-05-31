import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  tenHelloes: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .mutation(async function* getTenHelloes({
      input,
    }: {
      input: { text: string };
    }) {
      for (let i = 0; i < 10; i++) {
        yield `hello ${input.text} `;
        await delay(1000);
      }
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
