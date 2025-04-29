"use client";

import { useBrands } from "@/hooks/useBrands";

export default function BrandsData() {
  const { brands, isLoading, error } = useBrands();

  if (isLoading) return <div>Loading brands...</div>;
  if (error) return <div>Error loading brands</div>;

  return (
    <div>
      {brands.map(brand => (
        <div key={brand.id}>{brand.name}</div>
      ))}
    </div>
  );
} 