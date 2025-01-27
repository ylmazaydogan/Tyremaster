import React from 'react';

const FilterButtons = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="flex items-center bg-dark-silver  text-black text-xs px-3 py-1 rounded-lg shadow-sm">
        <span className="mr-2 font-semibold">✕</span> CLEAR FILTERS
      </button>
      <button className="flex items-center bg-dark-silver text-green-600 px-3 py-1 rounded-lg shadow-sm text-xs">
        <span className="mr-1 ">✕</span> SUMMER
      </button>
      <button className="flex items-center bg-dark-silver  text-green-600 px-3 py-1 rounded-lg shadow-sm text-xs">
        <span className="mr-1 ">✕</span> 205
      </button>
      <button className="flex items-center bg-gray-100 text-green-600 px-3 py-1 rounded-lg shadow-sm">
        <span className="mr-1">✕</span> IV
      </button>
      <div className="flex items-center ml-auto">
        <span className="text-gray mr-2">Show</span>
        <select className="px-2 py-1 border rounded-lg shadow-sm">
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>

      </div>
    </div>
  );
};

export default FilterButtons;
