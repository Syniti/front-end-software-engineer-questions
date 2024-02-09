'use client'
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between rounded-lg absolute md:top-[2px] w-full md:w-[85%]">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-lg">SAAS</h1>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600 focus:outline-none h-[2rem]"
          onClick={toggleSearch}
        >
          <FaSearch />
        </button>
        {isSearchVisible && (
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none ml-2"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
