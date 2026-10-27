const menuItems = [
  // ==================== GRAVY (500G PORTIONS) ====================
  {
    id: 1,
    name: "Chicken Keema Boneless - 500gms",
    description: "500g rich chicken keema cooked in whole spices, onions, and fresh coriander. 100% boneless, hot and flavorful.",
    price: 199,
    category: "Gravy",
    type: "Non-Veg",
    portion: "500gms",
    image: "/images/chicken-keema.webp",
    isBestSeller: true,
    isNew: false,
    tags: ["500g", "Boneless", "Halal"]
  },
  {
    id: 2,
    name: "Chicken Korma - 500gms",
    description: "500g chicken pieces slow-cooked in thick, tasty cashew and onion korma gravy. Perfect with hot rotis.",
    price: 199,
    category: "Gravy",
    type: "Non-Veg",
    portion: "500gms",
    image: "/images/chicken-korma.webp",
    isBestSeller: true,
    isNew: false,
    tags: ["500g", "Halal"]
  },
  {
    id: 3,
    name: "Random Chicken Gravy - 500gms",
    description: "500g chef's daily special chicken curry cooked homestyle with rich traditional spices and thick masala gravy.",
    price: 199,
    category: "Gravy",
    type: "Non-Veg",
    portion: "500gms",
    image: "/images/random-chicken-gravy.webp",
    isBestSeller: false,
    isNew: true,
    tags: ["500g", "Daily Special", "Halal"]
  },

  // ==================== ROTI & BREADS ====================
  {
    id: 4,
    name: "Tandoori Roti",
    description: "Hot, freshly baked whole wheat tandoori roti. Crispy on the outside and soft inside.",
    price: 30,
    category: "Roti",
    type: "Veg",
    image: "/images/tandoori-roti.webp",
    isBestSeller: true,
    isNew: false,
    tags: ["Fresh Baked"]
  },
  {
    id: 5,
    name: "Pav - 4 pieces",
    description: "Set of 4 soft, fresh golden ladi pavs. The classic pair with hot Chicken Keema.",
    price: 30,
    category: "Roti",
    type: "Veg",
    portion: "4 pcs",
    image: "/images/pav.webp",
    isBestSeller: true,
    isNew: false,
    tags: ["4 Pcs", "Soft & Fresh"]
  },

  // ==================== SNACKS ====================
  {
    id: 6,
    name: "French Fries (200g)",
    description: "200g crispy golden salted potato fries, fried fresh on order. Served with tomato ketchup.",
    price: 99,
    category: "Snacks",
    type: "Veg",
    portion: "200g",
    image: "/images/french-fries.webp",
    isBestSeller: true,
    isNew: false,
    tags: ["200g", "Crispy"]
  },
  {
    id: 7,
    name: "Plain Maggi",
    description: "Hot classic masala Maggi noodles cooked fresh with authentic tastemaker seasoning.",
    price: 99,
    category: "Snacks",
    type: "Veg",
    image: "/images/plain-maggi.webp",
    isBestSeller: false,
    isNew: false,
    tags: ["Hot & Fast"]
  },

  // ==================== BURGERS ====================
  {
    id: 8,
    name: "Crispy Chicken Burger",
    description: "Crispy spiced chicken patty with shredded lettuce, sliced onions, and creamy mayo in a toasted bun.",
    price: 149,
    category: "Burgers",
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Juicy"]
  },

  // ==================== VALUE MEALS & COMBOS ====================
  {
    id: 9,
    name: "Keema Pav Meal",
    description: "500g Chicken Keema Boneless served with 4 soft ladi pavs. Filling meal for 2 people.",
    price: 219,
    originalPrice: 229,
    discount: "Save ₹10",
    category: "Combos",
    type: "Non-Veg",
    image: "/images/keema-pav-meal.jpg",
    isBestSeller: true,
    isNew: true,
    tags: ["Bestseller Meal", "500g Keema + 4 Pav"]
  },
  {
    id: 10,
    name: "Chicken Korma & Roti Meal",
    description: "500g Chicken Korma served with 2 hot tandoori rotis. Complete lunch or dinner meal.",
    price: 249,
    originalPrice: 259,
    discount: "Save ₹10",
    category: "Combos",
    type: "Non-Veg",
    image: "/images/chicken-korma-roti-meal.jpg?v=2",
    isBestSeller: true,
    isNew: false,
    tags: ["500g Korma + 2 Roti"]
  },
  {
    id: 11,
    name: "Burger & Fries Combo",
    description: "1 Crispy Chicken Burger served with hot salted French fries (200g).",
    price: 229,
    originalPrice: 248,
    discount: "Save ₹19",
    category: "Combos",
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: ["Burger + 200g Fries"]
  },

  // ==================== DESSERT ====================
  {
    id: 12,
    name: "Warm Choco Lava Cake",
    description: "Decadent chocolate cake with a rich, molten gooey chocolate fudge centre. Served fresh and warm.",
    price: 99,
    category: "Dessert",
    type: "Veg",
    portion: "1 pc",
    image: "/images/choco-lava-cake.jpg",
    isBestSeller: true,
    isNew: true,
    tags: ["Molten Chocolate", "Warm & Gooey", "Veg"]
  }
];

export const CATEGORIES_DATA = [
  { id: "Gravy", name: "Gravy (500g)", image: "/images/chicken-korma.webp", description: "500g Chicken Gravies" },
  { id: "Roti", name: "Roti & Pav", image: "/images/tandoori-roti.webp", description: "Tandoori Roti & Fresh Pav" },
  { id: "Snacks", name: "Snacks", image: "/images/french-fries.webp", description: "Fries & Hot Maggi" },
  { id: "Burgers", name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop", description: "Crispy Chicken Burgers" },
  { id: "Dessert", name: "Dessert", image: "/images/choco-lava-cake.jpg", description: "Warm Cakes & Desserts" },
  { id: "Combos", name: "Combos", image: "/images/keema-pav-meal.jpg", description: "Meals & Combos" }
];

export const CATEGORIES = CATEGORIES_DATA.map(cat => cat.id);

export default menuItems;
