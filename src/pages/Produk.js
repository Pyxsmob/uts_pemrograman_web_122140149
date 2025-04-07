import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const Products = () => {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");

  if (loading) return <Loading/>;
  if (error) return <p>Error fetching data</p>;

  
  return (
    <div className="text-center p-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

export default Products;