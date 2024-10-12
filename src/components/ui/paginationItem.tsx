// PaginationItem.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface PaginationItemProps extends React.HTMLAttributes<HTMLLIElement> {
    active?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

const PaginationItem: React.FC<PaginationItemProps> = ({ active = false, onClick, children, ...props }) => {
    return (
        <li
            onClick={onClick}
            className={cn(
                "px-3 py-1 cursor-pointer rounded ml-auto",
                active ? "text-black " : "bg-gray-200 text-black"
            )}
            {...props}
        >
            {children}
        </li>
    );
};

export default PaginationItem;
