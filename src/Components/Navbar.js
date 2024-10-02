import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../Components/CartContext';
import SearchContext from '../Components/SearchContext'; // Ensure this path is correct
import myimage from "../Components/Assets/logo.webp";
import image3 from "../Components/Assets/icons8-cart-50.webp";
import './Navbar.css';

const Navbar = () => {
    const { totalItems } = useContext(CartContext);
    const { updateSearchTerm } = useContext(SearchContext); // Access search context
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form submission
        updateSearchTerm(searchQuery); // Update the search term in context
        setSearchQuery(''); // Clear the input after search
        navigate('/Products'); // Redirect to Products page
    };

    return (
        <nav className="navbar">
            <img src={myimage} height={"50px"} width={"150px"} className="icon" alt="Logo" />
            <a href="/" className="nav-item">Home</a>
            <a href="/Products" className="nav-item">Products</a>
            <a href="/AboutUs" className="nav-item">About Us</a>
            <a href="/ContactUs" className="nav-item">Contact Us</a>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update local state
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn" onClick={() => navigate('/Cart')}>
                <img src={image3} height="50px" alt="Cart" />
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                Cart
            </button>
        </nav>
    );
};

export default Navbar;
