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
import Cart from '../pages/Cart';

function App() {
  return (
    <>
      <ToastProvider />
      <div className="flex flex-col min-h-screen bg-[#FFFAF5] text-stone-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
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
