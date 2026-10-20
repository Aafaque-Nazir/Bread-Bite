import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const SITE_URL = 'https://breadandbite.in';

const ROUTES = [
  {
    path: '/menu/',
    outDir: path.join(DIST_DIR, 'menu'),
    title: 'Our Menu & Online Order | Bread & Bite Navi Mumbai',
    description: 'Explore our menu of 500g Chicken Keema, Korma gravies, tandoori rotis, pav, and burgers. Freshly cooked & delivered fast across Navi Mumbai.',
    canonical: `${SITE_URL}/menu/`,
    h1: 'Our Kitchen Menu',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/about/',
    outDir: path.join(DIST_DIR, 'about'),
    title: 'About Bread & Bite | Cloud Kitchen in Navi Mumbai',
    description: 'Learn about Bread & Bite cloud kitchen in Taloja Phase 1. Honest 500g chicken portions, authentic homestyle recipes, and quick local delivery.',
    canonical: `${SITE_URL}/about/`,
    h1: 'About Bread & Bite Cloud Kitchen',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/reviews/',
    outDir: path.join(DIST_DIR, 'reviews'),
    title: 'Customer Reviews & Ratings | Bread & Bite Navi Mumbai',
    description: 'Our kitchen doors just opened in Navi Mumbai! Order today and be among our first founding food critics to get featured on our Wall of Fame.',
    canonical: `${SITE_URL}/reviews/`,
    h1: 'Customer Reviews & Ratings',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/contact/',
    outDir: path.join(DIST_DIR, 'contact'),
    title: 'Contact Bread & Bite | Order Food in Navi Mumbai',
    description: 'Get in touch with Bread & Bite. Order via WhatsApp at +91 93256 29256 or find our cloud kitchen in Taloja Phase 1. Fast Navi Mumbai delivery.',
    canonical: `${SITE_URL}/contact/`,
    h1: 'Contact Bread & Bite',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  },
  {
    path: '/cart/',
    outDir: path.join(DIST_DIR, 'cart'),
    title: 'Your Cart & Checkout | Bread & Bite Navi Mumbai',
    description: 'Review your cart items and complete your order with Bread & Bite. Fresh homestyle chicken gravies and breads delivered hot across Navi Mumbai.',
    canonical: `${SITE_URL}/cart/`,
    h1: 'Your Cart & Checkout',
    robots: 'noindex, follow'
  },
  {
    path: '/404',
    outFile: path.join(DIST_DIR, '404.html'),
    title: 'Page Not Found - 404 | Bread & Bite Navi Mumbai',
    description: 'The requested page was not found. Return to Bread & Bite to order fresh 500g Chicken Keema, Chicken Korma, hot rotis, and pav in Navi Mumbai.',
    canonical: `${SITE_URL}/404`,
    h1: 'Recipe Not Found - 404',
    robots: 'noindex, follow'
  }
];

function prerender() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`[prerender] dist/index.html not found! Run vite build first.`);
    process.exit(1);
  }

  let baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Inject single static H1 into dist/index.html for raw HTML crawlers
  const homeH1 = '<div id="root"><h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Chicken Keema, Korma, Hot Roti & Soft Pav</h1></div>';
  const updatedHomeHtml = baseHtml.replace('<div id="root"></div>', homeH1);
  fs.writeFileSync(indexHtmlPath, updatedHomeHtml, 'utf-8');
  console.log(`[prerender] Injected static crawlable H1 into dist/index.html`);

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

    // Inject route-specific static H1 for raw HTML crawlers
    if (route.h1) {
      const routeH1 = `<div id="root"><h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">${route.h1}</h1></div>`;
      html = html.replace('<div id="root"></div>', routeH1);
    }

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
