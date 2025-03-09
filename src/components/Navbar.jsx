 import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4" style={{ backgroundColor: '#F27C28', fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="hover:text-[#F59D5E]">KlosetStore</Link>
        </div>
        <div className="space-x-4">
          <Link to="/stores" className="text-white hover:text-[#FCDEC9]">Stores</Link>
          <Link to="/products" className="text-white hover:text-[#FCDEC9]">Products</Link>
          <Link to="/cart" className="text-white hover:text-[#FCDEC9]">Cart</Link>
          <Link to="/dashboard" className="text-white hover:text-[#FCDEC9]">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;