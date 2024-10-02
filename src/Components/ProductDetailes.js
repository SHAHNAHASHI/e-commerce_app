// src/Components/ProductDetails.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProductById } from './Apiservice'; // Ensure this function is in apiService
import CartContext from '../Components/CartContext'; // Import CartContext
import '../Components/ProductDetails.css'; // Import the CSS file

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext); // Access addToCart function from context
    const navigate = useNavigate();

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const product = await fetchProductById(id);
                setProduct(product);
            } catch (err) {
                setError('Failed to fetch product details');
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            navigate('/Cart'); // Navigate to Cart page
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p className="price">Price: ${product.price}</p>
            <p className="category">Category: {product.category}</p>
            <p className="Description">{product.description}</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
            <Link to="/Products" className="back-button">Back to Products</Link>
        </div>
    );
};

export default ProductDetails;
