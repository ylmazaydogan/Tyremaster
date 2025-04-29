"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "factoryx-commerce";

type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      {props.children}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;
