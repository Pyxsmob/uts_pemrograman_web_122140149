import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="inline-block p-6 bg-gradient-to-r from-green-400 to-blue-400 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Pyx's Jastip</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/products" className="mx-2">Produk</Link>
        <Link to="/cart" className="mx-2">Keranjang</Link>
      </div>
    </nav>
  );
  
};
export default Navbar;