import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Produk";
import ProductDetail from "./pages/DetailProduk";
import Cart from "./pages/Keranjang";
import Footer from "./components/Footers";
import NotificationBanner from "./components/NotificationBanner";

function App() {
  return (
    <Router>
      <NotificationBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1 className="text-center p-10 text-3xl font-bold">404 - Halaman Tidak Ditemukan</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;