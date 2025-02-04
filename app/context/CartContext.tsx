"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Product = {
  _id: string | number;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  colors: string[];
  quantity: number;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevCart) =>
      prevCart.some((item) => item._id === product._id)
        ? prevCart.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item))
        : [...prevCart, { ...product, quantity: 1 }]
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => String(item._id) !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) => (String(item._id) === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
