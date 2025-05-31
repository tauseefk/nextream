'use client';
import { trpcClient } from '@/hooks/trpc';
import { useIterable } from 'readable-hook';

export function ClientGreeting() {
  const [{ value }, getHelloes] = useIterable<string>(
    async () => trpcClient.tenHelloes.mutate({ text: 'potato' }),
    {
      delay: 100,
      accumulate: true,
      accumulator: (acc, curr) => {
        return `${acc}${curr}`;
      },
    },
  );

  return (
    <div>
      <button type="button" onClick={() => getHelloes()}>
        Send Mutation
      </button>
      {value && <div>{value}</div>}
    </div>
  );
}
