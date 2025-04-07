import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    const newQuantity = (updatedCart[index].quantity || 1) + change;
    
    if (newQuantity < 1) {
      removeFromCart(index);
      return;
    }
    
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: newQuantity,
      price: (updatedCart[index].basePrice || updatedCart[index].price) * newQuantity
    };

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Keranjang Belanja</h1>
      {cart.length === 0 ? (
        <p className="text-lg mt-4">Keranjang Anda kosong.</p>
      ) : (
        <ul className="mt-6">
          {cart.map((item, index) => (
            <li key={index} className="border p-4 mb-2 flex justify-between items-center bg-white shadow-md rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                <div className="ml-2 flex flex-col">
                  <span className="text-lg font-semibold">{item.title}</span>
                  <span className="text-md text-gray-600 text-left">${item.price}</span>
                  <div className="flex items-center space-x-2 mt-2">
                    <button 
                      onClick={() => updateQuantity(index, -1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button 
                      onClick={() => updateQuantity(index, 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</div>
      {cart.length > 0 && (
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all">
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;