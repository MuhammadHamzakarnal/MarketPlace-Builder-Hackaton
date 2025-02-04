"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext"; // Importing useCart to access cart items
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const Checkout = () => {
  const { cartItems } = useCart(); // Using the useCart hook to access cart items

  return (
    <div className={ `${poppins.className} mt-[100px] min-h-screen bg-gray-50 flex items-center justify-center`}> {/* Centering the entire content */}
      <div className="w-full md:w-2/3 bg-white p-6 md:p-12 shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold mb-6">Order Summary</h1>

        {/* Display Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.imageUrl}
                    alt={item.productName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">{item.productName}</p>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-xl font-bold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between border-t pt-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold text-blue-600">
            ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </span>
        </div>

        {/* Shipping & Contact Form */}
        <form className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Enter Your Shipping Information</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Shipping Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Shipping Address</label>
            <textarea
              placeholder="Enter your shipping address"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">Contact Number</label>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button className="bg-gradient-to-r from-black to-purple-600 text-white py-3 px-6 rounded-md w-full mb-8 transition-all ease-in-out transform hover:scale-105 hover:from-purple-600 hover:to-black">
  Submit Shipping Information
</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
