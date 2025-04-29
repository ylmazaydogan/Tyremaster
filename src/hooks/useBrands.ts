import { useQuery } from '@tanstack/react-query';
import { makeApiRequest } from '@/lib/axios';

interface Brand {
  key: string;
  link: string;
  [key: string]: string;
}
interface Brands {
  [letter: string]: Brand[];
}
interface UseBrandsResult {
  brands: Brand[];
  isLoading: boolean;
  error: Error | null;
  toggleLetter: (letter: string) => void;
  isActive: (letter: string) => boolean;
  hasBrand: (letter: string) => boolean;
  getButtonVariant: (letter: string) => 'default' | 'outline';
  selectedLetters: string[];
}
export const useBrands = (): UseBrandsResult => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const response = await makeApiRequest("/brands");
      return response.data;
    }
  });

  return {
    brands: data?.brands || [],
    isLoading,
    error,
    toggleLetter: (letter: string) => {},
    isActive: (letter: string) => false,
    hasBrand: (letter: string) => false,
    getButtonVariant: (letter: string) => 'default',
    selectedLetters: []
  };
};
export {};
