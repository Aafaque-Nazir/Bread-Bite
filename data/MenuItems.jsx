const menuItems = [
  // ==================== PIZZA ====================
  {
    id: 101,
    name: "Classic Margherita",
    description: "Hand-stretched dough topped with San Marzano sauce, fresh mozzarella, and aromatic basil leaves.",
    price: 169,
    category: "Pizza",
    type: "Veg",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: []
  },
  {
    id: 102,
    name: "Tandoori Chicken Pizza",
    description: "(Halal) Smoky tandoori chicken, bell peppers, onions, and double mozzarella on a crispy crust.",
    price: 219,
    originalPrice: 249,
    discount: "12% OFF",
    category: "Pizza",
    type: "Non-Veg",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Spicy"]
  },
  {
    id: 103,
    name: "Paneer Tikka Pizza",
    description: "Marinated paneer tikka chunks with capsicum, onion, and a drizzle of mint chutney on cheesy base.",
    price: 209,
    category: "Pizza",
    type: "Veg",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 104,
    name: "BBQ Chicken Pizza",
    description: "(Halal) Smoky BBQ sauce, grilled chicken strips, caramelized onions, and jalapeños with extra cheese.",
    price: 229,
    category: "Pizza",
    type: "Non-Veg",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ce?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: true,
    tags: ["Halal"]
  },

  // ==================== SANDWICH ====================
  {
    id: 201,
    name: "Tandoori Chicken Grilled",
    description: "(Halal) Rich tandoori-flavoured shredded chicken with melted cheese, capsicum, and signature spices.",
    price: 170,
    originalPrice: 179,
    discount: "5% OFF",
    category: "Sandwich",
    type: "Non-Veg",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal", "Spicy"]
  },
  {
    id: 202,
    name: "Classic Veg Grilled",
    description: "Fresh veggies — capsicum, tomato, cabbage, beetroot — tossed in creamy mayo and toasted golden.",
    price: 129,
    category: "Sandwich",
    type: "Veg",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 203,
    name: "Egg & Cheese Grilled",
    description: "Two-layer egg omelette with creamy cheese, onion, tomato, capsicum, and cracked pepper seasoning.",
    price: 119,
    category: "Sandwich",
    type: "Egg",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: []
  },
  {
    id: 204,
    name: "Paneer Tikka Grilled",
    description: "Spiced paneer tikka with onion, capsicum, mint chutney, and melted cheese on toasted bread.",
    price: 149,
    category: "Sandwich",
    type: "Veg",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: true,
    tags: []
  },

  // ==================== PASTA ====================
  {
    id: 301,
    name: "Creamy Chicken Pasta",
    description: "(Halal) Al dente penne in a rich, creamy white sauce with tender chicken strips and Italian herbs.",
    price: 219,
    category: "Pasta",
    type: "Non-Veg",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: ["Halal"]
  },
  {
    id: 302,
    name: "Penne Arrabbiata",
    description: "Classic Italian penne in a fiery tomato-garlic sauce with chilli flakes, basil, and parmesan.",
    price: 189,
    category: "Pasta",
    type: "Veg",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: ["Spicy"]
  },
  {
    id: 303,
    name: "Classic White Sauce Pasta",
    description: "Silky béchamel with mushrooms, corn, and herbs tossed with perfectly cooked fusilli.",
    price: 199,
    category: "Pasta",
    type: "Veg",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 304,
    name: "Alfredo Chicken Pasta",
    description: "(Halal) Rich and creamy Alfredo sauce with grilled chicken, garlic bread crumbs, and fresh parsley.",
    price: 239,
    originalPrice: 269,
    discount: "11% OFF",
    category: "Pasta",
    type: "Non-Veg",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: true,
    tags: ["Halal"]
  },

  // ==================== DRINKS ====================
  {
    id: 401,
    name: "Classic Cold Coffee",
    description: "Chilled espresso blended with milk, ice, and a touch of vanilla — smooth and refreshing.",
    price: 99,
    category: "Drinks",
    type: "Veg",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    isBestSeller: true,
    isNew: false,
    tags: []
  },
  {
    id: 402,
    name: "Mango Shake",
    description: "Thick, creamy Alphonso mango shake made with real pulp and chilled milk. A seasonal favourite.",
    price: 109,
    category: "Drinks",
    type: "Veg",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 403,
    name: "Oreo Shake",
    description: "Crushed Oreo cookies blended with vanilla ice cream and milk — the ultimate indulgence.",
    price: 119,
    category: "Drinks",
    type: "Veg",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: []
  },
  {
    id: 404,
    name: "Fresh Lime Soda",
    description: "Freshly squeezed lime with soda, a pinch of salt, and mint — sweet or salted, your choice.",
    price: 59,
    category: "Drinks",
    type: "Veg",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    isBestSeller: false,
    isNew: false,
    tags: []
  }
];

export const CATEGORIES_DATA = [
  { id: "Pizza", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&h=300&auto=format&fit=crop", description: "Artisan Pizzas" },
  { id: "Sandwich", name: "Sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=300&h=300&auto=format&fit=crop", description: "Grilled Sandwiches" },
  { id: "Pasta", name: "Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=300&h=300&auto=format&fit=crop", description: "Creamy Pastas" },
  { id: "Drinks", name: "Drinks", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=300&h=300&auto=format&fit=crop", description: "Cool Beverages" }
];

export const CATEGORIES = CATEGORIES_DATA.map(cat => cat.id);

export default menuItems;
