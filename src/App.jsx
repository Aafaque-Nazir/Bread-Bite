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
import LocationPage from '../pages/LocationPage';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import KitchenStatusBanner from './components/KitchenStatusBanner';
import { LOCATION_SLUGS } from '../data/locations';

function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <ToastProvider />
      <CartSidebar />
      <KitchenStatusBanner />
      <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#181411] selection:bg-[#B84A1C] selection:text-white overflow-x-clip">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/thank-you" element={<TQ />} />
            <Route path="/thank-you/" element={<TQ />} />

            {/* Location Landing Pages for Navi Mumbai Local SEO */}
            {LOCATION_SLUGS.map((slug) => (
              <React.Fragment key={slug}>
                <Route path={`/${slug}`} element={<LocationPage />} />
                <Route path={`/${slug}/`} element={<LocationPage />} />
              </React.Fragment>
            ))}

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
