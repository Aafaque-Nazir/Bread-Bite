import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { LOCATIONS } from '../data/locations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const SITE_URL = 'https://breadandbite.in';

function renderLayout({ h1, subtitle, bodyHtml, activePath }) {
  return `<div style="font-family:'Outfit',sans-serif;color:#181411;background-color:#FAF7F2;min-height:100vh;display:flex;flex-direction:column;"><header style="border-bottom:1px solid #EAE4DC;background:#FAF7F2;position:sticky;top:0;z-index:10;"><div style="max-width:1200px;margin:0 auto;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;"><a href="/" style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;font-weight:bold;color:#B84A1C;text-decoration:none;">Bread &amp; Bite</a><nav aria-label="Main Navigation"><ul style="display:flex;gap:1.25rem;list-style:none;margin:0;padding:0;font-size:0.875rem;font-weight:600;"><li><a href="/" style="color:${activePath === '/' ? '#B84A1C' : '#181411'};text-decoration:none;">Home</a></li><li><a href="/menu/" style="color:${activePath === '/menu/' ? '#B84A1C' : '#181411'};text-decoration:none;">Menu</a></li><li><a href="/about/" style="color:${activePath === '/about/' ? '#B84A1C' : '#181411'};text-decoration:none;">About</a></li><li><a href="/reviews/" style="color:${activePath === '/reviews/' ? '#B84A1C' : '#181411'};text-decoration:none;">Reviews</a></li><li><a href="/contact/" style="color:${activePath === '/contact/' ? '#B84A1C' : '#181411'};text-decoration:none;">Contact</a></li></ul></nav></div></header><main style="flex:1;max-width:1100px;margin:0 auto;padding:2.5rem 1.5rem;width:100%;box-sizing:border-box;"><div style="text-align:center;margin-bottom:2.5rem;"><h1 style="font-family:'DM Serif Display',Georgia,serif;font-size:2.25rem;font-weight:normal;color:#181411;margin:0 0 0.75rem;line-height:1.2;">${h1}</h1>${subtitle ? `<p style="font-size:0.95rem;color:#574F4A;max-width:680px;margin:0 auto;line-height:1.6;">${subtitle}</p>` : ''}</div>${bodyHtml}</main><footer style="border-top:1px solid #EAE4DC;background:#FAF7F2;padding:2.5rem 1.5rem;margin-top:auto;"><div style="max-width:1100px;margin:0 auto;text-align:center;font-size:0.85rem;color:#574F4A;"><p style="margin:0 0 0.75rem;"><strong>Bread &amp; Bite Cloud Kitchen</strong> &middot; Shop 12, Ground Floor, Sector 11, Taloja Phase 1, Navi Mumbai 410208</p><p style="margin:0 0 0.75rem;"><strong>Doorstep Delivery Hubs:</strong> <a href="/kharghar/" style="color:#B84A1C;text-decoration:underline;">Kharghar (20-30m)</a> &middot; <a href="/panvel/" style="color:#B84A1C;text-decoration:underline;">Panvel (25-35m)</a> &middot; <a href="/kamothe/" style="color:#B84A1C;text-decoration:underline;">Kamothe (20-30m)</a> &middot; <a href="/kalamboli/" style="color:#B84A1C;text-decoration:underline;">Kalamboli (25-35m)</a> &middot; <a href="/taloja/" style="color:#B84A1C;text-decoration:underline;">Taloja (10-20m)</a> &middot; <a href="/cbd-belapur/" style="color:#B84A1C;text-decoration:underline;">CBD Belapur (30-40m)</a></p><p style="margin:0;"><a href="/" style="color:#B84A1C;text-decoration:underline;">Home</a> &middot; <a href="/menu/" style="color:#B84A1C;text-decoration:underline;">Full Menu</a> &middot; <a href="/about/" style="color:#B84A1C;text-decoration:underline;">About Us</a> &middot; <a href="/reviews/" style="color:#B84A1C;text-decoration:underline;">Customer Reviews</a> &middot; <a href="/contact/" style="color:#B84A1C;text-decoration:underline;">Contact</a></p></div></footer></div>`;
}

const homeBody = `
  <section style="margin-bottom:3rem;">
    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem;">
      <a href="/menu/" style="background-color:#B84A1C;color:#FAF7F2;padding:0.75rem 1.5rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Explore Full Menu</a>
      <a href="/contact/" style="background-color:transparent;border:1px solid #181411;color:#181411;padding:0.75rem 1.5rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Contact &amp; Hours</a>
    </div>

    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin-bottom:1.5rem;">Popular Dishes &amp; Value Combos</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">
      <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
        <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Chicken Keema Boneless (500g)</h3>
        <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Generous 500g portion of tender minced chicken simmered with whole spices, caramelized onions, ginger-garlic, and fresh coriander.</p>
        <strong style="color:#B84A1C;font-size:1rem;">₹299 · Serves 2-3</strong>
      </div>
      <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
        <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Chicken Korma (500g)</h3>
        <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Aromatic cashew and golden fried onion Mughlai gravy with tender slow-cooked chicken pieces. Rich, mildly spiced, and deeply comforting.</p>
        <strong style="color:#B84A1C;font-size:1rem;">₹299 · Serves 2-3</strong>
      </div>
      <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
        <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Keema Pav Meal Combo</h3>
        <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Generous 500g Chicken Keema served with 4 soft bakery ladi pavs. The ultimate hearty meal combo for lunch or dinner.</p>
        <strong style="color:#B84A1C;font-size:1rem;">₹329 · Combo Deal</strong>
      </div>
      <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
        <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Chicken Korma &amp; Roti Meal</h3>
        <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">500g rich Chicken Korma paired with 2 hot, whole wheat tandoori rotis fresh from our clay oven.</p>
        <strong style="color:#B84A1C;font-size:1rem;">₹329 · Combo Deal</strong>
      </div>
    </div>
  </section>

  <section style="margin-bottom:3rem;background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin-bottom:1rem;">Explore Menu Categories</h2>
    <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
      <a href="/menu/?category=combos" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Value Combos</a>
      <a href="/menu/?category=gravy" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Chicken Gravies (500g)</a>
      <a href="/menu/?category=roti" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Tandoori Roti &amp; Soft Pav</a>
      <a href="/menu/?category=snacks" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Crispy Snacks &amp; Fries</a>
      <a href="/menu/?category=burgers" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Gourmet Burgers</a>
    </div>
  </section>

  <section style="margin-bottom:3rem;background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:2rem;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin:0 0 0.5rem;">Fast Food Delivery Across Navi Mumbai</h2>
    <p style="font-size:0.9rem;color:#574F4A;text-align:center;max-width:620px;margin:0 auto 1.75rem;line-height:1.6;">Our cloud kitchen is centrally located in Taloja Phase 1, delivering fresh, piping hot 500g chicken gravies, rotis, and combos to every surrounding township.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">
      <a href="/kharghar/" style="background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;text-decoration:none;color:#181411;display:block;">
        <h3 style="font-size:1.1rem;margin:0 0 0.25rem;color:#B84A1C;">Kharghar Delivery</h3>
        <p style="font-size:0.8rem;color:#574F4A;margin:0 0 0.5rem;">Sectors 1-35 · Central Park · Station</p>
        <strong style="font-size:0.8rem;color:#181411;">⚡ 20–30 Min Delivery &rarr;</strong>
      </a>
      <a href="/panvel/" style="background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;text-decoration:none;color:#181411;display:block;">
        <h3 style="font-size:1.1rem;margin:0 0 0.25rem;color:#B84A1C;">Panvel Delivery</h3>
        <p style="font-size:0.8rem;color:#574F4A;margin:0 0 0.5rem;">Old &amp; New Panvel · Khandeshwar</p>
        <strong style="font-size:0.8rem;color:#181411;">⚡ 25–35 Min Delivery &rarr;</strong>
      </a>
      <a href="/kamothe/" style="background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;text-decoration:none;color:#181411;display:block;">
        <h3 style="font-size:1.1rem;margin:0 0 0.25rem;color:#B84A1C;">Kamothe Delivery</h3>
        <p style="font-size:0.8rem;color:#574F4A;margin:0 0 0.5rem;">All Sectors · Mansarovar Area</p>
        <strong style="font-size:0.8rem;color:#181411;">⚡ 20–30 Min Delivery &rarr;</strong>
      </a>
      <a href="/kalamboli/" style="background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;text-decoration:none;color:#181411;display:block;">
        <h3 style="font-size:1.1rem;margin:0 0 0.25rem;color:#B84A1C;">Kalamboli Delivery</h3>
        <p style="font-size:0.8rem;color:#574F4A;margin:0 0 0.5rem;">Steel Market · APMC · Residential</p>
        <strong style="font-size:0.8rem;color:#181411;">⚡ 25–35 Min Delivery &rarr;</strong>
      </a>
      <a href="/taloja/" style="background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;text-decoration:none;color:#181411;display:block;">
        <h3 style="font-size:1.1rem;margin:0 0 0.25rem;color:#B84A1C;">Taloja Delivery</h3>
        <p style="font-size:0.8rem;color:#574F4A;margin:0 0 0.5rem;">Phase 1 &amp; 2 · MIDC · Kitchen Base</p>
        <strong style="font-size:0.8rem;color:#181411;">⚡ 10–20 Min Delivery &rarr;</strong>
      </a>
      <a href="/cbd-belapur/" style="background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;text-decoration:none;color:#181411;display:block;">
        <h3 style="font-size:1.1rem;margin:0 0 0.25rem;color:#B84A1C;">CBD Belapur Delivery</h3>
        <p style="font-size:0.8rem;color:#574F4A;margin:0 0 0.5rem;">Sectors 1-15 · NMMC · Palm Beach</p>
        <strong style="font-size:0.8rem;color:#181411;">⚡ 30–40 Min Delivery &rarr;</strong>
      </a>
    </div>
  </section>
`;

const menuBody = `
  <section style="margin-bottom:3rem;">
    <div style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;margin-bottom:2rem;">
      <a href="/menu/?category=all" style="background:#B84A1C;color:#fff;border:1px solid #B84A1C;padding:0.5rem 1.25rem;border-radius:9999px;text-decoration:none;font-size:0.85rem;font-weight:600;">All Items</a>
      <a href="/menu/?category=Combos" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Value Meal Combos</a>
      <a href="/menu/?category=Gravy" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Chicken Gravies (500g)</a>
      <a href="/menu/?category=Roti" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Tandoori Roti &amp; Fresh Pav</a>
      <a href="/menu/?category=Snacks" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Crispy Snacks &amp; Fries</a>
      <a href="/menu/?category=Burgers" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1.25rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Gourmet Burgers</a>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">
      <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.5rem;">
        <h2 style="font-size:1.2rem;margin:0 0 0.5rem;color:#181411;">Chicken Keema Boneless (500g)</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Tender boneless chicken mince cooked with aromatic whole spices, onions, and fresh cilantro. Generous 500g meal serving.</p>
        <span style="font-weight:700;color:#B84A1C;font-size:1.1rem;">₹299</span>
      </article>
      <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.5rem;">
        <h2 style="font-size:1.2rem;margin:0 0 0.5rem;color:#181411;">Chicken Korma (500g)</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Traditional rich Mughlai chicken curry slow-cooked with curd, fried onions, and whole spices in a generous 500g bowl.</p>
        <span style="font-weight:700;color:#B84A1C;font-size:1.1rem;">₹299</span>
      </article>
      <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.5rem;">
        <h2 style="font-size:1.2rem;margin:0 0 0.5rem;color:#181411;">Keema Pav Meal Combo</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">A hearty 500g portion of Chicken Keema paired with 4 soft bakery ladi pavs. Freshly prepared comfort food.</p>
        <span style="font-weight:700;color:#B84A1C;font-size:1.1rem;">₹329</span>
      </article>
      <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.5rem;">
        <h2 style="font-size:1.2rem;margin:0 0 0.5rem;color:#181411;">Chicken Korma &amp; Roti Meal</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Rich 500g Chicken Korma served with 2 freshly made tandoori rotis. Complete lunch and dinner value deal.</p>
        <span style="font-weight:700;color:#B84A1C;font-size:1.1rem;">₹329</span>
      </article>
      <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.5rem;">
        <h2 style="font-size:1.2rem;margin:0 0 0.5rem;color:#181411;">Tandoori Roti</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Freshly baked whole wheat flatbread made to order in our clay tandoor oven.</p>
        <span style="font-weight:700;color:#B84A1C;font-size:1.1rem;">₹15</span>
      </article>
      <article style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.5rem;">
        <h2 style="font-size:1.2rem;margin:0 0 0.5rem;color:#181411;">Soft Bakery Ladi Pav (Pair)</h2>
        <p style="font-size:0.875rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Pillowy soft traditional Mumbai ladi pavs, perfect for scooping up rich keema and korma gravies.</p>
        <span style="font-weight:700;color:#B84A1C;font-size:1.1rem;">₹15</span>
      </article>
    </div>
  </section>
`;

const aboutBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2rem;margin-bottom:2.5rem;line-height:1.7;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;margin:0 0 1rem;">Honest Food, Honest Portions</h2>
    <p>We started Bread &amp; Bite with one clear mission: when you order a chicken gravy, you should receive a real meal. While most restaurants serve 250g–300g containers that leave you wanting more, every single gravy at Bread &amp; Bite is weighed and served in generous <strong>500g family-sized portions</strong>.</p>
    <p>Operating from our clean cloud kitchen in Taloja Phase 1, we prepare homestyle Chicken Keema, aromatic Chicken Korma, hot tandoori rotis, and fluffy ladi pavs with daily fresh chicken and authentic spices.</p>
    
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:2rem 0 1rem;">Our Cooking Philosophy</h2>
    <ul style="padding-left:1.5rem;margin:0 0 1.5rem;">
      <li><strong>500g Guaranteed Portions:</strong> Enough to easily share or enjoy as a hearty single meal.</li>
      <li><strong>Daily Fresh Poultry:</strong> Sourced fresh every single morning from certified local suppliers.</li>
      <li><strong>Homestyle Slow Cooking:</strong> Freshly ground garam masalas, slow-caramelized onions, and real cashews.</li>
      <li><strong>Clay Oven Rotis:</strong> Whole wheat rotis baked fresh upon order arrival.</li>
    </ul>

    <div style="text-align:center;margin-top:2rem;">
      <a href="/menu/" style="display:inline-block;background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">View Kitchen Menu</a>
    </div>
  </section>
`;

const reviewsBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2rem;margin-bottom:2.5rem;text-align:center;line-height:1.7;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;margin:0 0 1rem;">Be One of Our Founding Food Critics</h2>
    <p style="max-width:650px;margin:0 auto 1.5rem;">Our cloud kitchen doors in Taloja Phase 1 just opened! We are committed to serving authentic homestyle food with uncompromising 500g portions. Order today and share your feedback directly with our head chef.</p>
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
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:1.5rem 0 0.5rem;">Direct Order Hotline</h2>
      <p style="margin:0 0 1rem;font-size:1.1rem;font-weight:700;color:#B84A1C;">+91 93256 29256</p>
      <p style="margin:0;font-size:0.85rem;">Available daily for online delivery orders, takeaway pick-ups, and advance party catering.</p>
    </div>
    <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2rem;line-height:1.6;color:#574F4A;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 1rem;">Operating Hours</h2>
      <p style="margin:0 0 1rem;"><strong>2 Daily Operational Slots:</strong><br/>Lunch: 11:00 AM – 3:15 PM<br/>Dinner: 7:00 PM – 9:15 PM IST</p>
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:1.5rem 0 0.5rem;">Delivery Locations</h2>
      <p style="margin:0;">Fast local delivery across Taloja Phase 1, Taloja Phase 2, Kharghar, Panvel, Kamothe, Kalamboli, and CBD Belapur.</p>
    </div>
  </section>
`;

const cartBody = `
  <section style="background:#fff;border:1px solid #EAE4DC;border-radius:1.5rem;padding:2.5rem 2rem;margin-bottom:2.5rem;text-align:center;line-height:1.6;color:#574F4A;">
    <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 0.75rem;">Your Order Bag</h2>
    <p style="margin:0 0 1.5rem;">Review your selected items and complete your order. Kitchen operational slots are 11:00 AM to 3:15 PM &amp; 7:00 PM to 9:15 PM IST.</p>
    <a href="/menu/" style="display:inline-block;background:#B84A1C;color:#FAF7F2;padding:0.75rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Browse Menu &amp; Add Items</a>
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

const ROUTES = [
  {
    path: '/menu/',
    outDir: path.join(DIST_DIR, 'menu'),
    title: 'Our Menu & Online Order | Bread & Bite Navi Mumbai',
    description: 'Explore our menu of 500g Chicken Keema, Korma gravies, tandoori rotis, pav, and burgers. Freshly cooked & delivered fast across Navi Mumbai.',
    canonical: `${SITE_URL}/menu/`,
    h1: 'Our Kitchen Menu &amp; Online Orders',
    subtitle: 'Freshly prepared 500g non-veg gravies, tandoori rotis, pavs, and gourmet sides delivered hot across Navi Mumbai.',
    bodyHtml: menuBody,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/about/',
    outDir: path.join(DIST_DIR, 'about'),
    title: 'About Bread & Bite | Cloud Kitchen in Navi Mumbai',
    description: 'Learn about Bread & Bite cloud kitchen in Taloja Phase 1. Honest 500g chicken portions, authentic homestyle recipes, and quick local delivery.',
    canonical: `${SITE_URL}/about/`,
    h1: 'About Bread &amp; Bite Cloud Kitchen',
    subtitle: 'Crafting generous 500g portions of homestyle non-veg delicacies in Taloja Phase 1, Navi Mumbai.',
    bodyHtml: aboutBody,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/reviews/',
    outDir: path.join(DIST_DIR, 'reviews'),
    title: 'Customer Reviews & Ratings | Bread & Bite Navi Mumbai',
    description: 'Our kitchen doors just opened in Navi Mumbai! Order today and be among our first founding food critics to get featured on our Wall of Fame.',
    canonical: `${SITE_URL}/reviews/`,
    h1: 'Customer Reviews &amp; Ratings',
    subtitle: 'Read genuine reviews or be among our very first critics to share feedback on our food and delivery.',
    bodyHtml: reviewsBody,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/contact/',
    outDir: path.join(DIST_DIR, 'contact'),
    title: 'Contact Bread & Bite | Order Food in Navi Mumbai',
    description: 'Get in touch with Bread & Bite. Order via WhatsApp at +91 93256 29256 or find our cloud kitchen in Taloja Phase 1. Fast Navi Mumbai delivery.',
    canonical: `${SITE_URL}/contact/`,
    h1: 'Contact Bread &amp; Bite',
    subtitle: 'Get in touch for instant WhatsApp ordering, delivery updates, and party catering in Navi Mumbai.',
    bodyHtml: contactBody,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/cart/',
    outDir: path.join(DIST_DIR, 'cart'),
    title: 'Your Cart & Checkout | Bread & Bite Navi Mumbai',
    description: 'Review your cart items and complete your order with Bread & Bite. Fresh homestyle chicken gravies and breads delivered hot across Navi Mumbai.',
    canonical: `${SITE_URL}/cart/`,
    h1: 'Your Cart &amp; Checkout',
    subtitle: 'Review your selected dishes and proceed to checkout.',
    bodyHtml: cartBody,
    robots: 'noindex, follow'
  },
  {
    path: '/404',
    outFile: path.join(DIST_DIR, '404.html'),
    title: 'Page Not Found - 404 | Bread & Bite Navi Mumbai',
    description: 'The requested page was not found. Return to Bread & Bite to order fresh 500g Chicken Keema, Chicken Korma, hot rotis, and pav in Navi Mumbai.',
    canonical: `${SITE_URL}/404`,
    h1: 'Recipe Not Found - 404',
    subtitle: 'The recipe or page you requested could not be located in our kitchen pantry.',
    bodyHtml: notFoundBody,
    robots: 'noindex, follow'
  }
];

function renderLocationBody(loc) {
  const sectionsHtml = (loc.sections || []).map(s => `
    <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;margin-bottom:1.5rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.45rem;color:#181411;margin:0 0 0.75rem;">${s.heading}</h2>
      <p style="font-size:0.9rem;color:#574F4A;line-height:1.7;margin:0;">${s.text}</p>
    </div>
  `).join('');

  const landmarksHtml = (loc.landmarks || []).map(l => `
    <span style="background:#FAF7F2;border:1px solid #EAE4DC;padding:0.35rem 0.75rem;border-radius:9999px;font-size:0.8rem;color:#574F4A;">📍 ${l}</span>
  `).join('');

  const faqsHtml = (loc.faqs || []).map(f => `
    <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
      <h3 style="font-size:1.05rem;color:#181411;margin:0 0 0.5rem;">${f.question}</h3>
      <p style="font-size:0.875rem;color:#574F4A;line-height:1.6;margin:0;">${f.answer}</p>
    </div>
  `).join('');

  const whatsappUrl = `https://wa.me/919325629256?text=${encodeURIComponent(`Hi, I want to order food for delivery to ${loc.name}!`)}`;

  return `
    <div style="margin-bottom:2.5rem;text-align:center;">
      <span style="display:inline-block;background:#fff;border:1px solid #EAE4DC;border-radius:9999px;padding:0.45rem 1.25rem;font-size:0.85rem;font-weight:700;color:#574F4A;margin-bottom:1.5rem;">
        ⚡ ${loc.deliveryTime} Min Doorstep Delivery to ${loc.name}
      </span>
      <p style="font-size:1.05rem;color:#574F4A;max-width:700px;margin:0 auto 1.5rem;line-height:1.6;">${loc.heroSubtitle}</p>
      <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
        <a href="${whatsappUrl}" style="background-color:#B84A1C;color:#FAF7F2;padding:0.85rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Order to ${loc.name} via WhatsApp</a>
        <a href="/menu/" style="background-color:transparent;border:1px solid #181411;color:#181411;padding:0.85rem 1.75rem;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.85rem;text-transform:uppercase;">Explore Full Kitchen Menu</a>
      </div>
    </div>

    <section style="margin-bottom:3rem;">
      ${sectionsHtml}
    </section>

    <section style="margin-bottom:3rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin-bottom:1.5rem;">Popular Dishes Delivered to ${loc.name}</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;">
        <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
          <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Chicken Keema Boneless (500g)</h3>
          <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Rich 500g slow-cooked boneless chicken mince with whole spices and fresh coriander. Serves 2.</p>
          <strong style="color:#B84A1C;font-size:1rem;">₹199 · Serves 2</strong>
        </div>
        <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
          <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Chicken Korma (500g)</h3>
          <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">Aromatic cashew and golden onion Mughlai gravy with tender slow-cooked chicken pieces.</p>
          <strong style="color:#B84A1C;font-size:1rem;">₹199 · Serves 2</strong>
        </div>
        <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
          <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Keema Pav Meal Combo</h3>
          <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">500g Chicken Keema + 4 soft bakery ladi pavs. The favorite comfort meal combo.</p>
          <strong style="color:#B84A1C;font-size:1rem;">₹219 · Value Deal</strong>
        </div>
        <div style="background:#fff;border:1px solid #EAE4DC;border-radius:1rem;padding:1.25rem;">
          <h3 style="font-size:1.1rem;margin:0 0 0.5rem;color:#181411;">Chicken Korma &amp; Roti Meal</h3>
          <p style="font-size:0.85rem;color:#574F4A;line-height:1.5;margin:0 0 0.75rem;">500g rich Chicken Korma + 2 hot clay-oven tandoori rotis. Complete lunch or dinner.</p>
          <strong style="color:#B84A1C;font-size:1rem;">₹249 · Value Deal</strong>
        </div>
      </div>
    </section>

    <section style="margin-bottom:3rem;background:#fff;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.5rem;color:#181411;margin:0 0 0.75rem;">Delivery Areas &amp; Landmarks in ${loc.name}</h2>
      <p style="font-size:0.9rem;color:#574F4A;line-height:1.6;margin:0 0 1rem;">${loc.coverageDetail}</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
        ${landmarksHtml}
      </div>
    </section>

    <section style="margin-bottom:3rem;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.75rem;color:#181411;text-align:center;margin-bottom:1.5rem;">Frequently Asked Questions about ${loc.name} Delivery</h2>
      <div style="display:flex;flex-direction:column;gap:1rem;">
        ${faqsHtml}
      </div>
    </section>

    <section style="margin-bottom:2rem;background:#FAF7F2;border:1px solid #EAE4DC;border-radius:1.25rem;padding:1.75rem;text-align:center;">
      <h2 style="font-family:'DM Serif Display',Georgia,serif;font-size:1.4rem;color:#181411;margin:0 0 0.5rem;">We Also Deliver To Nearby Areas</h2>
      <p style="font-size:0.85rem;color:#574F4A;margin:0 0 1.25rem;">Hot homestyle food delivered across Navi Mumbai within 20–35 minutes.</p>
      <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:0.75rem;">
        <a href="/kharghar/" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Kharghar Delivery</a>
        <a href="/panvel/" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Panvel Delivery</a>
        <a href="/kamothe/" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Kamothe Delivery</a>
        <a href="/kalamboli/" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Kalamboli Delivery</a>
        <a href="/taloja/" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">Taloja Delivery</a>
        <a href="/cbd-belapur/" style="background:#fff;border:1px solid #EAE4DC;padding:0.5rem 1rem;border-radius:9999px;color:#181411;text-decoration:none;font-size:0.85rem;font-weight:600;">CBD Belapur Delivery</a>
      </div>
    </section>
  `;
}

// Add all 6 Navi Mumbai delivery location landing pages to prerender list
for (const loc of LOCATIONS) {
  ROUTES.push({
    path: `/${loc.slug}/`,
    outDir: path.join(DIST_DIR, loc.slug),
    title: loc.title,
    description: loc.description,
    canonical: `${SITE_URL}/${loc.slug}/`,
    h1: `Food Delivery in ${loc.name} · Bread & Bite`,
    subtitle: loc.heroTagline,
    bodyHtml: renderLocationBody(loc),
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  });
}

function prerender() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`[prerender] dist/index.html not found! Run vite build first.`);
    process.exit(1);
  }

  let baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Inject full static crawlable shell into dist/index.html for raw HTML crawlers
  const homeShell = `<div id="root">${renderLayout({
    h1: 'Homestyle Flavours, Honest 500g Bowls.',
    subtitle: 'Slow-cooked Mughlai chicken gravies in hearty 500g family portions, fresh clay-oven tandoori rotis, and bakery-soft pavs — cooked on order and delivered hot across Navi Mumbai.',
    bodyHtml: homeBody,
    activePath: '/'
  })}</div>`;

  const updatedHomeHtml = baseHtml.replace('<div id="root"></div>', homeShell);
  fs.writeFileSync(indexHtmlPath, updatedHomeHtml, 'utf-8');
  console.log(`[prerender] Injected full semantic content into dist/index.html`);

  for (const route of ROUTES) {
    let html = baseHtml;

    // Replace Title
    html = html.replace(
      /<title data-rh="true">.*?<\/title>/s,
      `<title data-rh="true">${route.title}</title>`
    );
    html = html.replace(
      /<meta data-rh="true" name="title" content=".*?" \/>/,
      `<meta data-rh="true" name="title" content="${route.title}" />`
    );

    // Replace Description
    html = html.replace(
      /<meta data-rh="true" name="description"[\s\S]*?\/>/,
      `<meta data-rh="true" name="description"\n    content="${route.description}" />`
    );

    // Replace Canonical
    html = html.replace(
      /<link data-rh="true" rel="canonical" href=".*?" \/>/,
      `<link data-rh="true" rel="canonical" href="${route.canonical}" />`
    );

    // Replace Robots
    html = html.replace(
      /<meta data-rh="true" name="robots" content=".*?" \/>/,
      `<meta data-rh="true" name="robots" content="${route.robots}" />`
    );

    // Replace OG Title & URL & Description
    html = html.replace(
      /<meta data-rh="true" property="og:title" content=".*?" \/>/,
      `<meta data-rh="true" property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta data-rh="true" property="og:url" content=".*?" \/>/,
      `<meta data-rh="true" property="og:url" content="${route.canonical}" />`
    );
    html = html.replace(
      /<meta data-rh="true" property="og:description"[\s\S]*?\/>/,
      `<meta data-rh="true" property="og:description"\n    content="${route.description}" />`
    );

    // Replace Twitter Title & URL & Description
    html = html.replace(
      /<meta data-rh="true" name="twitter:title" content=".*?" \/>/,
      `<meta data-rh="true" name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta data-rh="true" name="twitter:url" content=".*?" \/>/,
      `<meta data-rh="true" name="twitter:url" content="${route.canonical}" />`
    );
    html = html.replace(
      /<meta data-rh="true" name="twitter:description"[\s\S]*?\/>/,
      `<meta data-rh="true" name="twitter:description"\n    content="${route.description}" />`
    );

    // Inject route-specific static content shell into root for raw HTML crawlers
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

  console.log(`[prerender] Successfully generated static shells for all routes.`);
}

prerender();
