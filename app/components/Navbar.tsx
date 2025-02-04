"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuSearch, LuHeart } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className={`${poppins.className}fixed top-0 left-0 w-full z-50 bg-[#F5F5F5] h-[36px] flex items-center justify-between px-4 sm:px-12`}>
        <div className="flex-shrink-0">
          <Image src="/Images/NavbarImg/Frame.svg" alt="menu logo" width={24} height={24} />
        </div>
        <ul className="flex items-center justify-center space-x-4 md:text-[11px] text-[14px]">
          <Link href="Product"> <li>Find a Store</li> </Link>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <Link href="/Contact"><li>Help</li></Link>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <Link href="/Joinus"><li>Join Us</li></Link>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <Link href="/Login"><li>LogIn</li></Link>
        </ul>
      </div>

      {/* Main Navbar */}
      <div className="fixed top-[36px] left-0 w-full z-50 bg-white h-[60px] flex items-center sm:px-12 shadow-md">
        <Image src="/Images/NavbarImg/logo.svg" alt="nike" width={78} height={78} />
        <ul className="hidden sm:flex flex-1 justify-center items-center space-x-6 text-[15px] font-medium">
          <Link href="#"><li>New & Featured</li></Link>
          <Link href="#"><li>Men</li></Link>
          <Link href="/Product"><li>Women</li></Link>
          <Link href="#"><li>Kids</li></Link>
          <Link href="#"><li>Sale</li></Link>
          <Link href="#"><li>SNKRS</li></Link>
        </ul>

        {/* Icons */}
        <div className="max-md:hidden flex items-center space-x-4 ml-auto">
          <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-full px-4 py-2">
            <LuSearch className="text-[20px]" />
            <input type="text" placeholder="Search" className="ml-2 text-[15px] bg-transparent placeholder-[#CCCCCC] outline-none" />
          </div>
          <LuHeart className="text-[30px]" />

          {/* Cart Icon */}
          <Link href="/Cart" className="relative">
            <RiShoppingCart2Line className="text-[30px] sm:m-0 md:m-4 bg-white cursor-pointer hover:text-black transition-all duration-200" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="flex items-center space-x-4 ml-auto relative">
          <button onClick={toggleMenu} className="text-black focus:outline-none ml-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg w-48 p-4">
              <ul className="flex flex-col space-y-2">
                <li><Link href="/" onClick={closeMenu} className="text-gray-700 hover:text-black">Home</Link></li>
                <li><Link href="/About" onClick={closeMenu} className="text-gray-700 hover:text-black">About</Link></li>
                <li><Link href="/Product" onClick={closeMenu} className="text-gray-700 hover:text-black">Products</Link></li>
                <li><Link href="/Contact" onClick={closeMenu} className="text-gray-700 hover:text-black">Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
