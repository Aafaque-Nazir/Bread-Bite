const menuItems = [
  // ==================== SANDWICHES ====================
  {
    id: 1,
    name: "Tandoori Chicken Cheese Grilled Sandwich",
    description: "(Halal) A rich blend of tandoori flavoured shredded chicken, cheese, and capsicum.",
    price: 170.05,
    originalPrice: 179,
    discount: "5% OFF",
    category: "Sandwiches",
    type: "Non-Veg",
    rating: 4.9,
    image: "tandoori.jpg",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Spicy"]
  },
  {
    id: 2,
    name: "Chicken Cheese Grilled Sandwich",
    description: "[Halal] Freshly toasted bread filled with shredded chicken, melted cheese, tomato, capsicum.",
    price: 149,
    category: "Sandwiches",
    type: "Non-Veg",
    rating: 4.8,
    image: "chickencheese.jpg",
    isBestSeller: false,
    isNew: false,
    tags: ["Halal"]
  },
  {
    id: 3,
    name: "Mayo Veggie Cheese Grilled Sandwich",
    description: "Loaded with fresh chopped veggies like capsicum, tomato and cabbage, beetroot and tossed in creamy mayo.",
    price: 129,
    category: "Sandwiches",
    type: "Veg",
    rating: 4.7,
    image: "mayoveggie.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 4,
    name: "Double Egg Cheese Grilled Sandwich",
    description: "Two layered egg omelette with creamy cheese, onion, tomato, capsicum, and pepper.",
    price: 119,
    category: "Sandwiches",
    type: "Egg",
    rating: 4.8,
    image: "Egg.jpg",
    isBestSeller: true,
    isNew: false,
    tags: []
  },

  // ==================== PIZZA ====================
  {
    id: 101,
    name: "Double Topping Tandoori Pizza [7.5 inches]",
    description: "[Halal] Loaded with melted cheese with tandoori chicken pieces and veggies.",
    price: 197.10,
    originalPrice: 219,
    discount: "10% OFF",
    category: "Pizza",
    type: "Non-Veg",
    rating: 4.9,
    image: "tandooripizza.jpg",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Spicy"]
  },
  {
    id: 102,
    name: "Tandoori Pizza [7.5 inches]",
    description: "[Halal] Tandoori cheese pizza with seasoning.",
    price: 199,
    category: "Pizza",
    type: "Non-Veg",
    rating: 4.8,
    image: "tandooripizzaplain.jpg",
    isBestSeller: false,
    isNew: false,
    tags: ["Halal"]
  },
  {
    id: 103,
    name: "Margherita Pizza [7.5 inches]",
    description: "Yummy cheesy margherita pizza with some seasoning.",
    price: 169,
    category: "Pizza",
    type: "Veg",
    rating: 4.7,
    image: "margherita.jpg",
    isBestSeller: true,
    isNew: false,
    tags: []
  },
  {
    id: 104,
    name: "Onion Pizza [7.5 inches]",
    description: "A classic delight topped with layers of flavorful, sauteed onions and melted cheese.",
    price: 179,
    category: "Pizza",
    type: "Veg",
    rating: 4.6,
    image: "onionpizza.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 105,
    name: "Sweet Corn Pizza [7.5 inches]",
    description: "A cheesy treat loaded with juicy sweet corn for a burst of natural sweetness in every bite.",
    price: 179,
    category: "Pizza",
    type: "Veg",
    rating: 4.7,
    image: "sweetcorn.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 106,
    name: "Onion Capsicum Pizza [7.5 inches]",
    description: "Cheesy Mozzarella topped with onion and capsicum.",
    price: 179,
    category: "Pizza",
    type: "Veg",
    rating: 4.6,
    image: "onioncapsicum.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 107,
    name: "Double Topped Paneer Tikka Pizza [7.5 inches]",
    description: "Rich paneer tikka topping with double cheese.",
    price: 215.10,
    originalPrice: 239,
    discount: "10% OFF",
    category: "Pizza",
    type: "Veg",
    rating: 4.9,
    image: "paneertikka.jpg",
    isBestSeller: true,
    isNew: false,
    tags: []
  },

  // ==================== SNACKS ====================
  {
    id: 301,
    name: "French Fries [200g]",
    description: "Classic salted French fries.",
    price: 99,
    category: "Snacks",
    type: "Veg",
    rating: 4.5,
    image: "frenchfries.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 302,
    name: "Plain Maggi",
    description: "Classical plain maggi for maggie lovers.",
    price: 99,
    category: "Snacks",
    type: "Veg",
    rating: 4.6,
    image: "maggi.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },

  // ==================== CONTINENTALS ====================
  {
    id: 401,
    name: "Chicken Pasta",
    description: "[Halal] Creamy Chicken pasta. Enjoy your continental craving.",
    price: 219,
    category: "Continentals",
    type: "Non-Veg",
    rating: 4.8,
    image: "alfredo.jpg",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal"]
  },
  {
    id: 402,
    name: "Veg Pasta",
    description: "Pasta. Enjoy your continental craving.",
    price: 199,
    category: "Continentals",
    type: "Veg",
    rating: 4.7,
    image: "whitepasta.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 403,
    name: "Chicken Macaroni",
    description: "[Halal] Macaroni with shredded chicken.",
    price: 197.10,
    originalPrice: 219,
    discount: "10% OFF",
    category: "Continentals",
    type: "Non-Veg",
    rating: 4.9,
    image: "macaroni.jpg",
    isBestSeller: false,
    isNew: false,
    tags: ["Halal"]
  },

  // ==================== STREET STYLE ====================
  {
    id: 501,
    name: "Ragada Pav",
    description: "Tasty ragda pav street style.",
    price: 129,
    category: "Street Style",
    type: "Veg",
    rating: 4.6,
    image: "ragadapav.jpg",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 502,
    name: "Tawa Chicken",
    description: "[Halal] Mouthwatering tasty tawa chicken street style.",
    price: 211.65,
    originalPrice: 249,
    discount: "15% OFF",
    category: "Street Style",
    type: "Non-Veg",
    rating: 4.9,
    image: "tawachicken.jpg",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Spicy"]
  }
];

export const CATEGORIES_DATA = [
  { id: "All", name: "All", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=300&h=300&auto=format&fit=crop", description: "All Items" },
  { id: "Sandwiches", name: "Sandwiches", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=300&h=300&auto=format&fit=crop", description: "Grilled Sandwiches" },
  { id: "Pizza", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&h=300&auto=format&fit=crop", description: "Cheese Pizza" },
  { id: "Snacks", name: "Snacks", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=300&h=300&auto=format&fit=crop", description: "Quick Bites" },
  { id: "Continentals", name: "Continentals", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=300&h=300&auto=format&fit=crop", description: "Continental" },
  { id: "Street Style", name: "Street Style", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=300&h=300&auto=format&fit=crop", description: "Street Food" }
];

export const CATEGORIES = CATEGORIES_DATA.map(cat => cat.id);

export default menuItems;
