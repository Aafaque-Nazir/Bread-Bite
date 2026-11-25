import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastProvider from './components/ToastProvider';
import FloatingCartBtn from './components/FloatingCartBtn';
import CartSidebar from './components/CartSidebar';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import KitchenStatusBanner from './components/KitchenStatusBanner';
import { LOCATION_SLUGS } from '../data/locations';

const About = lazy(() => import('../pages/About'));
const Menu = lazy(() => import('../pages/Menu'));
const DishPage = lazy(() => import('../pages/DishPage'));
const PartyOrders = lazy(() => import('../pages/PartyOrders'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const TQ = lazy(() => import('../pages/TQ'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cart = lazy(() => import('../pages/Cart'));
const Reviews = lazy(() => import('../pages/Reviews'));
const LocationPage = lazy(() => import('../pages/LocationPage'));

const PageLoader = () => (
  <div className="min-h-[60vh] bg-[#FAF7F2] flex items-center justify-center">
    <span className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium">
      Loading kitchen page...
    </span>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/" element={<Menu />} />
              <Route path="/menu/:slug" element={<DishPage />} />
              <Route path="/menu/:slug/" element={<DishPage />} />
              <Route path="/party-orders" element={<PartyOrders />} />
              <Route path="/party-orders/" element={<PartyOrders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/" element={<Cart />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/reviews/" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/thank-you" element={<TQ />} />
              <Route path="/thank-you/" element={<TQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacy/" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/terms/" element={<Terms />} />

              {/* Location Landing Pages for Navi Mumbai Local SEO */}
              {LOCATION_SLUGS.map((slug) => (
                <React.Fragment key={slug}>
                  <Route path={`/${slug}`} element={<LocationPage />} />
                  <Route path={`/${slug}/`} element={<LocationPage />} />
                </React.Fragment>
              ))}

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingCartBtn />
      </div>
    </>
  );
}

export default App;
