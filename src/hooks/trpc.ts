import { AppRouter } from '@/app/trpc/routers/_app';
import {
  createTRPCClient,
  createTRPCReact,
  httpBatchStreamLink,
} from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();

export const TRPC_URL = '/api/trpc';

export const trpcClient = createTRPCClient<AppRouter>({
  links: [httpBatchStreamLink({ url: TRPC_URL })],
});
