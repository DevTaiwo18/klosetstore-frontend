import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faBoxOpen, faShoppingCart, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
      <div className={`fixed inset-y-0 left-0 bg-gradient-to-b from-[#F27C28] to-[#F59D5E] text-white w-64 p-4 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button onClick={toggleSidebar} className="text-white focus:outline-none mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="space-y-4">
          <Link to="/stores" className="flex items-center py-2 px-4 rounded hover:bg-[#FCDEC9] hover:text-[#F27C28] transition-colors duration-300">
            <FontAwesomeIcon icon={faStore} className="w-5 h-5 mr-2" />
            Stores
          </Link>
          <Link to="/products" className="flex items-center py-2 px-4 rounded hover:bg-[#FCDEC9] hover:text-[#F27C28] transition-colors duration-300">
            <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5 mr-2" />
            Products
          </Link>
          <Link to="/cart" className="flex items-center py-2 px-4 rounded hover:bg-[#FCDEC9] hover:text-[#F27C28] transition-colors duration-300">
            <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 mr-2" />
            Cart
          </Link>
          <Link to="/dashboard" className="flex items-center py-2 px-4 rounded hover:bg-[#FCDEC9] hover:text-[#F27C28] transition-colors duration-300">
            <FontAwesomeIcon icon={faTachometerAlt} className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;