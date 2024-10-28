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

export default function ShopSidebar() {
    const products = [
        {
            season: "Summer",
            seasonIcon: "/icons/summer.png",
            brand: "Michelin",
            description: "MICHELIN CITY EXTRA",
            barcode: "3528701323190",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Austone",
            description: "165/60R14 79H All Season Fixclime SP-401",
            barcode: "8808563405063",
            quantity: 120,
            price: "31.79",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        }, {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
        {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        }, {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        }, {
            season: "Winter",
            seasonIcon: "/icons/winter.png",
            brand: "Hankook",
            description: "155/65R14 75T WINTER I*CEPT RS2",
            barcode: "8808563405063",
            quantity: 120,
            price: "45.01",
            orderQuantity: 1,
            image: "/images/tire-image.png",
        },
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-1/6 p-12 border-r border-light-silver bg-white h-full min-h-screen ml-4">
                {/* Filter by Price */}
                <div className="mb-10">
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

                <hr className="my-6 border-light-silver" />

                {/* Filter by Season */}
                <div className="mb-10">
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

                <hr className="my-6 border-light-silver" />

                {/* Filter by Width */}
                <div className="mb-10">
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

                <hr className="my-6 border-light-silver" />

                {/* Filter by Brand */}
                <div className="mb-10">
                    <h2 className="text-sm font-bold text-black font-arimo uppercase mb-4">Filter by Brand</h2>
                    <input type="text" placeholder="Find a Brand" className="mb-2 w-full p-2 border border-cool-gray rounded text-sm" />
                    <div className="flex flex-col space-y-2 font-lato font-bold text-black">
                        <a href="#" className="text-base">All</a>
                        <a href="#" className="text-base">Brand</a>
                        <a href="#" className="text-base">Brand</a>
                        <a href="#" className="text-base">Brand</a>
                        <a href="#" className="text-base">Brand</a>
                    </div>
                </div>

                <hr className="my-6 border-light-silver" />

                {/* Product Status */}
                <div className="mb-10">
                    <h2 className="font-bold text-black font-arimo uppercase mb-4 text-base">Product Status</h2>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray">Only in stock</span>
                    </label>
                </div>

                <hr className="my-6 border-light-silver" />

                {/* Filter by Diameter */}
                <div className="mb-10">
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
            <div className="w-5/6 p-8">
                <Table className="min-w-full">
                    <TableHeader>
                        <TableRow>
                            {/* Empty header cell for the image column */}
                            <TableHead className="text-base text-left"></TableHead> {/* Boş bırakılmış hücre */}
                            <TableHead className="font-bold text-gray-800 text-base text-left">SEASON</TableHead>
                            <TableHead className="font-bold text-gray-800 text-base text-left">BRAND</TableHead>
                            <TableHead className="font-bold text-gray-800 text-base text-left">DESCRIPTION</TableHead>
                            <TableHead className="font-bold text-gray-800 text-base text-left">BARCODE</TableHead>
                            <TableHead className="font-bold text-gray-800 text-base text-left">QUANTITY</TableHead>
                            <TableHead className="font-bold text-gray-800 text-base text-left">PRICE</TableHead>
                            <TableHead className="font-bold text-gray-800 text-base text-right">ORDER</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.barcode} className="border-b">
                                {/* Product image */}
                                <TableCell className="py-4">
                                    <img src={product.image} alt="Product" className="w-[37.71px] h-[54px] object-cover" />
                                </TableCell>

                                {/* Season and icon */}
                                <TableCell className="py-4">
                                    <div className="flex items-center">
                                        <img src={product.seasonIcon} alt="season icon" className="w-6 h-6 inline-block mr-2" />
                                        <span className="text-black font-medium">{product.season}</span>
                                    </div>
                                </TableCell>

                                <TableCell className="py-4 font-arimo text-base font-bold text-black">{product.brand}</TableCell>
                                <TableCell className="py-4 text-black text-sm font-arimo">{product.description}</TableCell>
                                <TableCell className="py-4 text-black font-arimo text-sm">{product.barcode}</TableCell>
                                <TableCell className="py-4 text-gray-700">
                                    <div className="flex items-center justify-between">
                                        <span>{product.quantity} pcs</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 text-black font-arimo text-base font-semibold">€ {product.price}</TableCell>

                                {/* Order buttons and SVG button */}
                                <TableCell className="py-4 text-right">
                                    <div className="flex items-center justify-end space-x-4">
                                        {/* Minus, order quantity, and plus buttons */}
                                        <div className="flex items-center border border-cool-gray rounded-lg p-2">
                                            <button className="bg-transparent text-black px-2 py-1 rounded-l-lg focus:outline-none">-</button>
                                            <span className="mx-2 font-poppins text-base text-black">{product.orderQuantity}</span>
                                            <button className="bg-transparent text-black px-2 py-1 rounded-r-lg focus:outline-none">+</button>
                                        </div>

                                        {/* Add to cart button */}
                                        <button className="flex items-center justify-center bg-green-500 p-3 rounded-full focus:outline-none">
                                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.904297" width="32" height="32" rx="16" fill="#1FCE6D" />
                                                <g transform="translate(9.5, 10)">
                                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.904297 0.4C0.904297 0.293913 0.949953 0.192172 1.03122 0.117157C1.11249 0.0421427 1.22271 0 1.33764 0H2.63768C2.73435 2.46492e-05 2.82823 0.0298805 2.90439 0.0848198C2.98056 0.139759 3.03464 0.216627 3.05803 0.3032L3.40904 1.6H13.4714C13.535 1.60005 13.5978 1.61304 13.6554 1.63804C13.713 1.66304 13.7639 1.69944 13.8045 1.74464C13.8451 1.78985 13.8745 1.84276 13.8904 1.89961C13.9064 1.95647 13.9086 2.01587 13.8969 2.0736L12.5969 8.4736C12.5783 8.56526 12.5256 8.64805 12.4479 8.70765C12.3702 8.76725 12.2723 8.79991 12.1713 8.8H4.37107C4.27004 8.79991 4.17222 8.76725 4.09452 8.70765C4.01681 8.64805 3.96411 8.56526 3.94552 8.4736L2.64635 2.0856L2.29967 0.8H1.33764C1.22271 0.8 1.11249 0.757857 1.03122 0.682843C0.949953 0.607828 0.904297 0.506087 0.904297 0.4ZM5.23776 8.8C4.77804 8.8 4.33715 8.96857 4.01207 9.26863C3.687 9.56869 3.50438 9.97565 3.50438 10.4C3.50438 10.8243 3.687 11.2313 4.01207 11.5314C4.33715 11.8314 4.77804 12 5.23776 12C5.69749 12 6.13838 11.8314 6.46345 11.5314C6.78853 11.2313 6.97115 10.8243 6.97115 10.4C6.97115 9.97565 6.78853 9.56869 6.46345 9.26863C6.13838 8.96857 5.69749 8.8 5.23776 8.8ZM11.3046 8.8C10.8449 8.8 10.404 8.96857 10.0789 9.26863C9.75386 9.56869 9.57123 9.97565 9.57123 10.4C9.57123 10.8243 9.75386 11.2313 10.0789 11.5314C10.404 11.8314 10.8449 12 11.3046 12C11.7643 12 12.2052 11.8314 12.5303 11.5314C12.8554 11.2313 13.038 10.8243 13.038 10.4C13.038 9.97565 12.8554 9.56869 12.5303 9.26863C12.2052 8.96857 11.7643 8.8 11.3046 8.8Z" fill="white" />
                                                    </svg>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        

                    </TableFooter>
                        

                </Table>
                <TableRow>
                            <TableCell colSpan={8}> {/* colSpan 8 yaparak pagination'ı tüm satırlara yayabiliriz */}
                                <div className=" absolute right-0 mr-28 flex justify-end mt-4 ">
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
        </div >
    );
}