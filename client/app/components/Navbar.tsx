import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between rounded absolute top-[2px] w-[80%]">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-lg">SAAS</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none"
        />
        <button className="ml-2 bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600 focus:outline-none">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;