"use client";

import React from 'react';

interface ActiveFiltersProps {
    filters: {
        'Codes.Filter'?: Record<string, string>;
        'Attributes.Filter'?: Record<string, { ID: string; Value: string[] }>;
        'Offers.Stock'?: { Start: string };
        'Offers.AppInstallID'?: Record<string, string>;
        'Stock.ZoneID'?: Record<string, string>;
        'Categories.Name'?: Record<string, string>;
    };
    onRemoveFilter: (filterType: string, value: string) => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ filters, onRemoveFilter }) => {
    const renderFilterTags = () => {
        const tags: JSX.Element[] = [];

        // Process each filter type
        Object.entries(filters).forEach(([filterType, filterValue]) => {
            if (filterType === 'Attributes.Filter' && filterValue) {
                // Handle Attributes filter specially since it has nested values
                Object.values(filterValue as Record<string, { ID: string; Value: string[] }>).forEach(attr => {
                    attr.Value.forEach((val: string) => {
                        tags.push(
                            <div key={`${attr.ID}-${val}`} className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                                <span className="text-sm text-gray-700">{val}</span>
                                <button
                                    onClick={() => onRemoveFilter(filterType, `${attr.ID}-${val}`)}
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        );
                    });
                });
            } else if (filterType === 'Categories.Name' && typeof filterValue === 'object') {
                // Handle Categories
                Object.keys(filterValue).forEach(category => {
                    tags.push(
                        <div key={category} className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                            <span className="text-sm text-gray-700">{category}</span>
                            <button
                                onClick={() => onRemoveFilter(filterType, category)}
                                className="ml-2 text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    );
                });
            } else if (filterType === 'Offers.Stock' && typeof filterValue === 'object' && 'Start' in filterValue) {
                // Handle Stock filter
                const stockValue = (filterValue as { Start: string }).Start;
                tags.push(
                    <div key="stock" className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                        <span className="text-sm text-gray-700">Stock: {stockValue}+</span>
                        <button
                            onClick={() => onRemoveFilter(filterType, stockValue)}
                            className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                );
            }
        });

        return tags;
    };

    return (
        <div className="flex flex-wrap gap-2 py-4">
            {renderFilterTags()}
            {Object.keys(filters).length > 0 && (
                <button
                    onClick={() => onRemoveFilter('all', '')}
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium"
                >
                    <span>Clear All Filters</span>
                </button>
            )}
        </div>
    );
};

export default ActiveFilters; 