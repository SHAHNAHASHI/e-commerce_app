
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../Components/CartContext'; // Import CartContext
import '../Components/CartPage.css'; // Import CSS file

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext); // Use CartContext to get cart items and update quantities
  const navigate = useNavigate();

  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleBuy = () => {
    // Handle the purchase process
    // You can integrate with a payment gateway or redirect to a checkout page
    navigate('/checkout'); // Redirect to checkout page or perform other actions
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item.id, { target: { value: item.quantity - 1 } })}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(event) => handleQuantityChange(item.id, event)}
                  />
                  <button onClick={() => handleQuantityChange(item.id, { target: { value: item.quantity + 1 } })}>+</button>
                </div>
                <button onClick={() => handleRemove(item.id)} className="remove-button">Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total Price: ${calculateTotalPrice()}</h2>
          </div>
        </div>
      )}

      <Link to="/Products" className="back-button1">Back to Products</Link>
      <button onClick={handleBuy} className="buy-button">Proceed to Buy</button>
    </div>
  );
};

export default CartPage;

