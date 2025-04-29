"use client";

import { makeApiRequest } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface IAttribute {
  Name: string;
  Values: string[];
  // Diğer attribute özellikleri buraya eklenebilir
}

interface AttributeResponse {
  result: {
    aggregations: {
      attributes: IAttribute[];
    };
  };
}

export default function AttributesData() {
  const {
    data,
    isLoading,
    error,
  } = useQuery<AttributeResponse>({
    queryKey: ["attributes"],
    queryFn: async () => {
      const response = await makeApiRequest("/attributes");
      return response.data;
    },
  });

  const attributes = data?.result?.aggregations?.attributes || [];

  if (isLoading) {
    return <div>Loading attributes...</div>;
  }

  if (error) {
    return <div>Error loading attributes</div>;
  }

  return <div>{JSON.stringify(attributes, null, 2)}</div>;
} 