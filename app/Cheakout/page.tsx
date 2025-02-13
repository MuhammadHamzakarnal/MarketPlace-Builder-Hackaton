"use client"
import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { Poppins } from "next/font/google";
import { client } from "@/sanity/lib/client";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Checkout = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create order data according to schema
    const orderData = {
      _type: "order",
      customerName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      totalAmount: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: "Pending",
      products: cartItems.map((item) => ({
        name: item.productName,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    try {
      // Send order data to Sanity
      await client.create(orderData);
      alert("Order placed successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", address: "", city: "", zipCode: "" });
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${poppins.className} mt-[100px] min-h-screen bg-gray-50 flex items-center justify-center`}>
      <div className="w-full md:w-2/3 bg-white p-6 md:p-12 shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold mb-6">Order Summary</h1>

        {/* Display Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20">
                  {/* Ensure you are using next/image properly */}
                  <Image 
                    src={item.imageUrl} 
                    alt={item.productName} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-md"
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

        {/* Total Price */}
        <div className="flex justify-between border-t pt-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold text-blue-600">
            ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </span>
        </div>

        {/* Shipping Form */}
        <form className="mt-8" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Enter Your Shipping Information</h2>

          {["firstName", "lastName", "email", "phone", "address", "city", "zipCode"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-gradient-to-r from-black to-purple-600 text-white py-3 px-6 rounded-md w-full mb-8 transition-all ease-in-out transform hover:scale-105 hover:from-purple-600 hover:to-black ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "Submit Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
