"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Product, useCart } from "@/app/context/CartContext";

const ProductDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      client
        .fetch(
          `*[_type == "product" && _id == $id][0] {
            _id, productName, price, description, "imageUrl": image.asset->url,
            colors, quantity, category, brand, ratings, reviews
          }`,
          { id }
        )
        .then((data) => {
          setProduct(data);
          setLoading(false);
        });
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    } else {
      console.log("Product is not loaded yet.");
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 animate-pulse space-y-4">
        <div className="h-[400px] bg-gray-200 rounded-xl shadow-lg"></div>
        <div className="h-6 bg-gray-300 w-2/3 mt-4 rounded-full"></div>
        <div className="h-4 bg-gray-300 w-1/3 mt-2 rounded-full"></div>
        <div className="h-16 bg-gray-300 w-full mt-6 rounded-xl"></div>
      </div>
    );
  }

  return (
    <div className="mt-32 max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-xl space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Product Image with hover zoom effect */}
        <div className="w-full md:w-1/2 flex justify-center overflow-hidden border-2 border-gray-200 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
          <Image
            src={product?.imageUrl || "/placeholder.jpg"}
            alt={product?.productName || "Product Image"}
            width={500}
            height={500}
            className="object-cover rounded-lg transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{product?.productName}</h1>
          <p className="text-2xl text-blue-600 font-semibold mt-3">${product?.price}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{product?.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-black to-purple-600 text-white font-semibold text-lg rounded-lg shadow-md transform transition-all hover:from-blue-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:scale-105 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
