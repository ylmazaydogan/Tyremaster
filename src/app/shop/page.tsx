import React from "react";
// Import ShadCN table components
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import Sidebar from "@/components/shop/Sidebar"
import ShopBanner from "@/components/shop/ShopBanner"
import ProductTable from "@/components/shop/ProductTable"
export default function ShopSidebar() {


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
                        <ProductTable />
                    </div>

                    <div className="ml-auto w-fit flex justify-end mt-4">
                        <Pagination>
                            <PaginationContent>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <PaginationItem key={i}>
                                        <PaginationLink href="#">{i + 1}</PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <PaginationLink href="#">></PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">>></PaginationLink>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>

                </div>
            </div >
        </div >
    );
}