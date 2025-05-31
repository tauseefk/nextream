"use client";
import { trpcClient } from "@/hooks/trpc";
import { useState } from "react";

export function ClientGreeting() {
  const [greetingData, setGreetingData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMutation = async () => {
    setIsLoading(true);
    try {
      const result = await trpcClient.tenHelloes.mutate({ text: "potato" });
      // Collect all values from the async generator
      let combinedResult = "";
      for await (const value of result) {
        combinedResult += value;
        console.log(combinedResult);
        setGreetingData(combinedResult);
      }
    } catch (error) {
      console.error("Mutation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleMutation}>Send Mutation</button>
      {greetingData && <div>{greetingData}</div>}
    </div>
  );
}
