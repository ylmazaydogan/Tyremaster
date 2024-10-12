// Pagination.tsx
import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    children?: React.ReactNode;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className, children }) => {
    return (
        <div
            className={`fixed bottom-4 right-4 flex items-center justify-center space-x-2 font-arimo text-black border border-light-silver bg-white ${className}`} // Sağ alta hizalama
        >
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg font-arimo"
            >
                {"<"}
            </button>


            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg font-arimo text-black text-base"
            >
                {"<<"}
            </button>
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 rounded ${currentPage === page ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-300"
            >
                {">"}
            </button>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded font-arimo"
            >
                {">>"}
            </button>

            {children}
        </div>
    );
};

export default Pagination;
