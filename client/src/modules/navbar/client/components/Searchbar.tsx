"use client";

import { useRef, useState } from "react";
import { Search, X } from "lucide-react";

const Searchbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Mobile Search Toggle Button */}
      <button
        onClick={toggleSearch}
        className="sm:hidden p-2.5 rounded-lg bg-gray-100 shadow-inner border border-gray-300
                   hover:bg-black hover:text-white hover:border-black
                   transition-all duration-200 flex-shrink-0"
        aria-label="Toggle search"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
      </button>

      {/* Mobile Search Dropdown */}
      {isOpen && (
        <div className="sm:hidden fixed top-[68px] left-0 right-0 px-4 z-50 bg-white border-b border-gray-300 pb-3 pt-2 shadow-lg">
          <div className="flex items-center bg-gray-100 shadow-inner border border-gray-300 rounded-lg px-3 py-1.5 gap-2 max-w-xl mx-auto">
            <label htmlFor="search-mobile" className="sr-only">
              Search products
            </label>
            <Search className="w-4 h-4 text-gray-600 flex-shrink-0 font-semibold" />
            <input
              id="search-mobile"
              type="text"
              placeholder="Search..."
              className="flex-1 text-sm bg-transparent outline-none placeholder-gray-600 font-semibold"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Desktop Search Bar */}
      <div className="hidden sm:flex items-center bg-gray-100 shadow-inner focus-within:shadow border border-gray-300 rounded-lg px-3 py-1.5 gap-2 w-40 sm:w-56 md:w-64 lg:w-80">
        <label htmlFor="search" className="sr-only">
          Search products
        </label>
        <Search
          className="w-4 h-4 text-gray-600 flex-shrink-0 cursor-pointer font-semibold"
          onClick={focusInput}
        />
        <input
          ref={inputRef}
          id="search"
          type="text"
          placeholder="Search..."
          className="flex-1 text-sm bg-transparent outline-none placeholder-gray-600 font-semibold"
        />
      </div>
    </>
  );
};

export default Searchbar;
