import React, { useState, useMemo } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaMinus, FaPlus, FaShoppingBag, FaTrash } from 'react-icons/fa';
import SEO from '../src/components/SEO';
import ImageWithLoader from '../src/components/ImageWithLoader';
import { useCart } from '../src/context/CartContext';
import { useKitchenStatus } from '../src/hooks/useKitchenStatus';
import menuItems, { getMenuItemBySlug } from '../data/MenuItems';
import { getDishMeta } from '../data/seoConfig';
import { LOCATIONS } from '../data/locations';
import { ORDER_LINKS } from '../data/orderLinks';

const DishPage = () => {
  const { slug } = useParams();
  const item = getMenuItemBySlug(slug);
  const { addToCart, updateQuantity, cart } = useCart();
  const { isOpen: isKitchenOpen } = useKitchenStatus();
  const [openFaq, setOpenFaq] = useState(0);

  const pairedItems = useMemo(() => {
    if (!item?.pairings) return [];
    return item.pairings
      .map((pairSlug) => menuItems.find((m) => m.slug === pairSlug))
      .filter(Boolean);
  }, [item]);

  if (!item) {
    return (
      <section className="min-h-[75vh] bg-[#FAF7F2] flex items-center justify-center px-4 py-16">
        <SEO
          title="Dish Not Found | Bread & Bite Navi Mumbai"
          description="The requested dish was not found on our menu. Browse our full Navi Mumbai cloud kitchen menu."
          url={`/menu/${slug || ''}/`}
          noindex={true}
        />
        <div className="bg-white border border-[#EAE4DC] rounded-3xl p-8 sm:p-12 text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl font-heading text-[#181411] mb-3">
            Dish Not Found
          </h1>
          <p className="text-sm text-[#574F4A] mb-6 leading-relaxed">
            This item is no longer listed or the link has moved. Explore our fresh menu for available dishes.
          </p>
          <Link to="/menu/" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
            Explore Full Menu
          </Link>
        </div>
      </section>
    );
  }

  const meta = getDishMeta(item);
  const cartItem = cart.find((c) => c.id === item.id);
  const whatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(
    `Hi Bread & Bite, I want to order ${item.name} (₹${item.price}).`
  )}`;

  return (
    <article className="min-h-screen bg-[#FAF7F2] text-[#181411] pt-6 sm:pt-10 pb-24">
      <SEO
        title={meta.title}
        description={meta.description}
        url={meta.path}
        keywords={meta.keywords}
        image={meta.image}
        breadcrumbs={meta.breadcrumbs}
        product={item}
        faqs={meta.faqs}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#8C827A]">
            <li>
              <NavLink to="/" className="hover:text-[#B84A1C] transition-colors">Home</NavLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NavLink to="/menu/" className="hover:text-[#B84A1C] transition-colors">Menu</NavLink>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#181411] font-semibold">{item.shortName || item.name}</li>
          </ol>
        </nav>

        {/* Primary Dish Detail Card */}
        <div className="bg-white border border-[#EAE4DC] rounded-3xl overflow-hidden grid lg:grid-cols-12 mb-12">
          <div className="lg:col-span-6 bg-[#F4EFE6]">
            <div className="aspect-[4/3] lg:h-full w-full relative">
              <ImageWithLoader
                src={item.image}
                alt={item.seoAlt || `${item.name} - Bread & Bite Navi Mumbai`}
                priority={true}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B84A1C] mb-2">
                {item.category} · {item.type} · Freshly Prepared
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#181411] leading-tight mb-3">
                {item.name}
              </h1>

              <p className="text-sm sm:text-base text-[#574F4A] leading-relaxed mb-6">
                {item.longDescription || item.description}
              </p>

              {/* Dish Specifications */}
              <div className="grid grid-cols-3 divide-x divide-[#EAE4DC] border border-[#EAE4DC] rounded-2xl bg-[#FAF7F2] mb-6 text-center">
                <div className="p-3 sm:p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold block">
                    Portion
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#181411] mt-0.5 block">
                    {item.portion || 'Standard'}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold block">
                    Serves
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#181411] mt-0.5 block">
                    {item.serves || '1–2 People'}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold block">
                    Cook Time
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#181411] mt-0.5 block">
                    {item.prepTime || '15 mins'}
                  </span>
                </div>
              </div>

              <div className="text-xs text-[#574F4A] space-y-1.5 mb-6 border-t border-[#EAE4DC] pt-4">
                <p>
                  <strong className="text-[#181411]">Fresh Sourcing:</strong> 100% Halal fresh chicken sourced daily; vegetarian sides cooked in separate cookware.
                </p>
                <p>
                  <strong className="text-[#181411]">Daily Kitchen Hours:</strong> Lunch 11:15 AM – 3:30 PM · Dinner 7:00 PM – 10:15 PM IST.
                </p>
              </div>
            </div>

            {/* Price & Order Actions */}
            <div className="pt-5 border-t border-[#EAE4DC] space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C827A] block">
                    Price (No packaging fee)
                  </span>
                  <div className="flex items-baseline gap-2.5 mt-0.5">
                    <span className="text-3xl font-bold font-heading text-[#181411]">
                      ₹{item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-[#8C827A] line-through">
                        ₹{item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#574F4A]">
                  {isKitchenOpen ? 'Open for immediate delivery' : 'Pre-orders open'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {cartItem ? (
                  <div className="flex items-center justify-between bg-[#FAF7F2] border border-[#B84A1C] rounded-full px-4 py-2 sm:flex-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-[#B84A1C] cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      {cartItem.quantity === 1 ? <FaTrash size={11} /> : <FaMinus size={10} />}
                    </button>
                    <span className="text-sm font-bold text-[#181411]">
                      {cartItem.quantity} in bag
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#B84A1C] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="btn-primary py-3.5 px-6 text-xs uppercase tracking-wider sm:flex-1 cursor-pointer"
                  >
                    <FaShoppingBag size={13} />
                    <span>Add to Bag · ₹{item.price}</span>
                  </button>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-outline py-3.5 px-6 text-xs uppercase tracking-wider sm:flex-1"
                >
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-[#8C827A] pt-1">
                <Link to="/menu/" className="inline-flex items-center gap-1.5 text-[#574F4A] hover:text-[#B84A1C] font-medium">
                  <FaArrowLeft size={10} />
                  <span>Back to Full Menu</span>
                </Link>
                <div className="flex items-center gap-3">
                  <a href={ORDER_LINKS.swiggy} target="_blank" rel="nofollow noopener noreferrer" className="hover:text-[#B84A1C] font-semibold">
                    Swiggy
                  </a>
                  <span>·</span>
                  <a href={ORDER_LINKS.zomato} target="_blank" rel="nofollow noopener noreferrer" className="hover:text-[#B84A1C] font-semibold">
                    Zomato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Pairings */}
        {pairedItems.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading text-[#181411] mb-6">
              Pairs Well With
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {pairedItems.map((pair) => (
                <div
                  key={pair.id}
                  className="bg-white border border-[#EAE4DC] rounded-2xl p-4 sm:p-5 flex items-center gap-4"
                >
                  <Link
                    to={`/menu/${pair.slug}/`}
                    className="w-24 h-20 rounded-xl overflow-hidden shrink-0 border border-[#EAE4DC] bg-[#F4EFE6]"
                  >
                    <ImageWithLoader
                      src={pair.image}
                      alt={pair.seoAlt || pair.name}
                      width={240}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/menu/${pair.slug}/`}
                      className="text-base font-bold font-heading text-[#181411] hover:text-[#B84A1C] transition-colors block truncate"
                    >
                      {pair.name}
                    </Link>
                    <p className="text-xs text-[#574F4A] line-clamp-2 mt-0.5 mb-2">
                      {pair.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#181411]">₹{pair.price}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(pair)}
                        className="text-xs font-semibold text-[#B84A1C] hover:underline cursor-pointer"
                      >
                        + Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Navi Mumbai Delivery Coverage */}
        <section className="bg-white border border-[#EAE4DC] rounded-3xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-heading text-[#181411] mb-2">
            Doorstep Delivery Across Navi Mumbai
          </h2>
          <p className="text-xs sm:text-sm text-[#574F4A] mb-5 leading-relaxed">
            Prepared fresh at our Taloja Phase 1 kitchen and delivered hot across nearby Navi Mumbai neighbourhoods:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}/`}
                className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE4DC] hover:border-[#B84A1C] transition-colors text-center"
              >
                <span className="text-xs font-bold text-[#181411] block">{loc.name}</span>
                <span className="text-[11px] text-[#8C827A] block mt-0.5">{loc.deliveryTime} mins</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Dish FAQs */}
        {item.faqs && item.faqs.length > 0 && (
          <section className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading text-[#181411] text-center mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {item.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white border border-[#EAE4DC] rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold font-heading text-[#181411]">
                        {faq.question}
                      </span>
                      <FaChevronDown
                        size={11}
                        className={`text-[#8C827A] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#B84A1C]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#574F4A] leading-relaxed border-t border-[#EAE4DC]/70">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Party Orders Subtle Callout */}
        <div className="mt-12 text-center text-xs text-[#574F4A]">
          Ordering for a house party or office lunch?{' '}
          <Link to="/party-orders/" className="text-[#B84A1C] font-semibold hover:underline inline-flex items-center gap-1">
            <span>See Party & Bulk Orders</span>
            <FaArrowRight size={9} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DishPage;
