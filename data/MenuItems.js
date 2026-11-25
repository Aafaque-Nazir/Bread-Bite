const menuItems = [
  // ==================== GRAVY (500G PORTIONS) ====================
  {
    id: 1,
    slug: "chicken-keema-boneless-500g",
    name: "Chicken Keema Boneless - 500gms",
    shortName: "Chicken Keema Boneless (500g)",
    description: "500g rich chicken keema cooked in whole spices, onions, and fresh coriander. 100% boneless, hot and flavorful.",
    longDescription: "Our signature 500-gram boneless chicken keema is slow-cooked fresh on order using finely minced 100% Halal chicken breast and thigh, caramelized onions, ginger-garlic paste, whole garam masala, and fresh coriander. Served piping hot in a spill-proof 500g container with fresh lemon — easily feeds two hungry adults.",
    price: 199,
    category: "Gravy",
    type: "Non-Veg",
    portion: "500gms",
    serves: "2 Adults",
    prepTime: "15–20 mins",
    image: "/images/chicken-keema.webp",
    seoAlt: "Chicken Keema Boneless 500g Portion - Fresh Food Delivery in Taloja, Navi Mumbai | Bread & Bite",
    isBestSeller: true,
    isNew: false,
    tags: ["500g", "Boneless", "Halal"],
    pairings: ["ladi-pav-4-pieces", "tandoori-roti"],
    keywords: "chicken keema 500g navi mumbai, boneless chicken keema taloja, chicken keema delivery kharghar, halal keema delivery panvel",
    faqs: [
      {
        question: "How many people does the 500g Chicken Keema Boneless serve?",
        answer: "One 500g portion of Chicken Keema Boneless comfortably serves 2 adults when paired with 4 ladi pavs or 2–3 tandoori rotis."
      },
      {
        question: "Is the Chicken Keema 100% boneless and Halal?",
        answer: "Yes. We use 100% Halal fresh boneless chicken sourced daily — never frozen meat or pre-cooked stored gravies."
      }
    ]
  },
  {
    id: 2,
    slug: "chicken-korma-500g",
    name: "Chicken Korma - 500gms",
    shortName: "Chicken Korma (500g)",
    description: "500g chicken pieces slow-cooked in thick, tasty cashew and onion korma gravy. Perfect with hot rotis.",
    longDescription: "Homestyle Mughlai Chicken Korma weighed to a full 500g family portion. Tender fresh chicken pieces simmered in a rich, creamy gravy of fried onions, roasted cashews, curd, and freshly ground spices. Mildly spiced, aromatic, and thick enough to scoop cleanly with hot tandoori rotis.",
    price: 199,
    category: "Gravy",
    type: "Non-Veg",
    portion: "500gms",
    serves: "2 Adults",
    prepTime: "15–20 mins",
    image: "/images/chicken-korma.webp",
    seoAlt: "Chicken Korma 500g Cashew Gravy - Fresh Mughlai Chicken Delivery Navi Mumbai | Bread & Bite",
    isBestSeller: true,
    isNew: false,
    tags: ["500g", "Halal"],
    pairings: ["tandoori-roti", "ladi-pav-4-pieces"],
    keywords: "chicken korma 500g navi mumbai, mughlai chicken korma taloja, chicken korma delivery kharghar, halal chicken curry panvel",
    faqs: [
      {
        question: "Is Chicken Korma very spicy?",
        answer: "Our Chicken Korma has a balanced, mildly spiced cashew and fried-onion gravy that suits families and office lunches well."
      },
      {
        question: "What bread goes best with Bread & Bite Chicken Korma?",
        answer: "Whole wheat clay-oven Tandoori Roti pairs best with Chicken Korma. You can also choose our Chicken Korma & Roti Meal combo for ₹249."
      }
    ]
  },
  {
    id: 3,
    slug: "random-chicken-gravy-500g",
    name: "Random Chicken Gravy - 500gms",
    shortName: "Chef's Daily Special Chicken Gravy (500g)",
    description: "500g chef's daily special chicken curry cooked homestyle with rich traditional spices and thick masala gravy.",
    longDescription: "Our kitchen's rotating daily special homestyle chicken curry in a generous 500g portion. Fresh Halal chicken cooked in a comforting Mumbai-style onion-tomato masala with whole spices and fresh coriander — ideal when you want an everyday homestyle non-veg meal.",
    price: 199,
    category: "Gravy",
    type: "Non-Veg",
    portion: "500gms",
    serves: "2 Adults",
    prepTime: "15–20 mins",
    image: "/images/random-chicken-gravy.webp",
    seoAlt: "Chef's Daily Special Chicken Gravy 500g - Homestyle Curry Delivery Taloja | Bread & Bite",
    isBestSeller: false,
    isNew: true,
    tags: ["500g", "Daily Special", "Halal"],
    pairings: ["tandoori-roti", "ladi-pav-4-pieces"],
    keywords: "homestyle chicken curry taloja, 500g chicken gravy navi mumbai, chicken masala delivery kharghar",
    faqs: [
      {
        question: "What is included in Random Chicken Gravy (500g)?",
        answer: "It is a full 500g portion of our chef's daily homestyle chicken curry cooked fresh on order with daily sourced Halal chicken."
      }
    ]
  },

  // ==================== ROTI & BREADS ====================
  {
    id: 4,
    slug: "tandoori-roti",
    name: "Tandoori Roti",
    shortName: "Clay-Oven Tandoori Roti",
    description: "Hot, freshly baked whole wheat tandoori roti. Crispy on the outside and soft inside.",
    longDescription: "Fresh whole wheat tandoori roti baked hot in our clay oven only after your order arrives. Lightly charred with crisp edges and a soft center, packed in insulated wrap to stay warm alongside 500g Chicken Keema or Chicken Korma.",
    price: 30,
    category: "Roti",
    type: "Veg",
    portion: "1 pc",
    serves: "1 Person",
    prepTime: "5–10 mins",
    image: "/images/tandoori-roti.webp",
    seoAlt: "Hot Clay-Oven Tandoori Roti - Whole Wheat Flatbread Delivery Navi Mumbai | Bread & Bite",
    isBestSeller: true,
    isNew: false,
    tags: ["Fresh Baked"],
    pairings: ["chicken-korma-500g", "chicken-keema-boneless-500g"],
    keywords: "tandoori roti delivery taloja, whole wheat tandoori roti kharghar, fresh roti delivery navi mumbai",
    faqs: [
      {
        question: "Are the Tandoori Rotis made of whole wheat?",
        answer: "Yes, our Tandoori Rotis are made from whole wheat atta and baked fresh to order in a clay tandoor."
      }
    ]
  },
  {
    id: 5,
    slug: "ladi-pav-4-pieces",
    name: "Pav - 4 pieces",
    shortName: "Soft Bakery Ladi Pav (4 pcs)",
    description: "Set of 4 soft, fresh golden ladi pavs. The classic pair with hot Chicken Keema.",
    longDescription: "Four fresh, pillowy-soft Mumbai bakery ladi pavs baked daily and packed warm. The classic street-style pairing for soaking up our 500g boneless Chicken Keema or homestyle chicken gravies.",
    price: 30,
    category: "Roti",
    type: "Veg",
    portion: "4 pcs",
    serves: "1–2 People",
    prepTime: "5 mins",
    image: "/images/pav.webp",
    seoAlt: "Soft Bakery Ladi Pav 4 Pcs - Fresh Pav Delivery Taloja | Bread & Bite",
    isBestSeller: true,
    isNew: false,
    tags: ["4 Pcs", "Soft & Fresh"],
    pairings: ["chicken-keema-boneless-500g", "keema-pav-meal"],
    keywords: "ladi pav delivery taloja, soft pav kharghar, keema pav bread navi mumbai",
    faqs: [
      {
        question: "How many pav pieces come in one order?",
        answer: "Each order includes 4 fresh bakery ladi pav pieces for ₹30."
      }
    ]
  },

  // ==================== SNACKS ====================
  {
    id: 6,
    slug: "french-fries-200g",
    name: "French Fries (200g)",
    shortName: "Crispy French Fries (200g)",
    description: "200g crispy golden salted potato fries, fried fresh on order. Served with tomato ketchup.",
    longDescription: "A generous 200-gram box of crisp golden salted french fries fried fresh in clean oil upon order. Prepared in dedicated vegetarian cookware and served hot with ketchup sachets — great as a snack or paired with our Crispy Chicken Burger.",
    price: 99,
    category: "Snacks",
    type: "Veg",
    portion: "200g",
    serves: "1–2 People",
    prepTime: "10–12 mins",
    image: "/images/french-fries.webp",
    seoAlt: "Crispy Golden French Fries 200g - Hot Snacks Delivery Navi Mumbai | Bread & Bite",
    isBestSeller: true,
    isNew: false,
    tags: ["200g", "Crispy"],
    pairings: ["crispy-chicken-burger", "choco-lava-cake"],
    keywords: "french fries delivery taloja, 200g crispy fries kharghar, veg snacks delivery navi mumbai",
    faqs: [
      {
        question: "Are French Fries cooked separately from chicken items?",
        answer: "Yes, all vegetarian snacks including French Fries and Maggi are cooked using separate clean cookware and fresh oil."
      }
    ]
  },
  {
    id: 7,
    slug: "plain-maggi",
    name: "Plain Maggi",
    shortName: "Hot Masala Maggi",
    description: "Hot classic masala Maggi noodles cooked fresh with authentic tastemaker seasoning.",
    longDescription: "Comforting, hot classic masala Maggi cooked fresh to order in separate vegetarian cookware. Delivered sealed and steaming hot for quick lunch breaks, late-afternoon cravings, or light dinner across Taloja and Kharghar.",
    price: 99,
    category: "Snacks",
    type: "Veg",
    portion: "1 Bowl",
    serves: "1 Person",
    prepTime: "8–10 mins",
    image: "/images/plain-maggi.webp",
    seoAlt: "Classic Hot Masala Maggi - Quick Snacks Delivery Taloja Phase 1 | Bread & Bite",
    isBestSeller: false,
    isNew: false,
    tags: ["Hot & Fast"],
    pairings: ["french-fries-200g", "choco-lava-cake"],
    keywords: "maggi delivery taloja, hot masala maggi kharghar, quick snacks navi mumbai",
    faqs: [
      {
        question: "Is Plain Maggi purely vegetarian?",
        answer: "Yes, our Maggi is 100% vegetarian and prepared in separate veg-only cookware."
      }
    ]
  },

  // ==================== BURGERS ====================
  {
    id: 8,
    slug: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    shortName: "Crispy Chicken Burger",
    description: "Crispy spiced chicken patty with shredded lettuce, sliced onions, and creamy mayo in a toasted bun.",
    longDescription: "Golden-fried spiced Halal chicken fillet patty layered with crunchy shredded lettuce, crisp onion rings, and creamy herb mayonnaise inside a lightly toasted sesame bun. Fried fresh when you order so the crunch holds through delivery.",
    price: 149,
    category: "Burgers",
    type: "Non-Veg",
    portion: "1 Burger",
    serves: "1 Person",
    prepTime: "12–15 mins",
    image: "/images/crispy-chicken-burger.jpg",
    seoAlt: "Crispy Chicken Burger - Fresh Halal Burger Delivery Taloja & Kharghar | Bread & Bite",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Juicy"],
    pairings: ["french-fries-200g", "choco-lava-cake"],
    keywords: "crispy chicken burger taloja, halal chicken burger kharghar, burger delivery navi mumbai, chicken burger panvel",
    faqs: [
      {
        question: "Is the chicken patty Halal certified?",
        answer: "Yes, our Crispy Chicken Burger uses 100% Halal fresh chicken marinated and fried fresh on order."
      }
    ]
  },

  // ==================== VALUE MEALS & COMBOS ====================
  {
    id: 9,
    slug: "keema-pav-meal",
    name: "Keema Pav Meal",
    shortName: "Keema Pav Meal Combo",
    description: "500g Chicken Keema Boneless served with 4 soft ladi pavs. Filling meal for 2 people.",
    longDescription: "Our #1 bestseller combo: a full 500-gram portion of slow-cooked boneless Chicken Keema paired with 4 soft Mumbai bakery ladi pavs and fresh lemon. Complete, filling lunch or dinner for two at ₹219 (Save ₹10 compared to ordering separately).",
    price: 219,
    originalPrice: 229,
    discount: "Save ₹10",
    category: "Combos",
    type: "Non-Veg",
    portion: "500g Keema + 4 Pav",
    serves: "2 Adults",
    prepTime: "15–20 mins",
    image: "/images/keema-pav-meal.jpg",
    seoAlt: "Keema Pav Meal Combo (500g Keema + 4 Pav) - Bestseller Food Delivery Navi Mumbai | Bread & Bite",
    isBestSeller: true,
    isNew: true,
    tags: ["Bestseller Meal", "500g Keema + 4 Pav"],
    pairings: ["choco-lava-cake", "french-fries-200g"],
    keywords: "keema pav taloja, keema pav delivery kharghar, chicken keema pav combo navi mumbai, keema pav panvel",
    faqs: [
      {
        question: "What comes in the Keema Pav Meal combo?",
        answer: "You get one full 500g container of boneless Chicken Keema plus 4 soft bakery ladi pavs for ₹219."
      },
      {
        question: "Does one Keema Pav Meal qualify for delivery in Taloja?",
        answer: "Yes! Minimum order for Taloja is ₹199, so one Keema Pav Meal (₹219) qualifies immediately."
      }
    ]
  },
  {
    id: 10,
    slug: "chicken-korma-roti-meal",
    name: "Chicken Korma & Roti Meal",
    shortName: "Chicken Korma & Roti Meal",
    description: "500g Chicken Korma served with 2 hot tandoori rotis. Complete lunch or dinner meal.",
    longDescription: "Rich cashew-and-onion Mughlai Chicken Korma in a full 500g portion paired with 2 freshly baked whole wheat clay-oven Tandoori Rotis. Packed separately so the rotis stay warm and the korma stays spill-free — ₹249 complete meal (Save ₹10).",
    price: 249,
    originalPrice: 259,
    discount: "Save ₹10",
    category: "Combos",
    type: "Non-Veg",
    portion: "500g Korma + 2 Roti",
    serves: "1–2 People",
    prepTime: "15–20 mins",
    image: "/images/chicken-korma-roti-meal.jpg?v=2",
    seoAlt: "Chicken Korma and Roti Meal (500g Korma + 2 Roti) - Value Meal Delivery Taloja | Bread & Bite",
    isBestSeller: true,
    isNew: false,
    tags: ["500g Korma + 2 Roti"],
    pairings: ["tandoori-roti", "choco-lava-cake"],
    keywords: "chicken korma roti meal navi mumbai, chicken korma combo taloja, korma roti delivery kharghar, mughlai meal kamothe",
    faqs: [
      {
        question: "Can I add extra Tandoori Rotis to the Chicken Korma & Roti Meal?",
        answer: "Yes, you can add extra Tandoori Rotis at ₹30 each or 4 Ladi Pavs at ₹30 from the menu or cart add-ons."
      }
    ]
  },
  {
    id: 11,
    slug: "burger-fries-combo",
    name: "Burger & Fries Combo",
    shortName: "Burger & Fries Combo",
    description: "1 Crispy Chicken Burger served with hot salted French fries (200g).",
    longDescription: "One crunchy spiced Crispy Chicken Burger paired with a full 200g serving of golden salted French Fries and ketchup. Value combo at ₹229 (Save ₹19) — great for solo lunches, evening snacks, or office cravings.",
    price: 229,
    originalPrice: 248,
    discount: "Save ₹19",
    category: "Combos",
    type: "Non-Veg",
    portion: "Burger + 200g Fries",
    serves: "1 Person",
    prepTime: "12–15 mins",
    image: "/images/burger-fries-combo.jpg",
    seoAlt: "Crispy Chicken Burger and 200g Fries Combo - Value Fast Food Delivery Navi Mumbai | Bread & Bite",
    isBestSeller: false,
    isNew: false,
    tags: ["Burger + 200g Fries"],
    pairings: ["choco-lava-cake", "plain-maggi"],
    keywords: "burger fries combo taloja, chicken burger combo kharghar, fast food delivery navi mumbai",
    faqs: [
      {
        question: "How much do I save on the Burger & Fries Combo?",
        answer: "You save ₹19 compared to ordering the Crispy Chicken Burger (₹149) and 200g French Fries (₹99) separately."
      }
    ]
  },

  // ==================== DESSERT ====================
  {
    id: 12,
    slug: "choco-lava-cake",
    name: "Warm Choco Lava Cake",
    shortName: "Warm Choco Lava Cake",
    description: "Decadent chocolate cake with a rich, molten gooey chocolate fudge centre. Served fresh and warm.",
    longDescription: "Freshly baked warm chocolate sponge cake hiding a rich, flowing molten dark chocolate fudge centre. Baked fresh on order and packed securely so it reaches your doorstep in Taloja, Kharghar, Kamothe, Kalamboli, Panvel, or CBD Belapur warm and gooey.",
    price: 89,
    category: "Dessert",
    type: "Veg",
    portion: "1 pc",
    serves: "1 Person",
    prepTime: "10–12 mins",
    image: "/images/choco-lava-cake.jpg",
    seoAlt: "Warm Choco Lava Cake with Molten Fudge Centre - Fresh Dessert Delivery Navi Mumbai | Bread & Bite",
    isBestSeller: true,
    isNew: true,
    tags: ["Molten Chocolate", "Warm & Gooey", "Veg"],
    pairings: ["keema-pav-meal", "burger-fries-combo"],
    keywords: "choco lava cake taloja, choco lava cake delivery kharghar, dessert delivery navi mumbai, warm chocolate cake panvel",
    faqs: [
      {
        question: "Is the Warm Choco Lava Cake eggless/vegetarian?",
        answer: "Yes, our Warm Choco Lava Cake is categorized as Veg and baked fresh in separate vegetarian bakeware."
      }
    ]
  }
];

export const CATEGORIES_DATA = [
  { id: "ALL", name: "All Dishes", image: "/images/chicken-keema.webp", description: "Complete Kitchen Menu" },
  { id: "Gravy", name: "Gravy (500g)", image: "/images/chicken-korma.webp", description: "500g Chicken Gravies" },
  { id: "Roti", name: "Roti & Pav", image: "/images/tandoori-roti.webp", description: "Tandoori Roti & Fresh Pav" },
  { id: "Snacks", name: "Snacks", image: "/images/french-fries.webp", description: "Fries & Hot Maggi" },
  { id: "Burgers", name: "Burgers", image: "/images/crispy-chicken-burger.jpg", description: "Crispy Chicken Burgers" },
  { id: "Dessert", name: "Dessert", image: "/images/choco-lava-cake.jpg", description: "Warm Cakes & Desserts" },
  { id: "Combos", name: "Combos", image: "/images/keema-pav-meal.jpg", description: "Meals & Combos" }
];

export function getMenuItemBySlug(slug) {
  return menuItems.find((item) => item.slug === slug) || null;
}

export default menuItems;
