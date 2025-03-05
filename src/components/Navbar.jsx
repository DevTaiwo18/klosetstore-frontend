import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">KlosetStore</Link>
        </div>
        <div className="space-x-4">
          <Link to="/stores" className="text-gray-300 hover:text-white">Stores</Link>
          <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
          <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;