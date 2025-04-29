"use client";

import { useProducts } from "factoryx-commerce";
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import ActiveFilters from "./ActiveFilters";
import { useState } from "react";

const ProductTable = () => {
    const [activeFilters, setActiveFilters] = useState<any>({});

    const {
        data: {
            result: { data: products = [], filters = {} } = { data: [], filters: {} }
        } = {},
        isLoading,
        isError,
        refetch
    } = useProducts();

    const handleRemoveFilter = (filterType: string, value: string) => {
        if (filterType === 'all') {
            setActiveFilters({});
        } else {
            const newFilters = { ...activeFilters };
            if (filterType === 'Attributes.Filter') {
                const [attrId, val] = value.split('-');
                if (newFilters[filterType]?.[attrId]) {
                    newFilters[filterType][attrId].Value = newFilters[filterType][attrId].Value.filter(
                        (v: string) => v !== val
                    );
                    if (newFilters[filterType][attrId].Value.length === 0) {
                        delete newFilters[filterType][attrId];
                    }
                }
            } else {
                delete newFilters[filterType][value];
            }
            if (Object.keys(newFilters[filterType]).length === 0) {
                delete newFilters[filterType];
            }
            setActiveFilters(newFilters);
        }
        refetch();
    };

    if (isLoading) {
        return <Skeleton className="w-full h-20" />;
    }

    if (isError) {
        return <div>Error loading products</div>;
    }

    if (!products || products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-8">
                <p className="text-lg text-gray-600">No products found</p>
                <p className="text-sm text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
        );
    }

    return (
        <div>
            <ActiveFilters filters={filters} onRemoveFilter={handleRemoveFilter} />
            <Table className="min-w-full border-collapse">
                <TableHeader>
                    <TableRow className="border-b border-light-silver-2">
                        <TableHead className="text-sm font-bold text-black text-left w-24"></TableHead>
                        <TableHead className="text-sm font-bold text-black text-left w-32">BRAND</TableHead>
                        <TableHead className="text-sm font-bold text-black text-left">NAME</TableHead>
                        <TableHead className="text-sm font-bold text-black text-left w-24">SIZE</TableHead>
                        <TableHead className="text-sm font-bold text-black text-left w-24">STOCK</TableHead>
                        <TableHead className="text-sm font-bold text-black text-left w-32">PRICE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.ID} className="border-b">
                            <TableCell className="py-4 w-24">
                                {product.Images?.[0]?.URL ? (
                                    <div className="relative w-[50px] h-[50px]">
                                        <Image
                                            src={product.Images[0].URL}
                                            alt={product.Name}
                                            fill
                                            sizes="50px"
                                            className="object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-[50px] h-[50px] bg-gray-100 rounded-md" />
                                )}
                            </TableCell>
                            <TableCell className="py-4 text-black font-bold text-sm w-32">{product.Brand}</TableCell>
                            <TableCell className="py-4 text-black text-sm ">{product.Name}</TableCell>
                            <TableCell className="py-4 text-black text-sm w-24 whitespace-nowrap">{product.Size}</TableCell>
                            <TableCell className="py-4 text-black w-24 whitespace-nowrap">{product.Stock} pcs</TableCell>
                            <TableCell className="py-4 text-black font-bold w-32 whitespace-nowrap">€ {product.Price.toFixed(2)}</TableCell>
                            <TableCell className="py-4 w-48">
                                <div className="flex items-center justify-end space-x-4">
                                    <div className="flex items-center border border-light-silver-2 rounded-st w-[110px] h-[36px] justify-center">
                                        <button className="px-3 py-1 text-black">-</button>
                                        <span className="px-2 text-black">1</span>
                                        <button className="px-3 py-1 text-black">+</button>
                                    </div>
                                    <button>
                                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.939453" y="0.0625" width="36.7948" height="36.7948" rx="2" fill="#1FCE6D"/>
    <path d="M11.9775 11.5308C11.9775 11.417 12.0265 11.3078 12.1138 11.2273C12.201 11.1468 12.3193 11.1016 12.4426 11.1016H13.8378C13.9415 11.1016 14.0423 11.1336 14.124 11.1926C14.2057 11.2515 14.2638 11.334 14.2889 11.427L14.6656 12.8187H25.4643C25.5326 12.8187 25.6 12.8326 25.6618 12.8595C25.7236 12.8863 25.7782 12.9254 25.8218 12.9739C25.8654 13.0224 25.8969 13.0792 25.914 13.1402C25.9312 13.2012 25.9335 13.265 25.921 13.3269L24.5258 20.1953C24.5058 20.2936 24.4493 20.3825 24.3659 20.4464C24.2825 20.5104 24.1775 20.5455 24.0691 20.5456H15.698C15.5896 20.5455 15.4846 20.5104 15.4012 20.4464C15.3178 20.3825 15.2613 20.2936 15.2413 20.1953L13.8471 13.3398L13.475 11.9601H12.4426C12.3193 11.9601 12.201 11.9149 12.1138 11.8344C12.0265 11.7539 11.9775 11.6447 11.9775 11.5308ZM16.6281 20.5456C16.1348 20.5456 15.6616 20.7265 15.3127 21.0485C14.9639 21.3705 14.7679 21.8072 14.7679 22.2626C14.7679 22.718 14.9639 23.1548 15.3127 23.4768C15.6616 23.7988 16.1348 23.9797 16.6281 23.9797C17.1215 23.9797 17.5947 23.7988 17.9435 23.4768C18.2924 23.1548 18.4884 22.718 18.4884 22.2626C18.4884 21.8072 18.2924 21.3705 17.9435 21.0485C17.5947 20.7265 17.1215 20.5456 16.6281 20.5456ZM23.139 20.5456C22.6456 20.5456 22.1724 20.7265 21.8236 21.0485C21.4747 21.3705 21.2787 21.8072 21.2787 22.2626C21.2787 22.718 21.4747 23.1548 21.8236 23.4768C22.1724 23.7988 22.6456 23.9797 23.139 23.9797C23.6323 23.9797 24.1055 23.7988 24.4544 23.4768C24.8032 23.1548 24.9992 22.718 24.9992 22.2626C24.9992 21.8072 24.8032 21.3705 24.4544 21.0485C24.1055 20.7265 23.6323 20.5456 23.139 20.5456ZM16.6281 21.4041C16.8748 21.4041 17.1114 21.4946 17.2858 21.6556C17.4603 21.8166 17.5583 22.0349 17.5583 22.2626C17.5583 22.4903 17.4603 22.7087 17.2858 22.8697C17.1114 23.0307 16.8748 23.1212 16.6281 23.1212C16.3815 23.1212 16.1449 23.0307 15.9704 22.8697C15.796 22.7087 15.698 22.4903 15.698 22.2626C15.698 22.0349 15.796 21.8166 15.9704 21.6556C16.1449 21.4946 16.3815 21.4041 16.6281 21.4041ZM23.139 21.4041C23.3857 21.4041 23.6222 21.4946 23.7967 21.6556C23.9711 21.8166 24.0691 22.0349 24.0691 22.2626C24.0691 22.4903 23.9711 22.7087 23.7967 22.8697C23.6222 23.0307 23.3857 23.1212 23.139 23.1212C22.8923 23.1212 22.6557 23.0307 22.4813 22.8697C22.3068 22.7087 22.2089 22.4903 22.2089 22.2626C22.2089 22.0349 22.3068 21.8166 22.4813 21.6556C22.6557 21.4946 22.8923 21.4041 23.139 21.4041Z" fill="white"/>
</svg>

                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductTable;