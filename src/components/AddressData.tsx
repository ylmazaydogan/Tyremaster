"use client";

import { makeAddressRequest } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Address {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

export default function AddressData() {
  const {
    data: addresses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: async () => {
      const response = await makeAddressRequest();
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading addresses...</div>;
  }

  if (error) {
    return <div>Error loading addresses</div>;
  }

  return <div>{JSON.stringify(addresses, null, 2)}</div>;
} 