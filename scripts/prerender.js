import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import menuItems from '../data/MenuItems.js';
import { LOCATIONS } from '../data/locations.js';
import { FAQS } from '../data/faqs.js';
import {
  SITE_URL,
  DEFAULT_IMAGE,
  DEFAULT_GEO,
  LASTMOD_DATE,
  PARTY_FAQS,
  STATIC_ROUTES_META,
  normalizeCanonicalUrl,
  clampTitle,
  clampDescription,
  buildSchemaGraph,
  getDishMeta,
  getLocationMeta
} from '../data/seoConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

function escapeAttr(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeXml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderLayout({ h1, subtitle, bodyHtml, activePath }) {
  return `<div style="font-family:'Outfit',sans-serif;color:#181411;background-color:#FAF7F2;min-height:100vh;display:flex;flex-direction:column;"><header style="border-bottom:1px solid #EAE4DC;background:#FAF7F2;position:sticky;top:0;z-index:10;"><div style="max-width:1200px;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;"><a href="/" style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;font-weight:bold;color:#B84A1C;text-decoration:none;">Bread &amp; Bite</a><nav aria-label="Main Navigation"><ul style="display:flex;flex-wrap:wrap;gap:1.25rem;list-style:none;margin:0;padding:0;font-size:0.875rem;font-weight:600;"><li><a href="/" style="color:${activePath === '/' ? '#B84A1C' : '#181411'};text-decoration:none;">Home</a></li><li><a href="/menu/" style="color:${activePath.startsWith('/menu/') ? '#B84A1C' : '#181411'};text-decoration:none;">Menu</a></li><li><a href="/party-orders/" style="color:${activePath === '/party-orders/' ? '#B84A1C' : '#181411'};text-decoration:none;">Party Orders</a></li><li><a href="/about/" style="color:${activePath === '/about/' ? '#B84A1C' : '#181411'};text-decoration:none;">About</a></li><li><a href="/reviews/" style="color:${activePath === '/reviews/' ? '#B84A1C' : '#181411'};text-decoration:none;">Reviews</a></li><li><a href="/contact/" style="color:${activePath === '/contact/' ? '#B84A1C' : '#181411'};text-decoration:none;">Contact</a></li><li><a href="/taloja/" style="color:#B84A1C;text-decoration:none;">Locations</a></li></ul></nav></div></header><main style="flex:1;max-width:1100px;margin:0 auto;padding:2.5rem 1.5rem;width:100%;box-sizing:border-box;"><div style="text-align:center;margin-bottom:2.5rem;"><h1 style="font-family:'DM Serif Display',Georgia,serif;font-size:2.25rem;font-weight:normal;color:#181411;margin:0 0 0.75rem;line-height:1.2;">${h1}</h1>${subtitle ? `<p style="font-size:0.95rem;color:#574F4A;max-width:680px;margin:0 auto;line-height:1.6;">${subtitle}</p>` : ''}</div>${bodyHtml}</main><footer style="border-top:1px solid #EAE4DC;background:#FAF7F2;padding:2.5rem 1.5rem;margin-top:auto;"><div style="max-width:1100px;margin:0 auto;text-align:center;font-size:0.85rem;color:#574F4A;"><p style="margin:0 0 0.75rem;"><strong>Bread &amp; Bite Cloud Kitchen</strong> &middot; Shop 12, Ground Floor, Sector 11, Taloja Phase 1, Navi Mumbai 410208</p><p style="margin:0 0 0.75rem;"><strong>Order Online:</strong> <a href="/menu/" style="color:#B84A1C;text-decoration:underline;font-weight:600;">Kitchen Menu</a> &middot; <a href="/party-orders/" style="color:#B84A1C;text-decoration:underline;font-weight:600;">Party &amp; Bulk Orders</a> &middot; <a href="https://wa.me/919325629256" target="_blank" rel="nofollow noopener noreferrer" style="color:#181411;text-decoration:underline;font-weight:600;">WhatsApp Hotline (+91 93256 29256)</a></p><p style="margin:0 0 0.75rem;"><strong>Navi Mumbai Delivery Areas:</strong> <a href="/kharghar/" style="color:#B84A1C;text-decoration:underline;">Kharghar (20-30m)</a> &middot; <a href="/panvel/" style="color:#B84A1C;text-decoration:underline;">Panvel (25-35m)</a> &middot; <a href="/kamothe/" style="color:#B84A1C;text-decoration:underline;">Kamothe (20-30m)</a> &middot; <a href="/kalamboli/" style="color:#B84A1C;text-decoration:underline;">Kalamboli (25-35m)</a> &middot; <a href="/taloja/" style="color:#B84A1C;text-decoration:underline;">Taloja (10-20m)</a> &middot; <a href="/cbd-belapur/" style="color:#B84A1C;text-decoration:underline;">CBD Belapur (30-40m)</a></p><p style="margin:0;"><a href="/" style="color:#B84A1C;text-decoration:underline;">Home</a> &middot; <a href="/menu/" style="color:#B84A1C;text-decoration:underline;">Full Menu</a> &middot; <a href="/party-orders/" style="color:#B84A1C;text-decoration:underline;">Party Orders</a> &middot; <a href="/about/" style="color:#B84A1C;text-decoration:underline;">About Us</a> &middot; <a href="/reviews/" style="color:#B84A1C;text-decoration:underline;">Customer Reviews</a> &middot; <a href="/contact/" style="color:#B84A1C;text-decoration:underline;">Contact</a> &middot; <a href="/privacy/" style="color:#B84A1C;text-decoration:underline;">Privacy Policy</a> &middot; <a href="/terms/" style="color:#B84A1C;text-decoration:underline;">Terms of Service</a></p></div></footer></div>`;
}

function renderDishCard(item, areaName = null) {
  const cleanImg = item.image.split('?')[0];
  const altText = areaName
    ? `${item.name} delivery in ${areaName}, Navi Mumbai - Bread & Bite`
    : (item.seoAlt || `${item.name} - Bread & Bite Navi Mumbai`);
  return `
    <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
      <a href="/menu/${item.slug}/" style="display:block;text-decoration:none;color:inherit;">
        <img src="${cleanImg}" alt="${escapeAttr(altText)}" width="400" height="300" loading="lazy" style="width:100%;height:170px;object-fit:cover;border-radius:0.75rem;margin-bottom:0.75rem;display:block;" />
        <h3 style="font-size:1.05rem;margin:0 0 0.4rem;color:#181411;">${escapeHtmlText(item.name)}</h3>
      </a>
      <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">${escapeHtmlText(item.description)}</p>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <strong style="color:#B84A1C;font-size:1rem;">₹${item.price}</strong>
        <a href="/menu/${item.slug}/" style="font-size:0.8rem;font-weight:600;color:#181411;text-decoration:underline;">View Dish &rarr;</a>
      </div>
    </article>`;
}

function escapeHtmlText(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderFaqsHtml(faqs, heading = 'Frequently Asked Questions') {
  if (!faqs || faqs.length === 0) return '';
  const items = faqs.map((f) => `
    <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
      <h3 style="font-size:1.05rem;color:#181411;margin:0 0 0.5rem;">${escapeHtmlText(f.question)}</h3>
      <p style="font-size:0.875rem;color:#574F4A;line-height:1.6;margin:0;">${escapeHtmlText(f.answer)}</p>
    </div>
  `).join('');

  return `
    <section style="margin-bottom:3rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin-bottom:1.5rem;">${escapeHtmlText(heading)}</h2>
      <div style="display:flex;flex-direction:column;gap:1rem;">${items}</div>
    </section>
  `;
}

const bestsellersForHome = menuItems.filter((item) => item.isBestSeller).slice(0, 6);

const homeBody = `
  <section style="margin-bottom:3rem;">
    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem;">
      <a href="/menu/" style="background-color:#B84A1C;color:#FAF7F2;padding:0.75rem 1.5rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Explore Full Menu</a>
      <a href="/party-orders/" style="background-color:transparent;border:1px solid #181411;color:#181411;padding:0.75rem 1.5rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Party &amp; Bulk Orders</a>
    </div>

    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin-bottom:1.5rem;">Popular Dishes &amp; Value Combos</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">
      ${bestsellersForHome.map((item) => renderDishCard(item)).join('')}
    </div>
  </section>

  <section style="margin-bottom:3rem;background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin-bottom:1rem;">Explore Menu Categories</h2>
    <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
      <a href="/menu/?category=combos" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Value Combos</a>
      <a href="/menu/?category=gravy" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Chicken Gravies (500g)</a>
      <a href="/menu/?category=roti" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Tandoori Roti &amp; Soft Pav</a>
      <a href="/menu/?category=snacks" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Crispy Snacks &amp; Fries</a>
      <a href="/menu/?category=burgers" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Crispy Chicken Burgers</a>
      <a href="/menu/?category=dessert" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Warm Desserts</a>
    </div>
  </section>

  <section style="margin-bottom:3rem;background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:2rem;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin:0 0 0.5rem;">Delivering Across Navi Mumbai</h2>
    <p style="font-size:0.9rem;color:#574F4A;text-align:center;max-width:620px;margin:0 auto 1.75rem;line-height:1.6;">Fresh food cooked and delivered hot from our kitchen in Taloja Phase 1 to Kharghar, Panvel, Kamothe, Kalamboli, and CBD Belapur in 10 to 35 minutes.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
      ${LOCATIONS.map((loc) => `
        <a href="/${loc.slug}/" style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;text-decoration:none;color:#181411;display:block;">
          <h3 style="font-size:1.1rem;margin:0 0 0.25rem;color:#B84A1C;">${escapeHtmlText(loc.name)} Delivery</h3>
          <p style="font-size:0.8rem;color:#574F4A;margin:0 0 0.5rem;">${escapeHtmlText(loc.landmarks.slice(0, 3).join(' · '))}</p>
          <strong style="font-size:0.8rem;color:#181411;">${escapeHtmlText(loc.deliveryTime)} Min Delivery &rarr;</strong>
        </a>
      `).join('')}
    </div>
  </section>

  ${renderFaqsHtml(FAQS, 'Frequently Asked Questions')}
`;

const menuBody = `
  <section style="margin-bottom:3rem;">
    <div style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;margin-bottom:2rem;">
      <a href="/menu/" style="background:#B84A1C;color:#fff;border:1px solid #B84A1C;padding:0.5rem 1.25rem;border-radius:9999px;text-decoration:none;font-size:0.85rem;font-weight:600;">All Dishes</a>
      <a href="/menu/?category=Gravy" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Chicken Gravies (500g)</a>
      <a href="/menu/?category=Roti" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Tandoori Roti &amp; Pav</a>
      <a href="/menu/?category=Combos" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Value Meal Combos</a>
      <a href="/menu/?category=Snacks" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Snacks &amp; Fries</a>
      <a href="/menu/?category=Burgers" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Crispy Chicken Burgers</a>
      <a href="/menu/?category=Dessert" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Warm Desserts</a>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;">
      ${menuItems.map((item) => {
        const cleanImg = item.image.split('?')[0];
        return `
        <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
          <a href="/menu/${item.slug}/" style="display:block;text-decoration:none;color:inherit;">
            <img src="${cleanImg}" alt="${escapeAttr(item.seoAlt || item.name)}" width="400" height="300" loading="lazy" style="width:100%;height:170px;object-fit:cover;border-radius:0.75rem;margin-bottom:0.75rem;display:block;" />
            <h2 style="font-size:1.15rem;margin:0 0 0.5rem;color:#181411;">${escapeHtmlText(item.name)}</h2>
          </a>
          <p style="font-size:0.875rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">${escapeHtmlText(item.description)}</p>
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <span style="font-weight:700;color:#B84A1C;font-size:1.1rem;">₹${item.price}</span>
            <a href="/menu/${item.slug}/" style="font-size:0.8rem;font-weight:600;color:#181411;text-decoration:underline;">Details &rarr;</a>
          </div>
        </article>`;
      }).join('')}
    </div>
  </section>
`;

const partyOrdersBody = `
  <section style="margin-bottom:3rem;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem;margin-bottom:2rem;">
      <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.5rem;">
        <h2 style="font-size:1.25rem;color:#181411;margin:0 0 0.5rem;">Small House Gathering (8–10 Guests)</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.6;">5× 500g Chicken Keema or Korma tubs (2.5 kg total gravy) + 20 soft Ladi Pavs or 15 Tandoori Rotis. Starting ₹1,095.</p>
      </div>
      <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.5rem;">
        <h2 style="font-size:1.25rem;color:#181411;margin:0 0 0.5rem;">Office Team Lunch (15–20 Guests)</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.6;">10× 500g Chicken Gravies (Keema + Korma mix), 30 Tandoori Rotis / 40 Pavs, and Crispy Fries boxes. Starting ₹2,190.</p>
      </div>
      <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.5rem;">
        <h2 style="font-size:1.25rem;color:#181411;margin:0 0 0.5rem;">Celebration Feast (30–50+ Guests)</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.6;">Bulk Keema &amp; Korma handis, fresh clay-oven rotis, Crispy Chicken Burgers, and Warm Choco Lava Cakes.</p>
      </div>
    </div>
    <div style="text-align:center;">
      <a href="https://wa.me/919325629256?text=${encodeURIComponent('Hi Bread & Bite, I want to inquire about a party or bulk order.')}" style="display:inline-block;background:#B84A1C;color:#FAF7F2;padding:0.85rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Inquire on WhatsApp</a>
    </div>
  </section>
  ${renderFaqsHtml(PARTY_FAQS, 'Party & Bulk Order FAQs')}
`;

const aboutBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2rem;margin-bottom:2.5rem;line-height:1.7;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;margin:0 0 1rem;">Honest Food, Honest Portions</h2>
    <p>We started Bread &amp; Bite in Sector 11, Taloja Phase 1 with one clear rule: every single chicken gravy is weighed and served in generous <strong>500g family-sized portions</strong>.</p>
    <p>We prepare homestyle <a href="/menu/chicken-keema-boneless-500g/" style="color:#B84A1C;">Chicken Keema Boneless (500g)</a>, <a href="/menu/chicken-korma-500g/" style="color:#B84A1C;">Chicken Korma (500g)</a>, hot tandoori rotis, and soft ladi pavs with daily fresh 100% Halal chicken and authentic spices.</p>
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:2rem 0 1rem;">Our Cooking Standards</h2>
    <ul style="padding-left:1.5rem;margin:0 0 1.5rem;">
      <li><strong>500g Guaranteed Portions:</strong> Easily serves 2 adults per tub.</li>
      <li><strong>Daily Fresh Halal Poultry:</strong> Sourced fresh every morning, never frozen.</li>
      <li><strong>Homestyle Slow Cooking:</strong> Freshly ground garam masalas and roasted cashews.</li>
      <li><strong>Clay Oven Rotis:</strong> Whole wheat rotis baked fresh on order.</li>
    </ul>
    <div style="text-align:center;margin-top:2rem;">
      <a href="/menu/" style="display:inline-block;background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">View Kitchen Menu</a>
    </div>
  </section>
`;

const reviewsBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2rem;margin-bottom:2.5rem;text-align:center;line-height:1.7;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;margin:0 0 1rem;">Share Honest Feedback With Our Kitchen</h2>
    <p style="max-width:650px;margin:0 auto 1.5rem;">We recently started our cloud kitchen in Taloja Phase 1, Navi Mumbai. Rather than showing fake ratings, we invite real customers to taste our 500g Chicken Keema, Chicken Korma, and rotis and share genuine reviews on WhatsApp.</p>
    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-top:1.5rem;">
      <a href="/menu/" style="background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Order Food Now</a>
      <a href="/contact/" style="background:transparent;border:1px solid #181411;color:#181411;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Contact Kitchen</a>
    </div>
  </section>
`;

const contactBody = `
  <section style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-bottom:2.5rem;">
    <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2rem;line-height:1.6;color:#574F4A;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 1rem;">Kitchen Address</h2>
      <p style="margin:0 0 1rem;">Shop 12, Ground Floor, Sector 11, Taloja Phase 1, Navi Mumbai, Maharashtra 410208, India.</p>
      <h3 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.3rem;color:#181411;margin:1.5rem 0 0.5rem;">Direct Order Hotline</h3>
      <p style="margin:0 0 1rem;font-size:1.1rem;font-weight:700;color:#B84A1C;">+91 93256 29256</p>
      <p style="margin:0;font-size:0.85rem;">Available daily for online delivery, walk-in takeaway, and <a href="/party-orders/" style="color:#B84A1C;">party catering</a>.</p>
    </div>
    <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2rem;line-height:1.6;color:#574F4A;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 1rem;">Operating Hours</h2>
      <p style="margin:0 0 1rem;"><strong>2 Daily Operational Slots:</strong><br/>Lunch: 11:15 AM – 3:30 PM<br/>Dinner: 7:00 PM – 9:45 PM IST</p>
      <h3 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.3rem;color:#181411;margin:1.5rem 0 0.5rem;">Delivery Locations</h3>
      <p style="margin:0;">Fast local delivery across Taloja Phase 1 &amp; 2, Kharghar, Panvel, Kamothe, Kalamboli, and CBD Belapur.</p>
    </div>
  </section>
  ${renderFaqsHtml(FAQS, 'Frequently Asked Questions')}
`;

const cartBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2.5rem 2rem;margin-bottom:2.5rem;text-align:center;line-height:1.6;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 0.75rem;">Your Order Bag</h2>
    <p style="margin:0 0 1.5rem;">Review your selected items and complete your order. Kitchen operational slots are 11:15 AM to 3:30 PM &amp; 7:00 PM to 9:45 PM IST.</p>
    <a href="/menu/" style="display:inline-block;background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Browse Menu &amp; Add Items</a>
  </section>
`;

const thankYouBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2.5rem 2rem;margin-bottom:2.5rem;text-align:center;line-height:1.6;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 0.75rem;">Order Confirmation</h2>
    <p style="margin:0 0 1.5rem;">Thank you for ordering with Bread &amp; Bite Cloud Kitchen, Navi Mumbai.</p>
    <a href="/menu/" style="display:inline-block;background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Back to Menu</a>
  </section>
`;

const notFoundBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2.5rem 2rem;margin-bottom:2.5rem;text-align:center;line-height:1.6;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 0.75rem;">Page Not Found</h2>
    <p style="margin:0 0 1.5rem;">The dish or page you are looking for does not exist or has moved. Return to our kitchen menu to place your food order.</p>
    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
      <a href="/" style="background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Return Home</a>
      <a href="/menu/" style="background:transparent;border:1px solid #181411;color:#181411;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Explore Menu</a>
    </div>
  </section>
`;

const privacyBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2.5rem 2rem;margin-bottom:2.5rem;line-height:1.7;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.45rem;color:#181411;margin:0 0 0.75rem;">Privacy &amp; Order Data Protection</h2>
    <p style="margin:0 0 1rem;">Bread &amp; Bite is a dedicated cloud kitchen in Taloja Phase 1, Navi Mumbai. We collect customer names, phone numbers, and delivery addresses strictly to cook, pack, and route food delivery orders.</p>
    <h3 style="font-size:1.15rem;color:#181411;margin:1.5rem 0 0.5rem;">Zero Data Selling Guarantee</h3>
    <p style="margin:0 0 1rem;">We never sell, rent, or monetize your contact or address information. Payments are accepted via Cash on Delivery or UPI QR on delivery; no financial card numbers are stored.</p>
    <p style="margin:0;font-size:0.85rem;color:#8C827A;">Kitchen Hotline: +91 93256 29256 · Email: breadandbite777@gmail.com</p>
  </section>
`;

const termsBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2.5rem 2rem;margin-bottom:2.5rem;line-height:1.7;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.45rem;color:#181411;margin:0 0 0.75rem;">Terms of Service &amp; Delivery Policies</h2>
    <p style="margin:0 0 1rem;">Operating from Shop 12, Ground Floor, Sector 11, Taloja Phase 1, Navi Mumbai 410208. We cook fresh on order during 2 daily operational slots: Lunch (11:15 AM – 3:30 PM) and Dinner (7:00 PM – 9:45 PM IST).</p>
    <h3 style="font-size:1.15rem;color:#181411;margin:1.5rem 0 0.5rem;">Delivery Zones &amp; Minimums</h3>
    <p style="margin:0 0 1rem;">Taloja (Min ₹199, Free ₹299+), Kharghar/Kamothe/Kalamboli (Min ₹249, Free ₹399+), Panvel/Belapur (Min ₹499, Free ₹699+). 100% Halal fresh chicken sourced daily.</p>
    <p style="margin:0;font-size:0.85rem;color:#8C827A;">Order Hotline: +91 93256 29256</p>
  </section>
`;

function renderDishBody(item) {
  const cleanImg = item.image.split('?')[0];
  const pairings = (item.pairings || [])
    .map((s) => menuItems.find((m) => m.slug === s))
    .filter(Boolean);

  return `
    <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:1.75rem;margin-bottom:2.5rem;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;align-items:center;">
        <img src="${cleanImg}" alt="${escapeAttr(item.seoAlt || item.name)}" width="800" height="600" style="width:100%;height:auto;border-radius:1rem;display:block;object-fit:cover;" />
        <div>
          <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;color:#B84A1C;margin:0 0 0.5rem;">${escapeHtmlText(item.category)} · ${escapeHtmlText(item.type)} · ${escapeHtmlText(item.portion || 'Standard')}</p>
          <p style="font-size:0.95rem;color:#574F4A;line-height:1.65;margin:0 0 1rem;">${escapeHtmlText(item.longDescription || item.description)}</p>
          <p style="font-size:1.4rem;font-weight:700;color:#181411;margin:0 0 1rem;">₹${item.price} <span style="font-size:0.85rem;font-weight:500;color:#574F4A;">· Serves ${escapeHtmlText(item.serves || '1–2')} · Prep ${escapeHtmlText(item.prepTime || '15 mins')}</span></p>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <a href="https://wa.me/919325629256?text=${encodeURIComponent(`Hi Bread & Bite, I want to order ${item.name} (₹${item.price}).`)}" style="background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.5rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Order on WhatsApp</a>
            <a href="/menu/" style="border:1px solid #181411;color:#181411;padding:0.75rem 1.5rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Full Menu</a>
          </div>
        </div>
      </div>
    </section>

    ${pairings.length > 0 ? `
      <section style="margin-bottom:2.5rem;">
        <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 1rem;">Pairs Well With</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
          ${pairings.map((p) => renderDishCard(p)).join('')}
        </div>
      </section>
    ` : ''}

    ${renderFaqsHtml(item.faqs, `Questions About ${item.shortName || item.name}`)}
  `;
}

function renderLocationBody(loc) {
  const sectionsHtml = (loc.sections || []).map((s) => `
    <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;margin-bottom:1.5rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.45rem;color:#181411;margin:0 0 0.75rem;">${escapeHtmlText(s.heading)}</h2>
      <p style="font-size:0.9rem;color:#574F4A;line-height:1.7;margin:0;">${escapeHtmlText(s.text)}</p>
    </div>
  `).join('');

  const landmarksHtml = (loc.landmarks || []).map((l) => `
    <span style="background:#FAF7F2;border:1px solid #EAE4DC;padding:0.35rem 0.75rem;border-radius:9999px;font-size:0.8rem;color:#574F4A;">${escapeHtmlText(l)}</span>
  `).join('');

  const locDishes = menuItems.filter((item) => item.isBestSeller).slice(0, 4);
  const whatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(`Hi, I want to order food for delivery to ${loc.name}!`)}`;

  return `
    <div style="margin-bottom:2.5rem;text-align:center;">
      <p style="font-size:0.85rem;font-weight:700;color:#574F4A;margin:0 0 1rem;">
        ${escapeHtmlText(loc.deliveryTime)} Min Doorstep Delivery to ${escapeHtmlText(loc.name)} · Min Order ₹${loc.pricing?.minOrder} · Free Above ₹${loc.pricing?.freeAbove}
      </p>
      <p style="font-size:1.05rem;color:#574F4A;max-width:700px;margin:0 auto 1.5rem;line-height:1.6;">${escapeHtmlText(loc.heroSubtitle)}</p>
      <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
        <a href="${whatsappUrl}" style="background-color:#B84A1C;color:#FAF7F2;padding:0.85rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Order to ${escapeHtmlText(loc.name)} via WhatsApp</a>
        <a href="/menu/" style="background-color:transparent;border:1px solid #181411;color:#181411;padding:0.85rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Explore Full Kitchen Menu</a>
      </div>
    </div>

    <section style="margin-bottom:3rem;">
      ${sectionsHtml}
    </section>

    <section style="margin-bottom:3rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin-bottom:1.5rem;">Popular Dishes Delivered to ${escapeHtmlText(loc.name)}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">
        ${locDishes.map((item) => renderDishCard(item, loc.name)).join('')}
      </div>
    </section>

    <section style="margin-bottom:3rem;background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 0.75rem;">Delivery Areas &amp; Landmarks in ${escapeHtmlText(loc.name)}</h2>
      <p style="font-size:0.9rem;color:#574F4A;line-height:1.6;margin:0 0 1rem;">${escapeHtmlText(loc.coverageDetail)}</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
        ${landmarksHtml}
      </div>
    </section>

    ${renderFaqsHtml(loc.faqs, `Frequently Asked Questions about ${loc.name} Delivery`)}

    <section style="margin-bottom:2rem;background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;text-align:center;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.4rem;color:#181411;margin:0 0 0.5rem;">We Also Deliver To Nearby Areas</h2>
      <p style="font-size:0.85rem;color:#574F4A;margin:0 0 1.25rem;">Hot homestyle food delivered across Navi Mumbai within 10–40 minutes.</p>
      <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:0.75rem;">
        ${LOCATIONS.map((l) => `<a href="/${l.slug}/" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">${escapeHtmlText(l.name)} Delivery</a>`).join('')}
      </div>
    </section>
  `;
}

function buildRoutes() {
  const routes = [
    {
      path: '/',
      outFile: path.join(DIST_DIR, 'index.html'),
      ...STATIC_ROUTES_META['/'],
      h1: 'Homestyle Chicken Keema &amp; Korma, Full 500g Portions in Navi Mumbai.',
      subtitle: 'Fresh Chicken Keema, rich Chicken Korma, hot Tandoori Rotis, and soft Pavs — cooked fresh on every order and delivered hot across Navi Mumbai.',
      bodyHtml: homeBody,
      preloadImage: '/images/chicken-keema.webp',
      priority: '1.0',
      changefreq: 'daily',
      sitemapImages: menuItems.slice(0, 8).map((item) => ({
        loc: `${SITE_URL}${item.image.split('?')[0]}`,
        title: `${item.shortName || item.name} - Bread & Bite Navi Mumbai`,
        caption: item.description,
        geo: 'Taloja, Navi Mumbai, Maharashtra, India'
      }))
    },
    {
      path: '/menu/',
      outDir: path.join(DIST_DIR, 'menu'),
      ...STATIC_ROUTES_META['/menu/'],
      h1: 'Chicken Keema, Korma &amp; Kitchen Menu',
      subtitle: 'Full 500g chicken gravies, freshly baked tandoori roti, soft ladi pav, burgers, and warm desserts delivered across Navi Mumbai.',
      bodyHtml: menuBody,
      priority: '0.95',
      changefreq: 'daily',
      sitemapImages: menuItems.map((item) => ({
        loc: `${SITE_URL}${item.image.split('?')[0]}`,
        title: `${item.shortName || item.name} - Bread & Bite Menu`,
        caption: item.description,
        geo: 'Taloja, Navi Mumbai, Maharashtra, India'
      }))
    },
    {
      path: '/party-orders/',
      outDir: path.join(DIST_DIR, 'party-orders'),
      ...STATIC_ROUTES_META['/party-orders/'],
      breadcrumbs: [{ name: 'Party & Bulk Orders', path: '/party-orders/' }],
      h1: 'Party &amp; Bulk Chicken Orders in Navi Mumbai',
      subtitle: 'Honest 500g portions scaled up for house parties, corporate team lunches, and family gatherings across Taloja, Kharghar, Panvel, and CBD Belapur.',
      bodyHtml: partyOrdersBody,
      priority: '0.85',
      changefreq: 'weekly'
    },
    {
      path: '/about/',
      outDir: path.join(DIST_DIR, 'about'),
      ...STATIC_ROUTES_META['/about/'],
      h1: 'Fresh 500g Chicken Meals, cooked honest in Taloja.',
      subtitle: 'Serving generous 500g portions of homestyle chicken meals in Taloja Phase 1, Navi Mumbai.',
      bodyHtml: aboutBody,
      priority: '0.80',
      changefreq: 'monthly'
    },
    {
      path: '/reviews/',
      outDir: path.join(DIST_DIR, 'reviews'),
      ...STATIC_ROUTES_META['/reviews/'],
      h1: 'Real Reviews From Real Customers.',
      subtitle: 'Share your honest review of our 500g Chicken Keema, Chicken Korma, Tandoori Roti, and delivery.',
      bodyHtml: reviewsBody,
      priority: '0.60',
      changefreq: 'weekly'
    },
    {
      path: '/contact/',
      outDir: path.join(DIST_DIR, 'contact'),
      ...STATIC_ROUTES_META['/contact/'],
      h1: 'Contact Bread &amp; Bite — Navi Mumbai',
      subtitle: 'Order via WhatsApp at +91 93256 29256 or find our cloud kitchen in Taloja Phase 1.',
      bodyHtml: contactBody,
      priority: '0.80',
      changefreq: 'monthly'
    },
    {
      path: '/privacy/',
      outDir: path.join(DIST_DIR, 'privacy'),
      ...STATIC_ROUTES_META['/privacy/'],
      h1: 'Privacy Policy',
      subtitle: 'Transparent policies regarding customer data, order routing, and zero third-party sharing.',
      bodyHtml: privacyBody,
      priority: '0.30',
      changefreq: 'yearly'
    },
    {
      path: '/terms/',
      outDir: path.join(DIST_DIR, 'terms'),
      ...STATIC_ROUTES_META['/terms/'],
      h1: 'Terms of Service',
      subtitle: 'Operational guidelines covering kitchen slots, delivery thresholds, and quality guarantees.',
      bodyHtml: termsBody,
      priority: '0.30',
      changefreq: 'yearly'
    },
    {
      path: '/cart/',
      outDir: path.join(DIST_DIR, 'cart'),
      ...STATIC_ROUTES_META['/cart/'],
      noindex: true,
      h1: 'Your Cart &amp; Checkout',
      subtitle: 'Review your selected dishes and proceed to checkout.',
      bodyHtml: cartBody
    },
    {
      path: '/thank-you/',
      outDir: path.join(DIST_DIR, 'thank-you'),
      ...STATIC_ROUTES_META['/thank-you/'],
      noindex: true,
      h1: 'Thank You!',
      subtitle: 'Your order details are ready for WhatsApp confirmation.',
      bodyHtml: thankYouBody
    },
    {
      path: '/404',
      outFile: path.join(DIST_DIR, '404.html'),
      ...STATIC_ROUTES_META['/404'],
      noindex: true,
      h1: 'Recipe Not Found - 404',
      subtitle: 'The recipe or page you requested could not be located in our kitchen pantry.',
      bodyHtml: notFoundBody
    }
  ];

  // Add all 12 dedicated dish pages
  for (const item of menuItems) {
    const meta = getDishMeta(item);
    const cleanImg = item.image.split('?')[0];
    routes.push({
      ...meta,
      outDir: path.join(DIST_DIR, 'menu', item.slug),
      h1: escapeHtmlText(item.name),
      subtitle: escapeHtmlText(item.description),
      bodyHtml: renderDishBody(item),
      preloadImage: cleanImg,
      priority: '0.85',
      changefreq: 'weekly',
      sitemapImages: [
        {
          loc: `${SITE_URL}${cleanImg}`,
          title: `${item.shortName || item.name} - Bread & Bite Navi Mumbai`,
          caption: item.description,
          geo: 'Taloja, Navi Mumbai, Maharashtra, India'
        }
      ]
    });
  }

  // Add all 6 Navi Mumbai location pages
  for (const loc of LOCATIONS) {
    const meta = getLocationMeta(loc);
    routes.push({
      ...meta,
      outDir: path.join(DIST_DIR, loc.slug),
      h1: `Food Delivery in ${escapeHtmlText(loc.name)}`,
      subtitle: escapeHtmlText(loc.heroTagline),
      bodyHtml: renderLocationBody(loc),
      priority: '0.90',
      changefreq: 'daily',
      sitemapImages: [
        {
          loc: `${SITE_URL}/images/chicken-keema.webp`,
          title: `Chicken Keema Delivery in ${loc.name} - Bread & Bite`,
          caption: `500g Chicken Keema Boneless delivered hot in ${loc.name} (${loc.deliveryTime} mins).`,
          geo: `${loc.name}, Navi Mumbai, Maharashtra, India`
        },
        {
          loc: `${SITE_URL}/images/chicken-korma.webp`,
          title: `Chicken Korma Delivery in ${loc.name} - Bread & Bite`,
          caption: `500g rich cashew Chicken Korma delivered hot in ${loc.name}.`,
          geo: `${loc.name}, Navi Mumbai, Maharashtra, India`
        }
      ]
    });
  }

  return routes;
}

function injectHeadTags(baseHtml, route) {
  let html = baseHtml;
  const pageTitle = clampTitle(route.title);
  const pageDescription = clampDescription(route.description);
  const canonicalUrl = normalizeCanonicalUrl(route.path);
  const pageImage = route.image || DEFAULT_IMAGE;
  const geo = route.geo || DEFAULT_GEO;
  const robots = route.robots || 'index, follow';

  const schemaObj = buildSchemaGraph({
    url: route.path,
    title: pageTitle,
    description: pageDescription,
    image: pageImage,
    noindex: Boolean(route.noindex),
    faqs: route.faqs || null,
    breadcrumbs: route.breadcrumbs || null,
    product: route.product || null,
    areaServed: route.areaServed || null
  });
  const schemaJson = JSON.stringify(schemaObj).replace(/</g, '\\u003c');

  html = html.replace(/<title data-rh="true">.*?<\/title>/s, `<title data-rh="true">${escapeAttr(pageTitle)}</title>`);
  html = html.replace(/<meta data-rh="true" name="title" content=".*?" \/>/, `<meta data-rh="true" name="title" content="${escapeAttr(pageTitle)}" />`);
  html = html.replace(/<meta data-rh="true" name="description"[\s\S]*?\/>/, `<meta data-rh="true" name="description" content="${escapeAttr(pageDescription)}" />`);
  html = html.replace(/<meta data-rh="true" name="keywords"[\s\S]*?\/>/, `<meta data-rh="true" name="keywords" content="${escapeAttr(route.keywords || '')}" />`);
  html = html.replace(/<meta data-rh="true" name="robots" content=".*?" \/>/, `<meta data-rh="true" name="robots" content="${escapeAttr(robots)}" />`);

  html = html.replace(/<meta data-rh="true" name="geo\.placename" content=".*?" \/>/, `<meta data-rh="true" name="geo.placename" content="${escapeAttr(geo.placename)}" />`);
  html = html.replace(/<meta data-rh="true" name="geo\.position" content=".*?" \/>/, `<meta data-rh="true" name="geo.position" content="${escapeAttr(geo.position)}" />`);
  html = html.replace(/<meta data-rh="true" name="ICBM" content=".*?" \/>/, `<meta data-rh="true" name="ICBM" content="${escapeAttr(geo.icbm)}" />`);

  html = html.replace(/<link data-rh="true" rel="canonical" href=".*?" \/>/, `<link data-rh="true" rel="canonical" href="${escapeAttr(canonicalUrl)}" />\n  <link data-rh="true" rel="alternate" hrefLang="en-IN" href="${escapeAttr(canonicalUrl)}" />\n  <link data-rh="true" rel="alternate" hrefLang="x-default" href="${escapeAttr(canonicalUrl)}" />`);

  html = html.replace(/<meta data-rh="true" property="og:url" content=".*?" \/>/, `<meta data-rh="true" property="og:url" content="${escapeAttr(canonicalUrl)}" />`);
  html = html.replace(/<meta data-rh="true" property="og:title" content=".*?" \/>/, `<meta data-rh="true" property="og:title" content="${escapeAttr(pageTitle)}" />`);
  html = html.replace(/<meta data-rh="true" property="og:description"[\s\S]*?\/>/, `<meta data-rh="true" property="og:description" content="${escapeAttr(pageDescription)}" />`);
  html = html.replace(/<meta data-rh="true" property="og:image" content=".*?" \/>/, `<meta data-rh="true" property="og:image" content="${escapeAttr(pageImage)}" />`);

  html = html.replace(/<meta data-rh="true" name="twitter:url" content=".*?" \/>/, `<meta data-rh="true" name="twitter:url" content="${escapeAttr(canonicalUrl)}" />`);
  html = html.replace(/<meta data-rh="true" name="twitter:title" content=".*?" \/>/, `<meta data-rh="true" name="twitter:title" content="${escapeAttr(pageTitle)}" />`);
  html = html.replace(/<meta data-rh="true" name="twitter:description"[\s\S]*?\/>/, `<meta data-rh="true" name="twitter:description" content="${escapeAttr(pageDescription)}" />`);
  html = html.replace(/<meta data-rh="true" name="twitter:image" content=".*?" \/>/, `<meta data-rh="true" name="twitter:image" content="${escapeAttr(pageImage)}" />`);

  if (route.preloadImage) {
    html = html.replace(
      /<link rel="preload" as="image" href=".*?" fetchpriority="high" \/>/,
      `<link rel="preload" as="image" href="${escapeAttr(route.preloadImage)}" fetchpriority="high" />`
    );
  } else {
    html = html.replace(/\s*<link rel="preload" as="image" href=".*?" fetchpriority="high" \/>/, '');
  }

  // Inject static JSON-LD marked with data-rh="true" so React Helmet deduplicates cleanly
  html = html.replace(
    '</head>',
    `  <script data-rh="true" type="application/ld+json">${schemaJson}</script>\n</head>`
  );

  return html;
}

function buildSitemapXml(routes) {
  const indexableRoutes = routes.filter((r) => !r.noindex);
  const urlBlocks = indexableRoutes.map((r) => {
    const locUrl = normalizeCanonicalUrl(r.path);
    const imagesXml = (r.sitemapImages || []).map((img) => `
    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
      <image:geo_location>${escapeXml(img.geo)}</image:geo_location>
    </image:image>`).join('');

    return `  <url>
    <loc>${escapeXml(locUrl)}</loc>
    <lastmod>${LASTMOD_DATE}</lastmod>
    <changefreq>${r.changefreq || 'weekly'}</changefreq>
    <priority>${r.priority || '0.80'}</priority>${imagesXml}
  </url>`;
  }).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">

${urlBlocks}

</urlset>
`;
}

function prerender() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('[prerender] dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  const routes = buildRoutes();

  for (const route of routes) {
    let html = injectHeadTags(baseHtml, route);

    const routeShell = `<div id="root">${renderLayout({
      h1: route.h1,
      subtitle: route.subtitle,
      bodyHtml: route.bodyHtml,
      activePath: route.path
    })}</div>`;

    html = html.replace('<div id="root"></div>', routeShell);

    const targetFile = route.outFile || path.join(route.outDir, 'index.html');
    const targetFolder = path.dirname(targetFile);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }

    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`[prerender] Emitted ${targetFile.replace(DIST_DIR, 'dist')}`);
  }

  // Generate clean sitemap.xml in public/ and dist/
  const sitemapXml = buildSitemapXml(routes);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`[prerender] Generated sitemap.xml (${routes.filter((r) => !r.noindex).length} indexable URLs, lastmod ${LASTMOD_DATE})`);
}

prerender();
