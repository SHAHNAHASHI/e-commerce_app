import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from './Apiservice'; // Import the fetchProducts function
import SearchContext from './SearchContext'; // Import SearchContext
import '../Components/ProductList.css'; // Import CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchTerm } = useContext(SearchContext); // Use SearchContext to get the search term
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
        setFilteredProducts(products); // Initialize filteredProducts with all products
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
