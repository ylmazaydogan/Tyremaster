"use client"
import { useState } from "react";
import { FilterSelect } from "./ui/FilterSelect";
import { SearchIcon } from "./icons/SearchIcons";

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
                    {filterView ? (
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="36" height="36" rx="2" fill="#1FCE6D"/>
                        <path d="M17.6883 12.5312V14.9078L17.7294 14.906C18.0024 14.8955 18.3786 14.892 18.649 14.9463C18.894 14.9953 19.1241 15.1037 19.2948 15.1982C19.5336 15.3312 19.6938 15.5351 19.7848 15.76L19.9003 15.7495C20.1733 15.7285 20.595 15.7162 20.9135 15.844C21.2373 15.9735 21.5164 16.2701 21.6835 16.4705C21.7494 16.5504 21.8063 16.6227 21.8541 16.6875H22.3634C22.6079 16.6875 22.8496 16.7387 23.0731 16.8379C23.2966 16.9371 23.4968 17.082 23.6609 17.2633C23.8249 17.4445 23.9492 17.6582 24.0256 17.8904C24.102 18.1227 24.129 18.3683 24.1046 18.6116L23.8666 20.9872C23.8239 21.4152 23.6915 21.8293 23.4781 22.2026L22.2575 24.3385C22.1428 24.5394 21.9769 24.7064 21.7769 24.8225C21.5768 24.9387 21.3496 24.9999 21.1183 25H15.604C15.3601 25 15.1211 24.932 14.9137 24.8038C14.7063 24.6755 14.5387 24.4919 14.4298 24.2738L13.3666 22.1475L11.187 18.5154C11.0216 18.2376 10.9632 17.9091 11.0228 17.5913C11.0824 17.2736 11.2559 16.9885 11.5107 16.7896C11.7656 16.5908 12.0842 16.4917 12.4069 16.5111C12.7296 16.5304 13.0342 16.6669 13.2634 16.8949L14.6258 18.2564V12.5312C14.6258 12.1251 14.7871 11.7357 15.0742 11.4485C15.3614 11.1613 15.7509 11 16.157 11C16.5631 11 16.9526 11.1613 17.2398 11.4485C17.5269 11.7357 17.6883 12.1251 17.6883 12.5312Z" fill="white"/>
                        </svg>
                        
                    ) : (
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="2" fill="#1FCE6D" />
                            <path d="M18 26C20.1217 26 22.1566 25.1571 23.6569 23.6569C25.1571 22.1566 26 20.1217 26 18C26 15.8783 25.1571 13.8434 23.6569 12.3431C22.1566 10.8429 20.1217 10 18 10C15.8783 10 13.8434 10.8429 12.3431 12.3431C10.8429 13.8434 10 15.8783 10 18C10 20.1217 10.8429 22.1566 12.3431 23.6569C13.8434 25.1571 15.8783 26 18 26ZM13.5 15H22.5C22.6326 15 22.7598 15.0527 22.8536 15.1464C22.9473 15.2402 23 15.3674 23 15.5C23 15.6326 22.9473 15.7598 22.8536 15.8536C22.7598 15.9473 22.6326 16 22.5 16H13.5C13.3674 16 13.2402 15.9473 13.1464 15.8536C13.0527 15.7598 13 15.6326 13 15.5C13 15.3674 13.0527 15.2402 13.1464 15.1464C13.2402 15.0527 13.3674 15 13.5 15ZM15 18.5C15 18.3674 15.0527 18.2402 15.1464 18.1464C15.2402 18.0527 15.3674 18 15.5 18H20.5C20.6326 18 20.7598 18.0527 20.8536 18.1464C20.9473 18.2402 21 18.3674 21 18.5C21 18.6326 20.9473 18.7598 20.8536 18.8536C20.7598 18.9473 20.6326 19 20.5 19H15.5C15.3674 19 15.2402 18.9473 15.1464 18.8536C15.0527 18.7598 15 18.6326 15 18.5ZM17 21.5C17 21.3674 17.0527 21.2402 17.1464 21.1464C17.2402 21.0527 17.3674 21 17.5 21H18.5C18.6326 21 18.7598 21.0527 18.8536 21.1464C18.9473 21.2402 19 21.3674 19 21.5C19 21.6326 18.9473 21.7598 18.8536 21.8536C18.7598 21.9473 18.6326 22 18.5 22H17.5C17.3674 22 17.2402 21.9473 17.1464 21.8536C17.0527 21.7598 17 21.6326 17 21.5Z" fill="white" />
                        </svg>

                    )}
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
