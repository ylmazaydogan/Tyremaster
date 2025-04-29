"use client";

import { makeApiRequest } from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface IProfile {
  name?: string;
  email?: string;
  // Diğer profil alanları
}

export default function ProfileData() {
  const queryClient = useQueryClient();

  const {
    data: profile,
    isLoading,
    error
  } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await makeApiRequest("/profile");
      return response.data;
    }
  });

  const updateProfileMutation = useMutation({
    mutationFn: async (profileData: Partial<IProfile>) => {
      const response = await makeApiRequest("/profile", "PUT", profileData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <div>{JSON.stringify(profile, null, 2)}</div>;
} 