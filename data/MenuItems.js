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
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: ["500g", "Boneless", "Halal"]
  },
  {
    id: 2,
    name: "Chicken Korma - 500gms",
    description: "500g tender chicken pieces slow-cooked in a thick, aromatic, mildly spiced korma gravy. Perfect with hot rotis.",
    price: 199,
    category: "Gravy",
    type: "Non-Veg",
    portion: "500gms",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: ["Comfort Food"]
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
    description: "Chicken Keema Boneless (500g) + 4 Soft Pavs. The ultimate hearty comfort food meal.",
    price: 219,
    originalPrice: 229,
    discount: "Save ₹10",
    category: "Combos",
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: true,
    tags: ["Bestseller Meal", "500g Keema + 4 Pav"]
  },
  {
    id: 10,
    name: "Chicken Korma & Roti Meal",
    description: "Chicken Korma (500g) + 2 Hot Tandoori Rotis. Complete filling meal for lunch or dinner.",
    price: 249,
    originalPrice: 259,
    discount: "Save ₹10",
    category: "Combos",
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: ["500g Korma + 2 Roti"]
  },
  {
    id: 11,
    name: "Burger & Fries Combo",
    description: "1 Crispy Chicken Burger + 1 French Fries (200g). Quick and satisfying meal deal.",
    price: 229,
    originalPrice: 248,
    discount: "Save ₹19",
    category: "Combos",
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: ["Burger + 200g Fries"]
  }
];

export const CATEGORIES_DATA = [
  { id: "Gravy", name: "Gravy (500g)", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=400&auto=format&fit=crop", description: "500g Chicken Gravies" },
  { id: "Roti", name: "Roti & Pav", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop", description: "Tandoori Roti & Fresh Pav" },
  { id: "Snacks", name: "Snacks", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=400&auto=format&fit=crop", description: "Fries & Hot Maggi" },
  { id: "Burgers", name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop", description: "Crispy Chicken Burgers" },
  { id: "Combos", name: "Combos", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=400&auto=format&fit=crop", description: "Meals & Combos" }
];

export const CATEGORIES = CATEGORIES_DATA.map(cat => cat.id);

export default menuItems;
