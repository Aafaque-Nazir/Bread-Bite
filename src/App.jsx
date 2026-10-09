import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TQ from '../pages/TQ';
import NotFound from '../pages/NotFound';
import ToastProvider from './components/ToastProvider';
import { Route, Routes } from 'react-router-dom';

import FloatingCartBtn from './components/FloatingCartBtn';
import CartSidebar from './components/CartSidebar';
import Cart from '../pages/Cart';
import Reviews from '../pages/Reviews';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <ToastProvider />
      <CartSidebar />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#181411] selection:bg-[#B84A1C] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<TQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCartBtn />
      </div>
    </>
  );
}

export default App
