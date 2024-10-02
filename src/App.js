// import logo from './logo.svg';
// import './App.css';
// import ProductList from './Components/ProductList';
// import Home from './Components/Home';
// import { Routes,Route, Router } from 'react-router-dom';
// import ContactUs from './Components/Contact';
// import AboutUs from './Components/About';
// import Cart from './Components/CartPage';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
// import ProductDetails from './Components/ProductDetailes';
// import CartPage from './Components/CartPage';
// import { CartProvider } from './Components/CartContext'; // Import CartProvider
// import CheckoutPage from './Components/CheckoutPage';
// import { SearchProvider } from './Components/SearchContext'; // Import SearchProvider


// function App() {
//   return (
//     <div>
    
//           <SearchProvider>
//     <Navbar/>
//     <CartProvider>
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       {/* <Route path="/" element={<ProductList1 />} /> */}
//       <Route path="/Products" element={<ProductList />} />
//       <Route path="/product/:id" element={<ProductDetails />} />
//       {/* <Route path="/Products/:id" element={<productDetailes />} /> */}
//         {/* <Route path="/" element={<ProductList/>}/> */}
//         <Route path="/ContactUs" element={<ContactUs/>}/>
//         <Route path="/AboutUs" element={<AboutUs/>}/>
//         {/* <Route path="/Products" element={<ProductList/>}/> */}
//         <Route path="/Cart" element={<Cart/>}/>
//         <Route path="/checkout" element={<CheckoutPage />} /> {/* Add route for CheckoutPage */}
       
//       </Routes>
     
//       </CartProvider>
//       <Footer/>
//       </SearchProvider>
     
//     </div>
//   );
// }
// export default App;
import './App.css';
import ProductList from './Components/ProductList';
import Home from './Components/Home';
import ContactUs from './Components/Contact';
import AboutUs from './Components/About';
import Cart from './Components/CartPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetailes';
import CheckoutPage from './Components/CheckoutPage';
import { CartProvider } from './Components/CartContext'; // Import CartProvider
import { SearchProvider } from './Components/SearchContext'; // Import SearchProvider
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <SearchProvider>
    <CartProvider>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Add route for CheckoutPage */}
        </Routes>
        <Footer />
     
    </CartProvider>
    </SearchProvider>
  );
}

export default App;
