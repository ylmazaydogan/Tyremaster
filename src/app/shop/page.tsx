import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import Sidebar from "@/components/shop/Sidebar";
import ShopBanner from "@/components/shop/ShopBanner";
import ProductTable from "@/components/shop/ProductTable";

export default function ShopSidebar() {
    return (
        <div className="flex flex-col ">
            {/* Shop Banner */}
            <ShopBanner
                title="B2B TYRE SHOP"
                subtitle="SEE OUR COLLECTION"
                description="Discover a diverse range of tire variations meticulously crafted to suit your unique needs, all available on our product page."
            />
                
            <div className="ml-10 -mb-9">
            <span className="text-gray text-sm mb-">53.340 Products found</span>
            </div>
                






            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Product Table */}
                <div className="w-5/6 pl-8 mt-5">

                    {/* Filters */}

                    <div className="flex items-center gap-4 mb-6">

                        <div className="flex items-center gap-3">

                            <button className="flex items-center gap-1 px-3 py-1 text-xs bg-dark-silver rounded-st w-[142px] h-[36px] justify-center">
                                <span className="text-green">X</span>
                                <span className="text-black font-bold"> | CLEAR FILTERS</span>



                            </button>

                            <button className="flex items-center gap-1 px-3 py-1 text-xs bg-dark-silver rounded-st justify-center w-[100px] h-[36px] ">
                                <span className="text-green">X</span>
                                <span className="text-black font-bold">| SUMMER</span>

                            </button>

                            <button className="flex items-center gap-1 px-3 py-1 text-xs bg-dark-silver rounded-st w-[102px] h-[36px] justify-center ">
                                <span className="text-green">X</span>
                                <span className="text-black font-bold">| 205</span>


                            </button>

                            <button className="flex items-center gap-1 px-3  py-1 text-xs bg-dark-silver rounded-md w-[102px] h-[36px] justify-center">
                                <span className="text-green">X</span>
                                <span className="text-black font-bold">| V</span>

                            </button>
                        </div>

                        <div className="ml-auto flex items-center gap-2 mr-28 w-[110px] h-[36px]">
                            <span className="text-sm text-gray">Show</span>
                            <select className="px-2 py-1 border border-light-silver rounded-st text-sm">
                                <option>25</option>


                                <option>50</option>
                                <option>100</option>
                            </select>
                            <span className="text-sm text-gray">entries</span>
                        </div>
                    </div>


                    <div className="border border-light-silver-2">
                        <ProductTable />
                    </div>
                    <div className="mt-4">
                        <span className="text-sm text-gray ml-1">53.100 Products</span>
                    </div>



                    {/* Pagination */}
                    <div className="ml-auto w-fit flex justify-end mt-4">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationLink href="#"><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.10384 5.41091L7.10304 5.41014C6.98986 5.30185 6.92307 5.16182 6.92307 5C6.92307 4.83818 6.98986 4.69815 7.10304 4.58986L7.10384 4.58909L10.9606 0.931545C11.06 0.805401 11.2032 0.75 11.3536 0.75C11.5121 0.75 11.6532 0.809511 11.7663 0.917726C11.8715 1.0184 11.9463 1.15108 11.9463 1.31148C11.9463 1.47187 11.8715 1.60455 11.7663 1.70522L8.32283 5L11.7663 8.29478C11.8715 8.39545 11.9463 8.52813 11.9463 8.68852C11.9463 8.84892 11.8715 8.9816 11.7663 9.08227C11.6532 9.19049 11.5121 9.25 11.3536 9.25C11.2032 9.25 11.06 9.1946 10.9606 9.06845L7.10384 5.41091Z" fill="#171A1F" stroke="#171A1F" stroke-width="0.5" /> <path d="M0.930989 5.69997L0.930188 5.6992C0.817011 5.59091 0.750221 5.45089 0.750221 5.28906C0.750221 5.12724 0.817011 4.98721 0.930186 4.87892L0.930991 4.87815L4.78776 1.22061C4.88719 1.09446 5.03036 1.03906 5.18077 1.03906C5.33921 1.03906 5.48037 1.09857 5.59347 1.20679C5.69869 1.30746 5.77344 1.44014 5.77344 1.60054C5.77344 1.76094 5.69869 1.89362 5.59347 1.99429L2.14998 5.28906L5.59347 8.58384C5.69868 8.68451 5.77344 8.81719 5.77344 8.97759C5.77344 9.13799 5.69868 9.27066 5.59347 9.37134C5.48037 9.47955 5.3392 9.53906 5.18077 9.53906C5.03036 9.53906 4.88719 9.48366 4.78776 9.35752L0.930989 5.69997Z" fill="#171A1F" stroke="#171A1F" stroke-width="0.5" /> </svg>

                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.930989 5.41091L0.930187 5.41014C0.81701 5.30185 0.75022 5.16182 0.75022 5C0.75022 4.83818 0.81701 4.69815 0.930185 4.58986L0.93099 4.58909L4.78776 0.931545C4.88719 0.805401 5.03036 0.75 5.18077 0.75C5.33921 0.75 5.48037 0.809511 5.59347 0.917726C5.69869 1.0184 5.77344 1.15108 5.77344 1.31148C5.77344 1.47187 5.69869 1.60455 5.59347 1.70522L2.14998 5L5.59347 8.29478C5.69868 8.39545 5.77344 8.52813 5.77344 8.68852C5.77344 8.84892 5.69868 8.9816 5.59347 9.08227C5.48037 9.19049 5.3392 9.25 5.18077 9.25C5.03036 9.25 4.88719 9.1946 4.78776 9.06845L0.930989 5.41091Z" fill="#171A1F" stroke="#171A1F" stroke-width="0.5" />
                                    </svg>

                                    </PaginationLink>
                                </PaginationItem>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <PaginationItem key={i}>
                                        <PaginationLink href="#">{i + 1}</PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <PaginationLink href="#"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.59245 4.87815L5.59325 4.87892C5.70643 4.98721 5.77322 5.12724 5.77322 5.28906C5.77322 5.45089 5.70643 5.59092 5.59325 5.69921L5.59245 5.69997L1.73568 9.35752C1.63625 9.48366 1.49308 9.53906 1.34267 9.53906C1.18423 9.53906 1.04307 9.47955 0.929967 9.37134C0.824752 9.27067 0.75 9.13799 0.75 8.97759C0.75 8.81719 0.824752 8.68451 0.929967 8.58384L4.37346 5.28906L0.929967 1.99429C0.824752 1.89362 0.75 1.76094 0.75 1.60054C0.75 1.44014 0.824752 1.30746 0.929967 1.20679C1.04307 1.09857 1.18423 1.03906 1.34267 1.03906C1.49308 1.03906 1.63625 1.09446 1.73568 1.22061L5.59245 4.87815Z" fill="#171A1F" stroke="#171A1F" stroke-width="0.5" />
                                    </svg>
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#"><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.4196 4.87815L5.4204 4.87892C5.53357 4.98721 5.60037 5.12724 5.60037 5.28906C5.60037 5.45089 5.53357 5.59092 5.4204 5.69921L5.41959 5.69997L1.56283 9.35752C1.4634 9.48366 1.32022 9.53906 1.16982 9.53906C1.01138 9.53906 0.870216 9.47955 0.757116 9.37134C0.651901 9.27067 0.577148 9.13799 0.577148 8.97759C0.577148 8.81719 0.651901 8.68451 0.757116 8.58384L4.20061 5.28906L0.757116 1.99429C0.651901 1.89362 0.577148 1.76094 0.577148 1.60054C0.577148 1.44014 0.6519 1.30746 0.757116 1.20679C0.870216 1.09857 1.01138 1.03906 1.16982 1.03906C1.32022 1.03906 1.4634 1.09446 1.56283 1.22061L5.4196 4.87815Z" fill="#171A1F" stroke="#171A1F" stroke-width="0.5" />
                                        <path d="M11.5924 4.58909L11.5932 4.58986C11.7064 4.69815 11.7732 4.83818 11.7732 5C11.7732 5.16182 11.7064 5.30185 11.5933 5.41014L11.5924 5.41091L7.73568 9.06845C7.63625 9.1946 7.49308 9.25 7.34267 9.25C7.18423 9.25 7.04307 9.19049 6.92997 9.08227C6.82475 8.9816 6.75 8.84892 6.75 8.68852C6.75 8.52813 6.82475 8.39545 6.92997 8.29478L10.3735 5L6.92997 1.70522C6.82475 1.60455 6.75 1.47187 6.75 1.31148C6.75 1.15108 6.82475 1.0184 6.92997 0.917727C7.04307 0.809511 7.18423 0.75 7.34267 0.75C7.49308 0.75 7.63625 0.805401 7.73568 0.931546L11.5924 4.58909Z" fill="#171A1F" stroke="#171A1F" stroke-width="0.5" />
                                    </svg>
                                    </PaginationLink>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
