import { ClientGreeting } from "./client-greeting";
import RootLayout from "./layout";

export default async function Home() {
  return (
    <RootLayout>
      <ClientGreeting />
    </RootLayout>
  );
}
