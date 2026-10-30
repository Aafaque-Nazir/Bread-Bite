# Bread & Bite — Design System & Taste Guidelines (`DESIGN.md`)

> **Master Design Standard for Bread & Bite Navi Mumbai.**
> Every engineer, agent, and contributor MUST follow these rules strictly.
> Any pull request, edit, or component containing banned patterns (blinkers, "pattiya", pills, or AI jargon) must be rejected immediately.

---

## 1. Brand Identity & Soul

- **What Bread & Bite Is:**
  An authentic homestyle cloud kitchen based in Taloja, delivering hot 500g Chicken Keema, rich Chicken Korma, hot tandoori rotis, and soft pavs across Navi Mumbai.
- **The Customer Experience:**
  Simple, honest, delicious, and grounded. People want hearty, clean homestyle food cooked with real spices and delivered hot — without marketing gimmicks or pretension.
- **Tone of Voice:**
  Everyday, human, honest, and appetising. Real kitchen language only.

---

## 2. STRICT BANNED LIST — Never Use Under Any Circumstances

| Banned Element | Why It Is Banned | What To Do Instead |
|---|---|---|
| **"Pattiya" / Progress Bars** | Delivery progress bars, spending meters, percentage bars (`44%`), and colored strip tracks look like cheap e-commerce discount apps. | Mention delivery terms plainly as clean text: `Delivery: Free above ₹299` or inside the bill breakdown. |
| **Blinkers & Pulsing Dots** | Green/red pulsing dots (`animate-pulse`), status pings, and live-cooking dots look like stock tickers or tacky CCTV trackers. | Use simple, honest text: `Next slot opens at 7:00 PM`. No blinking animations. No dots. |
| **Pill / Badge Inflation** | Wrapping every small phrase in rounded pills (`rounded-full bg-... border ...`) creates visual clutter and looks like generic template slop. | Use typographic hierarchy, font weight, subtle muted colors, and generous whitespace. |
| **AI / Tech Marketing Jargon** | Words like "Matrix", "Node", "Hub", "Zone 01", "Curated selection", "Optimized portioning", "Culinary ecosystem" sound fake and alien to a food kitchen. | Use real, grounded food words: "Fresh Chicken Keema", "500g Portions", "Cooked fresh to order", "Lunch Slot (11:15 AM – 3:30 PM)", "Taloja, Kharghar, Panvel". |
| **Color Clashing / Neon Stickers** | Slapping bright neon green WhatsApp icons (`#25D366`) inside terracotta (`#B84A1C`) or dark buttons creates cheap contrast clash. | Keep buttons monochromatic and brand-aligned (Espresso `#181411` or Terracotta `#B84A1C`). Keep icons subtle and monochromatic (`opacity-80` white). |
| **Dead-End Disabled Buttons** | Rendering massive grey disabled blocks (`cursor-not-allowed`) that block user action frustrates users. | Allow users to review their bag and pre-order (`Review & Pre-order →`). Always leave an active, intuitive path forward. |
| **Excessive Emojis & Icons** | Sprinkling motorcycle icons, fire emojis, sparkles, and rocket icons across UI elements makes the site feel childish. | Zero unnecessary emojis in UI elements. Reserve clean SVG icons only where strictly functional (e.g. cart bag, phone, close). |

---

## 3. Visual & Aesthetic Standards

### Color Palette
- **Canvas / Background:** `#FAF7F2` (Warm, comforting cream)
- **Deep Espresso (Primary Text & Core CTA):** `#181411`
- **Terracotta Accent (Brand Highlights & Active State):** `#B84A1C`
- **Muted Charcoal (Secondary Body & Meta):** `#574F4A`
- **Soft Taupe (Subtle Subtext & Captions):** `#8C827A`
- **Hairline Border:** `#EAE4DC` (Delicate, crisp, never heavy)

### Typography
- **Headings & Brand:** `DM Serif Display`, serif. Confident, classic, culinary warmth.
- **Body & UI Elements:** `Outfit`, sans-serif. Clean, crisp, legible at all sizes.
- **Price & Numbers:** Clean tabular numbers or clean sans-serif; never oversized or screaming.

### Component Design Principles

1. **Cart & Bag Drawer:**
   - **Header:** Clean: `Your Bag (1 item)` with a simple close icon. No secondary "BAG" labels.
   - **Items Area:** The food is the hero. Clear thumbnail, dish name, portion, total price, and simple `[-] 1 [+]` quantity stepper. Hairline divider between rows.
   - **Footer:** Crisp bill summary (`Subtotal`, `Delivery`, `Total`). One primary action button (`Proceed to Checkout` or `Review & Pre-order`).
   - **No progress bars, no blinking indicators, no multi-line boxed disclaimers.**

2. **Navigation Bar:**
   - Balanced spacing: Logo on left, clean uppercase nav links in center, discreet Bag trigger and `Order Now` pill on right.
   - No screaming neon logos. Monochromatic, refined aesthetic.

3. **Status & Operating Hours:**
   - State hours calmly and factually: `Lunch Slot: 11:15 AM – 3:30 PM · Dinner Slot: 7:00 PM – 9:45 PM`.
   - Never use urgency hacks, false countdowns, or glowing beacon dots.

---

## 4. Enforcement Checklist (Before Declaring Any Task Done)

- [ ] Are there any progress bars or strip meters ("pattiya")? If yes, remove.
- [ ] Are there any pulsing or blinking status dots? If yes, remove.
- [ ] Are there any pill boxes or badges wrapping regular text? If yes, remove.
- [ ] Is every word honest, everyday English/Hinglish food language (no corporate/AI jargon)?
- [ ] Do colors stay within the `#FAF7F2` / `#181411` / `#B84A1C` / `#EAE4DC` palette without neon clashes?
- [ ] Does `npm run build` succeed with zero errors?
