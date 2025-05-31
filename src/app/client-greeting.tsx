"use client";
import { trpc } from "@/utils/trpc";

export function ClientGreeting() {
  const greeting = trpc.hello.useQuery({ text: "potato" });

  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}
