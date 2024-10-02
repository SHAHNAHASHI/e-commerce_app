// src/Components/CheckoutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/CheckoutPage.css'; // Import CSS file

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <p className='purchase'>Thank you for your purchase!</p>
            <Link to="/Products" className="back-button">Back to Products</Link>
        </div>
    );
};

export default CheckoutPage;
