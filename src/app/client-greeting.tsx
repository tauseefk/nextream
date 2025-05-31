'use client';
// <-- hooks can only be used in client components
import { trpc } from './trpc/client';
export function ClientGreeting() {
  const greeting = trpc.hello.useQuery({ text: 'tomato' });
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}
