"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "factoryx-commerce";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
} 