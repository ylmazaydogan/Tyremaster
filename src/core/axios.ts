import axios from "axios";
import type { AxiosInstance } from "axios";
const createApiClient = (baseURL: string): AxiosInstance => {
  const apiInstance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Commkey": process.env.NEXT_PUBLIC_COMMALEON_PLATFORM_KEY,
    },
  });

  return apiInstance;
};

const apiUrl = process.env.NEXT_PUBLIC_COMMALEON_API_URL;

if (!apiUrl) {
  throw new Error(
    "NEXT_PUBLIC_COMMALEON_API_URL environment variable is not defined."
  );
}

const commaleonApi: AxiosInstance = createApiClient(apiUrl);

export { commaleonApi };
