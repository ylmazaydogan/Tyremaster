import React from "react";
// Import ShadCN table components
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader, TableFooter } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import Sidebar from "@/components/shop/Sidebar"
import ShopBanner from "@/components/shop/ShopBanner"

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
            brand: "Michelin",
            description: "ATTURO AZ 800 XL",
            dimensions: "225/60 R17",
            noise: "75 db",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
        },
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
            brand: "Michelin",
            description: "ATTURO AZ 800 XL",
            dimensions: "225/60 R17",
            noise: "75 db",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
        },
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
            brand: "Michelin",
            description: "ATTURO AZ 800 XL",
            dimensions: "225/60 R17",
            noise: "75 db",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
        },
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
            brand: "Michelin",
            description: "ATTURO AZ 800 XL",
            dimensions: "225/60 R17",
            noise: "75 db",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
        },
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
            brand: "Michelin",
            description: "ATTURO AZ 800 XL",
            dimensions: "225/60 R17",
            noise: "75 db",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
        },
        {
            brand: "Michelin",
            description: "ATTURO AZ 800 XL",
            dimensions: "225/60 R17",
            noise: "75 db",
            quantity: 120,
            price: "34.68",
            orderQuantity: 1,
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Shop Banner */}
            <ShopBanner
                title="B2B TYRE SHOP"
                subtitle="SEE OUR COLLECTION"
                description="Discover a diverse range of tire variations meticulously crafted to suit your unique needs, all available on our product page."
            />

            {/* Shop Content */}
            <div className="flex mt-10">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Product Table */}
                <div className="w-5/6 pl-8 mt-4">
                    <div className="border border-light-silver-2">
                        <Table className="min-w-full">
                            <TableHeader>
                                <TableRow className="border-b border-light-silver-2">
                                    <TableHead className="text-sm font-bold text-black text-left">BRAND</TableHead>
                                    <TableHead className="text-sm font-bold text-black text-left">MODEL</TableHead>
                                    <TableHead className="text-sm font-bold text-black text-left">DIMENSIONS</TableHead>
                                    <TableHead className="text-sm font-bold text-black text-left">TYPE</TableHead>
                                    <TableHead className="text-sm font-bold text-black text-left">NOISE</TableHead>
                                    <TableHead className="text-sm font-bold text-black text-left">STOCK</TableHead>
                                    <TableHead className="text-sm font-bold text-black text-left">PRICE</TableHead>

                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow className="border-b">
                                        <TableCell className="py-4 text-black font-bold text-sm">{product.brand}</TableCell>
                                        <TableCell className="py-4 text-black text-sm">{product.description}</TableCell>
                                        <TableCell className="py-4 text-black text-sm">{product.dimensions}</TableCell>
                                        <TableCell className="py-4">
                                            <span className="text-yellow"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 16.5C12.4587 16.5 13.8576 15.9205 14.8891 14.8891C15.9205 13.8576 16.5 12.4587 16.5 11C16.5 9.54131 15.9205 8.14236 14.8891 7.11091C13.8576 6.07946 12.4587 5.5 11 5.5C9.54131 5.5 8.14236 6.07946 7.11091 7.11091C6.07946 8.14236 5.5 9.54131 5.5 11C5.5 12.4587 6.07946 13.8576 7.11091 14.8891C8.14236 15.9205 9.54131 16.5 11 16.5ZM11 0C11.1823 0 11.3572 0.0724328 11.4861 0.201364C11.6151 0.330295 11.6875 0.505164 11.6875 0.6875V3.4375C11.6875 3.61984 11.6151 3.7947 11.4861 3.92364C11.3572 4.05257 11.1823 4.125 11 4.125C10.8177 4.125 10.6428 4.05257 10.5139 3.92364C10.3849 3.7947 10.3125 3.61984 10.3125 3.4375V0.6875C10.3125 0.505164 10.3849 0.330295 10.5139 0.201364C10.6428 0.0724328 10.8177 0 11 0ZM11 17.875C11.1823 17.875 11.3572 17.9474 11.4861 18.0764C11.6151 18.2053 11.6875 18.3802 11.6875 18.5625V21.3125C11.6875 21.4948 11.6151 21.6697 11.4861 21.7986C11.3572 21.9276 11.1823 22 11 22C10.8177 22 10.6428 21.9276 10.5139 21.7986C10.3849 21.6697 10.3125 21.4948 10.3125 21.3125V18.5625C10.3125 18.3802 10.3849 18.2053 10.5139 18.0764C10.6428 17.9474 10.8177 17.875 11 17.875ZM22 11C22 11.1823 21.9276 11.3572 21.7986 11.4861C21.6697 11.6151 21.4948 11.6875 21.3125 11.6875H18.5625C18.3802 11.6875 18.2053 11.6151 18.0764 11.4861C17.9474 11.3572 17.875 11.1823 17.875 11C17.875 10.8177 17.9474 10.6428 18.0764 10.5139C18.2053 10.3849 18.3802 10.3125 18.5625 10.3125H21.3125C21.4948 10.3125 21.6697 10.3849 21.7986 10.5139C21.9276 10.6428 22 10.8177 22 11ZM4.125 11C4.125 11.1823 4.05257 11.3572 3.92364 11.4861C3.7947 11.6151 3.61984 11.6875 3.4375 11.6875H0.6875C0.505164 11.6875 0.330295 11.6151 0.201364 11.4861C0.0724328 11.3572 0 11.1823 0 11C0 10.8177 0.0724328 10.6428 0.201364 10.5139C0.330295 10.3849 0.505164 10.3125 0.6875 10.3125H3.4375C3.61984 10.3125 3.7947 10.3849 3.92364 10.5139C4.05257 10.6428 4.125 10.8177 4.125 11ZM18.7784 3.22162C18.9073 3.35055 18.9797 3.52539 18.9797 3.70769C18.9797 3.88999 18.9073 4.06482 18.7784 4.19375L16.8341 6.13937C16.7702 6.20321 16.6943 6.25382 16.6109 6.28833C16.5274 6.32284 16.4379 6.34057 16.3476 6.34051C16.1651 6.34038 15.9902 6.26778 15.8613 6.13869C15.7975 6.07477 15.7469 5.9989 15.7124 5.91542C15.6778 5.83193 15.6601 5.74247 15.6602 5.65214C15.6603 5.4697 15.7329 5.29479 15.862 5.16587L17.8062 3.22162C17.9352 3.09274 18.11 3.02033 18.2923 3.02033C18.4746 3.02033 18.6494 3.09274 18.7784 3.22162ZM6.138 15.862C6.26689 15.9909 6.33929 16.1658 6.33929 16.3481C6.33929 16.5304 6.26689 16.7052 6.138 16.8341L4.19375 18.7784C4.06409 18.9036 3.89042 18.9729 3.71016 18.9713C3.5299 18.9698 3.35747 18.8975 3.23 18.77C3.10253 18.6425 3.03023 18.4701 3.02866 18.2898C3.0271 18.1096 3.09639 17.9359 3.22162 17.8062L5.16587 15.862C5.2948 15.7331 5.46964 15.6607 5.65194 15.6607C5.83424 15.6607 6.00908 15.7331 6.138 15.862ZM18.7784 18.7784C18.6494 18.9073 18.4746 18.9797 18.2923 18.9797C18.11 18.9797 17.9352 18.9073 17.8062 18.7784L15.862 16.8341C15.7368 16.7045 15.6675 16.5308 15.669 16.3505C15.6706 16.1703 15.7429 15.9978 15.8704 15.8704C15.9978 15.7429 16.1703 15.6706 16.3505 15.669C16.5308 15.6675 16.7045 15.7368 16.8341 15.862L18.7784 17.8062C18.9073 17.9352 18.9797 18.11 18.9797 18.2923C18.9797 18.4746 18.9073 18.6494 18.7784 18.7784ZM6.138 6.13937C6.00908 6.26826 5.83424 6.34067 5.65194 6.34067C5.46964 6.34067 5.2948 6.26826 5.16587 6.13937L3.22162 4.19375C3.15596 4.13033 3.10359 4.05447 3.06756 3.97059C3.03152 3.88671 3.01256 3.7965 3.01177 3.70521C3.01097 3.61393 3.02837 3.5234 3.06294 3.43891C3.0975 3.35442 3.14855 3.27765 3.2131 3.2131C3.27765 3.14855 3.35442 3.0975 3.43891 3.06294C3.5234 3.02837 3.61393 3.01097 3.70521 3.01177C3.7965 3.01256 3.88671 3.03152 3.97059 3.06756C4.05447 3.10359 4.13033 3.15596 4.19375 3.22162L6.138 5.16587C6.20202 5.22974 6.25282 5.3056 6.28748 5.38913C6.32214 5.47265 6.33998 5.56219 6.33998 5.65263C6.33998 5.74305 6.32214 5.8326 6.28748 5.91612C6.25282 5.99965 6.20202 6.07551 6.138 6.13937Z" fill="#FEC20F" />
                                            </svg>
                                            </span>
                                        </TableCell>
                                        <TableCell className="py-4 text-black text-sm">{product.noise}</TableCell>
                                        <TableCell className="py-4 text-black">{product.quantity} pcs</TableCell>
                                        <TableCell className="py-4 text-black font-bold">€ {product.price}</TableCell>
                                        <TableCell className="py-4 text-right">
                                            <div className="flex items-center justify-end space-x-4">
                                                <div className="flex items-center border border-light-silver-2 rounded">
                                                    <button className="px-2 py-1 text-black">-</button>
                                                    <span className="px-2 text-black">{product.orderQuantity}</span>
                                                    <button className="px-2 py-1 text-black">+</button>
                                                </div>
                                                <button>
                                                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="6.37109" y="1.89844" width="29.4358" height="29.4358" rx="14.7179" fill="#1FCE6D" />
                                                        <rect x="0.939453" y="0.0625" width="36.7948" height="36.7948" rx="2" fill="#1FCE6D" />
                                                        <path d="M11.9775 11.5308C11.9775 11.417 12.0265 11.3078 12.1138 11.2273C12.201 11.1468 12.3193 11.1016 12.4426 11.1016H13.8378C13.9415 11.1016 14.0423 11.1336 14.124 11.1926C14.2057 11.2515 14.2638 11.334 14.2889 11.427L14.6656 12.8187H25.4643C25.5326 12.8187 25.6 12.8326 25.6618 12.8595C25.7236 12.8863 25.7782 12.9254 25.8218 12.9739C25.8654 13.0224 25.8969 13.0792 25.914 13.1402C25.9312 13.2012 25.9335 13.265 25.921 13.3269L24.5258 20.1953C24.5058 20.2936 24.4493 20.3825 24.3659 20.4464C24.2825 20.5104 24.1775 20.5455 24.0691 20.5456H15.698C15.5896 20.5455 15.4846 20.5104 15.4012 20.4464C15.3178 20.3825 15.2613 20.2936 15.2413 20.1953L13.8471 13.3398L13.475 11.9601H12.4426C12.3193 11.9601 12.201 11.9149 12.1138 11.8344C12.0265 11.7539 11.9775 11.6447 11.9775 11.5308ZM16.6281 20.5456C16.1348 20.5456 15.6616 20.7265 15.3127 21.0485C14.9639 21.3705 14.7679 21.8072 14.7679 22.2626C14.7679 22.718 14.9639 23.1548 15.3127 23.4768C15.6616 23.7988 16.1348 23.9797 16.6281 23.9797C17.1215 23.9797 17.5947 23.7988 17.9435 23.4768C18.2924 23.1548 18.4884 22.718 18.4884 22.2626C18.4884 21.8072 18.2924 21.3705 17.9435 21.0485C17.5947 20.7265 17.1215 20.5456 16.6281 20.5456ZM23.139 20.5456C22.6456 20.5456 22.1724 20.7265 21.8236 21.0485C21.4747 21.3705 21.2787 21.8072 21.2787 22.2626C21.2787 22.718 21.4747 23.1548 21.8236 23.4768C22.1724 23.7988 22.6456 23.9797 23.139 23.9797C23.6323 23.9797 24.1055 23.7988 24.4544 23.4768C24.8032 23.1548 24.9992 22.718 24.9992 22.2626C24.9992 21.8072 24.8032 21.3705 24.4544 21.0485C24.1055 20.7265 23.6323 20.5456 23.139 20.5456ZM16.6281 21.4041C16.8748 21.4041 17.1114 21.4946 17.2858 21.6556C17.4603 21.8166 17.5583 22.0349 17.5583 22.2626C17.5583 22.4903 17.4603 22.7087 17.2858 22.8697C17.1114 23.0307 16.8748 23.1212 16.6281 23.1212C16.3815 23.1212 16.1449 23.0307 15.9704 22.8697C15.796 22.7087 15.698 22.4903 15.698 22.2626C15.698 22.0349 15.796 21.8166 15.9704 21.6556C16.1449 21.4946 16.3815 21.4041 16.6281 21.4041ZM23.139 21.4041C23.3857 21.4041 23.6222 21.4946 23.7967 21.6556C23.9711 21.8166 24.0691 22.0349 24.0691 22.2626C24.0691 22.4903 23.9711 22.7087 23.7967 22.8697C23.6222 23.0307 23.3857 23.1212 23.139 23.1212C22.8923 23.1212 22.6557 23.0307 22.4813 22.8697C22.3068 22.7087 22.2089 22.4903 22.2089 22.2626C22.2089 22.0349 22.3068 21.8166 22.4813 21.6556C22.6557 21.4946 22.8923 21.4041 23.139 21.4041Z" fill="white" />
                                                    </svg>
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
        </div>
    );
}