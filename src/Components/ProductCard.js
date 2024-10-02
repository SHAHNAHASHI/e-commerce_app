import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../Components/CartContext'; // Import CartContext
import '../Components/ProductCard.css'; // Import CSS file

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext); // Use CartContext to add items
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the ProductDetails page with the product ID
        navigate(`/product/${product.id}`); // Update to use product ID
    };

    const handleAddToCart = (event) => {
        event.stopPropagation(); // Prevents triggering the card click
        addToCart(product); // Add product to cart
    };

    return (
        <div className="prod" onClick={handleClick}>
            <div>
                <img src={product.image} alt={product.title} className="image" />
            </div>
            <div>{product.title}</div>
            <div>Price: ${product.price}</div>
            {/* <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button> */}
        </div>
    );
};

export default ProductCard;

