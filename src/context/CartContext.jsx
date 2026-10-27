import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { safeParseJSON, sanitizeCartItem } from '../utils/security';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('bread_and_bite_cart');
            const parsed = safeParseJSON(savedCart, [], Array.isArray);
            // Validate and sanitize every stored item
            const sanitized = parsed.map(sanitizeCartItem).filter(Boolean);
            return sanitized;
        } catch (error) {
            console.warn('Corrupted cart data reset:', error);
            try {
                localStorage.removeItem('bread_and_bite_cart');
            } catch {
                // ignore
            }
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('bread_and_bite_cart', JSON.stringify(cart));
        } catch (error) {
            console.warn('Unable to persist cart:', error);
        }
    }, [cart]);

    const addToCart = (rawItem) => {
        const item = sanitizeCartItem(rawItem);
        if (!item) {
            toast.error('Unable to add item');
            return;
        }

        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: Math.min(cartItem.quantity + 1, 99) }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
        toast.success(`${item.name} added to cart!`);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        if (!Number.isInteger(delta)) return;
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === id) {
                    const nextQty = item.quantity + delta;
                    return { ...item, quantity: Math.min(Math.max(nextQty, 0), 99) };
                }
                return item;
            }).filter((item) => item.quantity > 0);
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    const value = {
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        cartTotal,
        cartCount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

