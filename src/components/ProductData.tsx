"use client";

import { makeApiRequest } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: string | number;
  name: string;
  price: string | number;
}

export default function ProductData() {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await makeApiRequest("/countries");
      return response.data;
    },
  });

  return <div>{JSON.stringify(countries)}</div>;
}
