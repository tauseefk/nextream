import { ClientGreeting } from "./client-greeting";
import RootLayout from "./layout";
import { getQueryClient } from "./trpc/server";
import { trpc } from "@/utils/trpc";

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery({
    queryKey: ["hello"],
    queryFn: () => trpc.hello,
  });

  return (
    <RootLayout>
      <ClientGreeting />
    </RootLayout>
  );
}
