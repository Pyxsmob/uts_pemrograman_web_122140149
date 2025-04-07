import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: products, loading } = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="text-center p-10">
      {/* Produk Unggulan */}
      <h2 className="text-3xl font-semibold mt-10">Produk Unggulan</h2>
      {loading ? (
        <p className="text-xl font-semibold text-gray-700 mt-4">Memuat...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {products.slice(4, 12).map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition-all duration-300">
              <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-green-600 font-semibold text-lg">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
