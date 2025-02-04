"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`${poppins.className}bg-gray-50 min-h-screen flex flex-col`}>
      {/* Hero Section */}
      <div className="relative h-96 sm:h-[600px] bg-gradient-to-r from-black to-purple-600 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative text-4xl sm:text-5xl font-extrabold z-10">
          About Nike
        </h1>
        <p className="relative text-lg sm:text-xl mt-4 z-10">
          Discover the story behind the brand that changed the world of sports.
        </p>
      </div>

      {/* About Section */}
      <div className="py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Story Innovation Performance and Style
          </h2>
          <p className="text-lg text-gray-600">
            Nike is a global leader in sportswear driven by innovation and a
            passion for pushing the limits of athletic performance. We have been
            at the forefront of creating cutting-edge footwear apparel and
            accessories that help athletes achieve their goals and express their
            personal style. Whether you are running a marathon playing basketball,
            or just staying active Nike is here to fuel your passion.
          </p>

          <div className="flex justify-center mt-8">
            <div className="relative w-full max-w-lg h-80">
              <Image
                src="/Images/NavbarImg/f_sneakers Community on Fanart.jpeg" // Replace with your Nike image
                alt="Nike Logo"
                fill
                className={`object-contain ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
                onLoadingComplete={handleImageLoad}
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 mt-4">
            To bring inspiration and innovation to every athlete in the world.
            Nike is a brand that dedicated to creating products that help
            athletes of all kinds push their limits and perform at their best.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold text-gray-900">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Innovation</h4>
              <p className="text-gray-600">
                Continuously pushing the boundaries of technology to create
                better products for athletes.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Sustainability</h4>
              <p className="text-gray-600">
                Committed to reducing our carbon footprint and ensuring a
                sustainable future.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Empowerment</h4>
              <p className="text-gray-600">
                Empowering athletes to reach their full potential regardless of
                their background or abilities.
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default About;
