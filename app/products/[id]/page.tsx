// // pages/products/[id]/page.tsx
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { Poppins } from "next/font/google";
// const poppins = Poppins({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

// type Product = {
//   _id: string;
//   productName: string;
//   price: number;
//   category: string;
//   inventory: number;
//   colors: string[];
//   status: string;
//   description: string;
//   imageUrl: string;
// };

// const getData = async (id: string): Promise<Product | null> => {
//   const fetchData = await client.fetch(
//     `*[_type == "product" && _id == $id][0] {
//       _id, productName, price, category, inventory, colors, status, description,
//       "imageUrl": image.asset->url
//     }`,
//     { id }
//   );
//   return fetchData;
// };

// const ProductPage = async ({ params }: { params: { id: string } }) => {
//   const productData: Product | null = await getData(params.id);

//   if (!productData) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className={`${poppins.className} min-h-screen px-4 sm:px-8 lg:px-16 mt-20`}>
//       <div className="flex flex-col md:flex-row mt-8">
//         {/* Product Image */}
//         <div className="md:w-[50%] w-full flex justify-center items-center">
//           <Image
//             src={productData.imageUrl}
//             alt={productData.productName}
//             width={400} // Reduced size
//             height={400} // Adjusted height
//             className="max-w-xs h-auto object-contain rounded-lg border-4 border-indigo-500 shadow-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="md:w-[50%] w-full mt-6 md:mt-0 md:ml-10">
//           <h1 className="text-3xl font-bold mb-4">{productData.productName}</h1>
//           <p className="text-lg font-semibold text-indigo-600 mb-2">${productData.price}</p>
//           <p className="text-md text-gray-700 mb-4">{productData.description}</p>
//           <div className="space-x-4 mb-4">
//             <span className="text-sm font-semibold">Category:</span>
//             <span className="text-gray-600">{productData.category}</span>
//           </div>
//           <div className="space-x-4 mb-4">
//             <span className="text-sm font-semibold">Inventory:</span>
//             <span className="text-gray-600">{productData.inventory} units</span>
//           </div>
//           <div className="space-x-4 mb-4">
//             <span className="text-sm font-semibold">Colors:</span>
//             <span className="text-gray-600">{productData.colors.join(", ")}</span>
//           </div>
//           <div className="space-x-4 mb-4">
//             <span className="text-sm font-semibold">Status:</span>
//             <span className="text-gray-600">{productData.status}</span>
//           </div>
//           <button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 mt-auto">
//                     Add to Cart
//                   </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




