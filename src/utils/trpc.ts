import { AppRouter } from '@/app/trpc/routers/_app';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
