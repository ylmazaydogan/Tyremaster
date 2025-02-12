interface Brand {
  key: string;
  link: string;
  [key: string]: string;
}
interface Brands {
  [letter: string]: Brand[];
}
interface UseBrandsResult {
  brands: Brands | null;
  loading: boolean;
  error: Error | null;
  toggleLetter: (letter: string) => void;
  isActive: (letter: string) => boolean;
  hasBrand: (letter: string) => boolean;
  getButtonVariant: (letter: string) => 'default' | 'outline';
  selectedLetters: string[];
}
export declare const useBrands: () => UseBrandsResult;
export {};
