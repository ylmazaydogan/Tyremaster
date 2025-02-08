"use client"
import { useState } from "react";
import { FilterSelect } from "./ui/FilterSelect";
import { FilterIcon, SearchIcon } from "./icons/SearchIcons";

interface TyreSize {
    width: string;
    height: string;
    diameter: string;
}

export default function SearchBar() {
    const [filterView, setFilterView] = useState(false);
    const [tyreSize, setTyreSize] = useState<TyreSize>({
        width: "205",
        height: "55",
        diameter: "15"
    });

    const handleTyreSizeChange = (key: keyof TyreSize) => (value: string) => {
        setTyreSize(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="flex flex-1 justify-between max-w-2xl bg-light-gray border border-light-silver-2 pr-3 rounded-st">
            {!filterView ? (
                <input
                    type="text"
                    placeholder="Search for products"
                    className="w-full h-[46px] px-4 bg-transparent relative z-10 focus:outline-none text-gray text-sm pr-10 rounded-st"
                />
            ) : (
                <div className="grid grid-cols-3 w-full gap-2 h-[46px] place-items-center px-4">
                    <FilterSelect
                        label="Width"
                        value={tyreSize.width}
                        options={["195", "205", "215", "225"]}
                        onChange={handleTyreSizeChange("width")}
                    />
                    <FilterSelect
                        label="Height"
                        value={tyreSize.height}
                        options={["50", "55", "60", "65"]}
                        onChange={handleTyreSizeChange("height")}
                    />
                    <FilterSelect
                        label="Diameter"
                        value={tyreSize.diameter}
                        options={["15", "16", "17", "18"]}
                        onChange={handleTyreSizeChange("diameter")}
                    />
                </div>
            )}

            <div className="flex space-x-2">
                <button
                    onClick={() => setFilterView(prev => !prev)}
                    className="focus:outline-none"
                    aria-label="Toggle filter view"
                >
                    <FilterIcon />
                </button>

                <button
                    className="focus:outline-none"
                    aria-label="Search"
                >
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
}
