"use client";

import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCient = new QueryClient();

export default function CLientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme>
      <QueryClientProvider client={queryCient}>
        <section>{children}</section>
      </QueryClientProvider>
    </Theme>
  );
}
