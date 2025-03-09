// import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-[#F27C28] font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="hover:text-[#F59D5E]">KlosetStore</Link>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Link to="/stores" className="text-white hover:text-[#FCDEC9]">Stores</Link>
          <Link to="/products" className="text-white hover:text-[#FCDEC9]">Products</Link>
          <Link to="/cart" className="text-white hover:text-[#FCDEC9]">Cart</Link>
          <Link to="/dashboard" className="text-white hover:text-[#FCDEC9]">Dashboard</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;