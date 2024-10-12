"use client";

import { Table as UITable, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FilterButtons from "../components/FilterButtons";
import SidebarFilter from "../components/SidebarFilter";

export default function MyTable() {
    // Örnek ürün verisi
    const sampleData = [
        { season: "Winter", brand: "Michelin", description: "Snow tires", barcode: "123456789", quantity: 20, price: 100, order: "Order 1" },
        { season: "Summer", brand: "Goodyear", description: "Summer tires", barcode: "987654321", quantity: 15, price: 80, order: "Order 2" },
        // Daha fazla örnek ürün ekleyebilirsiniz
    ];

    return (
        <div className="flex min-h-screen bg-white ">
            <SidebarFilter />

            {/* Ana içerik */}
            <div className="w-3/4 p-4 container mx-auto my-4 px-4">
                <UITable className="w-full bg-white rounded-lg shadow-md border border-light-silver">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-arimo text-black text-base font-semibold ">Season</TableHead>
                            <TableHead className="font-arimo text-black text-base font-semibold">Brand</TableHead>
                            <TableHead className="font-arimo text-black text-base font-semibold">Description</TableHead>
                            <TableHead className="font-arimo text-black text-base font-semibold">Barcode</TableHead>
                            <TableHead className="font-arimo text-black text-base font-semibold">Quantity</TableHead>
                            <TableHead className="font-arimo text-black text-base font-semibold">Price</TableHead>
                            <TableHead className="font-arimo text-black text-base font-semibold">Order</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {sampleData.map((item, index) => (
                            <TableRow key={index} className="bg-white">
                                <TableCell className="font-bold text-black text-base font-arimo">{item.season}</TableCell>
                                <TableCell className=" font-bold text-black  text-base font-arimo">{item.brand}</TableCell>
                                <TableCell className="font-arimo text-sm text-black ">{item.description}</TableCell>
                                <TableCell className="font-arimo  text-sm text-black ">{item.barcode}</TableCell>
                                <TableCell className="">{item.quantity}</TableCell>
                                <TableCell className="font-arimo text-base text-black font-semibold">€ {item.price}</TableCell>
                                <TableCell>{item.order}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </UITable>
            </div>
        </div>
    );
}
