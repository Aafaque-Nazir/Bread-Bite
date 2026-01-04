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
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1539252554452-da37612c37bc?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1600454021970-351feb4a1743?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1593504049359-7b797444ad97?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc3a2?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Spicy"]
  }
];

export const CATEGORIES_DATA = [
  { id: "Sandwiches", name: "Sandwiches", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=300&h=300&auto=format&fit=crop", description: "Grilled Sandwiches" },
  { id: "Pizza", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&h=300&auto=format&fit=crop", description: "Cheese Pizza" },
  { id: "Snacks", name: "Snacks", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=300&h=300&auto=format&fit=crop", description: "Quick Bites" },
  { id: "Continentals", name: "Continentals", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=300&h=300&auto=format&fit=crop", description: "Continental" },
  { id: "Street Style", name: "Street Style", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=300&h=300&auto=format&fit=crop", description: "Street Food" }
];

export const CATEGORIES = CATEGORIES_DATA.map(cat => cat.id);

export default menuItems;
