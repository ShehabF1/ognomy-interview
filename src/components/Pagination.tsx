import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {/* buttons have a disabled state that will communicate end of pagination to user */}
      <button
        className="cursor-pointer group p-2 rounded-full bg-green-700 hover:bg-green-900 transition-colors duration-300 ease-in-out disabled:opacity-20"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="w-5 h-5 text-white stroke-[4px] transition-transform duration-300 ease-in-out group-hover:scale-110" />
      </button>

      <span className="text-sm font-medium text-gray-700">
        {/* current page number highlighted for visibility */}
        Page <span className="bg-green-200 text-green-700 py-[1px] px-[3px] rounded-md">{currentPage}</span> of {totalPages}
      </span>

      <button
        className="cursor-pointer group p-2 rounded-full bg-green-700 hover:bg-green-900 transition-colors duration-300 ease-in-out disabled:opacity-20 disabled:hover:bg-green-700"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="w-5 h-5 text-white stroke-[4px] transition-transform duration-300 ease-in-out group-hover:scale-110" />
      </button>
    </div>
  );
};

export default Pagination;
