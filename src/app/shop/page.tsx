import React from "react";
// Import ShadCN table components
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader, TableFooter } from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Hero from "@/components/Hero"

export default function ShopSidebar() {
    const products = [
        {
            brand: "Michelin",
            description: "ATTURO AZ 800 XL",
            dimensions: "225/60 R17",
            noise: "75 db",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
        },
        {
            brand: "Austone",
            description: "165/60R14 79H All Season Fixclime SP-401",
            dimensions: "165/60 R14",
            noise: "79H",
            quantity: 120,
            price: "31.79",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
        {
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            dimensions: "155/65 R14",
            noise: "75T",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
        },
    ];

    return (
            
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-1/7 bg-white h-full min-h-screen ml-4 mt-11">
                {/* Filter by Price */}
                <div className="border-x border-t border-light-silver-2 p-4 ">
                    <h2 className="text-base font-bold text-black font-arimo uppercase mb-4">Filter by Price</h2>
                    <div className="flex flex-col items-center">
                        <input type="range" id="priceRange" min="0" max="200" className="w-full mb-2" />
                        <div className="flex justify-between w-full text-xs">
                            <span>€0</span>
                            <span>€200</span>
                        </div>
                        <button className="mt-4 w-full py-2 bg-gray-200 rounded text-xs">Filter</button>
                    </div>
                </div>

                {/* Filter by Season */}
                <div className="border-x border-t border-gray-200 p-4">
                    <h2 className="text-base font-bold text-black font-arimo uppercase mb-4">Filter by Season</h2>
                    <div className="flex flex-col">
                        <a href="#" className="flex items-center mb-2">
                            <span className="mr-2">☀️</span> <span className="text-sm text-gray">Summer</span>
                        </a>
                        <a href="#" className="flex items-center mb-2">
                            <span className="mr-2">❄️</span> <span className="text-sm text-gray">Winter</span>
                        </a>
                        <a href="#" className="flex items-center mb-2">
                            <span className="mr-2">🌦</span> <span className="text-sm text-gray">All Season</span>
                        </a>
                    </div>
                </div>

                {/* Filter by Width */}
                <div className="border-x border-t border-gray-200 p-4">
                    <h2 className="text-base font-bold text-black font-arimo uppercase mb-4">Filter by Width</h2>
                    <div className="flex flex-col space-y-2 font-bold">
                        <a href="#" className="text-base font-arimo text-black">All</a>
                        <a href="#" className="text-base font-arimo text-black">255</a>
                        <a href="#" className="text-base font-arimo text-black">265</a>
                        <a href="#" className="text-base font-arimo text-black">275</a>
                        <a href="#" className="text-base font-arimo text-black">285</a>
                        <a href="#" className="text-base font-arimo text-black">295</a>
                    </div>
                </div>

                {/* Filter by Brand */}
                <div className="border-x border-t border-gray-200 p-4">
                    <h2 className="text-base font-bold text-black font-arimo uppercase mb-4">Filter by Brand</h2>
                    <input type="text" placeholder="Find a Brand" className="mb-2 w-full p-2 border border-cool-gray rounded text-sm" />
                    <div className="flex flex-col space-y-2 font-lato font-bold text-black">
                        <a href="#" className="text-base">All</a>
                        <a href="#" className="text-base">Brand</a>
                        <a href="#" className="text-base">Brand</a>
                        <a href="#" className="text-base">Brand</a>
                        <a href="#" className="text-base">Brand</a>
                    </div>
                </div>

                {/* Product Status */}
                <div className="border-x border-t border-gray-200 p-4">
                    <h2 className="text-base font-bold text-black font-arimo uppercase mb-4">Product Status</h2>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray">Only in stock</span>
                    </label>
                </div>

                {/* Filter by Diameter */}
                <div className="border-x border-t border-b border-gray-200 p-4 last:rounded-b">
                    <h2 className="text-base font-bold text-black font-arimo uppercase mb-4">Filter by Diameter</h2>
                    <div className="flex flex-col space-y-2 font-bold text-black">
                        <a href="#" className="text-base">All</a>
                        <a href="#" className="text-base">16</a>
                        <a href="#" className="text-base">17</a>
                        <a href="#" className="text-base">18</a>
                    </div>
                </div>
            </aside>

            {/* Main Product Table */}
            <div className="w-5/6 pl-8 pt-11">
                <div className="border border-light-silver-2">
                    <Table className="min-w-full">
                        <TableHeader>
                            <TableRow className="border-b border-gray-200">
                                <TableHead className="text-sm font-bold text-black text-left">BRAND</TableHead>
                                <TableHead className="text-sm font-bold text-black text-left">MODEL</TableHead>
                                <TableHead className="text-sm font-bold text-black text-left">DIMENSIONS</TableHead>
                                <TableHead className="text-sm font-bold text-black text-left">TYPE</TableHead>
                                <TableHead className="text-sm font-bold text-black text-left">NOISE</TableHead>
                                <TableHead className="text-sm font-bold text-black text-left">STOCK</TableHead>
                                <TableHead className="text-sm font-bold text-black text-left">PRICE</TableHead>
                                <TableHead className="text-sm font-bold text-black text-right pr-4">ORDER</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.barcode} className="border-b">
                                    <TableCell className="py-4 text-black">{product.brand}</TableCell>
                                    <TableCell className="py-4 text-black">{product.description}</TableCell>
                                    <TableCell className="py-4 text-black">{product.dimensions}</TableCell>
                                    <TableCell className="py-4">
                                        <span className="text-yellow-500">☀️</span>
                                    </TableCell>
                                    <TableCell className="py-4 text-black">{product.noise}</TableCell>
                                    <TableCell className="py-4 text-black">{product.quantity} pcs</TableCell>
                                    <TableCell className="py-4 text-black">€ {product.price}</TableCell>
                                    <TableCell className="py-4 text-right">
                                        <div className="flex items-center justify-end space-x-4">
                                            <div className="flex items-center border border-gray-200 rounded">
                                                <button className="px-2 py-1 text-black">-</button>
                                                <span className="px-2 text-black">{product.orderQuantity}</span>
                                                <button className="px-2 py-1 text-black">+</button>
                                            </div>
                                            <button className="bg-green-500 text-white p-2 rounded">
                                                🛒
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <TableRow>
                    <TableCell colSpan={8}>
                        <div className="absolute right-0 mr-28 flex justify-end mt-4">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">5</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                    <PaginationLink href="#">>></PaginationLink>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </TableCell>
                </TableRow>
            </div>
        </div>
    );
}