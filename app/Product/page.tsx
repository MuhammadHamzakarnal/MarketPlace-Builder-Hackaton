"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart, Product } from "../context/CartContext";
import { SlArrowDown } from "react-icons/sl";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const getData = async (): Promise<Product[]> => {
  return client.fetch(`*[_type == "product"] {
    _id, productName, price, description, "imageUrl": image.asset->url, colors
  }`);
};

const ProductPage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    getData().then(setProducts);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setMessage(`${product.productName} has been added to your cart!`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className={`${poppins.className}  mt-32 max-w-7xl mx-auto p-4`}>
      <h1 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
        Explore Our Products
      </h1>

      {/* Animated Notification */}
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        message ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
      }`}>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full shadow-xl flex items-center space-x-3 relative overflow-hidden">
          <span>{message}</span>
          <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
            <div 
              className="h-full bg-white/50 transition-all duration-3000" 
              style={{ width: message ? '0%' : '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="w-full mt-4 flex items-center justify-between px-4 border-b border-gray-200 pb-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
        >
          {isSidebarOpen ? 'Close Filters' : 'Open Filters'}
        </button>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
              Hide Filters
            </span>
          </div>
          <div className="flex items-center space-x-2 group cursor-pointer">
            <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
              Sort By
            </span>
            <SlArrowDown className="text-gray-500 group-hover:text-blue-600 transition-transform group-hover:-rotate-180" />
          </div>
        </div>
      </div>

      {/* Layout with Sidebar */}
      <div className="w-full flex flex-col md:flex-row md:mt-10">
        {/* Collapsible Sidebar */}
        <div className={`w-full md:w-[260px] h-auto px-4 md:ml-12 transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden md:block'
        }`}>
          <ul className="space-y-6 text-[15px] font-medium">
            {["Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts", "Jackets", "Trousers & Tights", "Shorts", "Tracksuits", "Jumpsuits & Rompers", "Skirts & Dresses", "Socks", "Accessories & Equipment"].map((item, index) => (
              <li 
                key={index}
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors before:content-[''] before:w-2 before:h-2 before:bg-blue-600 before:rounded-full before:mr-3 before:opacity-0 hover:before:opacity-100 before:transition-opacity flex items-center"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-[calc(100%-260px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
             
              <div 

                key={product._id} 
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden"
              >
                 <Link key={product._id} href={`/Product/${product._id}`} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                </div>
                </Link>
                <h2 className="text-xl font-semibold mt-4 text-gray-800 line-clamp-2">
                  {product.productName}
                </h2>
                
                <p className="text-lg font-bold text-blue-600 mt-2">
                  ${product.price}
                </p>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 bg-gradient-to-r from-black to-purple-600 text-white py-3 rounded-lg hover:from-black hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
               
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;