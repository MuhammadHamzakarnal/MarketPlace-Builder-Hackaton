"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();
  const [notification, setNotification] = useState<{
    message: string;
    type: string;
  } | null>(null);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleQuantityChange = (
    itemId: string | number,
    newQuantity: number
  ) => {
    if (newQuantity < 1) return;
    updateQuantity(String(itemId), newQuantity);
    setNotification({ message: "Quantity updated", type: "info" });
  };

  const handleRemoveItem = (itemId: string | number) => {
    removeFromCart(String(itemId));
    setNotification({ message: "Item removed", type: "error" });
  };

  return (
    <div className={`${poppins.className} mt-28 min-h-screen bg-gradient-to-b from-gray-50 to-white py-8}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {notification && (
          <div
            className={`fixed top-4 right-4 p-4 rounded-lg shadow-xl text-white animate-slide-in ${
              notification.type === "error" ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {notification.message}
          </div>
        )}

        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 space-y-6">
            <FiShoppingBag className="mx-auto text-gray-300 h-24 w-24" />
            <p className="text-2xl text-gray-500 font-medium">
              Your cart feels lonely...
            </p>
            <Link href="Product">
            <button
              className="bg-gradient-to-r from-black to-purple-600  text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-transform hover:scale-105"
              
            >
              Continue Shopping
            </button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="relative w-32 h-32 overflow-hidden rounded-lg">
                      <Image
                        src={item.imageUrl}
                        alt={item.productName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.productName}
                      </h2>
                      <p className="text-lg font-bold text-blue-600 mb-4">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity - 1)
                            }
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <FiMinus className="w-5 h-5 text-gray-600" />
                          </button>
                          <span className="text-lg font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <FiPlus className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(item._id)}
                          className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                        >
                          <FiTrash2 className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 h-fit shadow-md sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Order Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal (
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                    items)
                  </span>
                  <span className="font-medium">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-lg font-bold text-blue-600">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
              <Link href="Cheakout">
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95">
                  Checkout Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
