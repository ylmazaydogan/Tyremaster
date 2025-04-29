"use client";

import { makeApiRequest, makeFiltersRequest } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

// Tip tanımlamaları
interface FilterData {
  filters: Record<string, string[]>;
  currentPath: string;
  searchQuery: string | null;
  sortTitle: string | null;
  sortDirection: string | null;
}

export default function FilterData() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    data,
    isLoading,
    error
  } = useQuery<FilterData>({
    queryKey: ['filters', pathname, searchParams.toString()],
    queryFn: async () => {
      const params = new URLSearchParams(searchParams.toString());
      const filters: Record<string, string[]> = {};
      
      params.forEach((value, key) => {
        if (filters[key]) {
          filters[key].push(value);
        } else {
          filters[key] = [value];
        }
      });

      const response = await makeFiltersRequest("GET", {
        filters,
        search: params.get('search'),
        sort: params.get('sort'),
        sortDirection: params.get('sortDirection')
      });

      return {
        filters,
        currentPath: pathname,
        searchQuery: params.get('search'),
        sortTitle: params.get('sort'),
        sortDirection: params.get('sortDirection'),
        ...response.data
      };
    },
  });

  // Helper fonksiyonlar
  const updateURL = (newParams: URLSearchParams) => {
    newParams.delete('p');
    router.replace(`${pathname}?${newParams.toString()}`);
  };

  const setFilter = (key: string, value: string | string[]) => {
    const newParams = new URLSearchParams(searchParams.toString());
    
    if (value === '') {
      newParams.delete(key);
    } else {
      newParams.delete(key);
      if (Array.isArray(value)) {
        value.forEach((v) => newParams.append(key, v));
      } else {
        newParams.set(key, value);
      }
    }
    updateURL(newParams);
  };

  const clearFilter = (key: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(key);
    updateURL(newParams);
  };

  const clearAllFilters = () => {
    router.replace(pathname);
  };

  const setSearch = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value === '') {
      newParams.delete('search');
    } else {
      newParams.set('search', value);
    }
    updateURL(newParams);
  };

  const setSort = (title: string, direction: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (title === 'delete') {
      newParams.delete('sort');
      newParams.delete('sortDirection');
    } else {
      newParams.set('sort', title);
      newParams.set('sortDirection', direction);
    }
    updateURL(newParams);
  };

  if (isLoading) return <div>Loading filters...</div>;
  if (error) return <div>Error loading filters</div>;

  return (
    <div className="space-y-4">
      {/* Aktif filtreleri göster */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(data?.filters || {}).map(([key, values]: [string, string[]]) => (
          values.map((value) => (
            <div 
              key={`${key}-${value}`}
              className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-st"
            >
              <span>{key}: {value}</span>
              <button 
                onClick={() => clearFilter(key)}
                className="text-red-500"
              >
                ×
              </button>
            </div>
          ))
        ))}
        {Object.keys(data?.filters || {}).length > 0 && (
          <button 
            onClick={clearAllFilters}
            className="px-3 py-1 bg-red-100 text-red-600 rounded-st"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Sıralama ve arama kontrolleri */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={data?.searchQuery || ''}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded-st"
        />
        <select
          value={`${data?.sortTitle || ''}-${data?.sortDirection || ''}`}
          onChange={(e) => {
            const [title, direction] = e.target.value.split('-');
            setSort(title, direction);
          }}
          className="px-3 py-2 border rounded-st"
        >
          <option value="delete">Default Sort</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
} 