"use client";

import { makeMethodsRequest } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Method {
  id: string | number;
  name: string;
  description?: string;
  isActive?: boolean;
}

export default function MethodsData() {
  const {
    data: methods,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["methods"],
    queryFn: async () => {
      const response = await makeMethodsRequest();
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading payment methods</div>;
  }

  return (
    <div className="space-y-4">
      {methods?.map((method: Method) => (
        <div 
          key={method.id} 
          className="p-4 border border-light-silver-2 rounded-st"
        >
          <h3 className="font-semibold">{method.name}</h3>
          {method.description && (
            <p className="text-sm text-gray">{method.description}</p>
          )}
          <span className={`text-sm ${method.isActive ? 'text-green' : 'text-gray'}`}>
            {method.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      ))}
    </div>
  );
} 