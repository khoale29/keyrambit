// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Box1 from "@/assets/box_1.png";
// import Box2 from "@/assets/box_2.png";
// import Box3 from "@/assets/box_3.png";
// import Box4 from "@/assets/box_4.png";

// const products = [
//   {
//     id: 1,
//     name: "Thép Đàn Đồng",
//     image: Box1,
//     collection: "Collection",
//     material: "Material",
//     lorem: "Lorem Ipsum",
//   },
//   {
//     id: 2,
//     name: "Ebox",
//     image: Box2,
//     collection: "Collection",
//     material: "Material",
//     lorem: "Lorem Ipsum",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     image: Box3,
//     collection: "Collection",
//     material: "Material",
//     lorem: "Lorem Ipsum",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     image: Box4,
//     collection: "Collection",
//     material: "Material",
//     lorem: "Lorem Ipsum",
//   },
// ];

// export default function Home1() {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleSwipe = (direction) => {
//     setSelectedIndex((prevIndex) => {
//       if (direction === "left") {
//         return (prevIndex + 1) % products.length;
//       } else if (direction === "right") {
//         return (prevIndex - 1 + products.length) % products.length;
//       }
//       return prevIndex;
//     });
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowLeft") handleSwipe("right");
//       if (event.key === "ArrowRight") handleSwipe("left");
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   const selectedProduct = products[selectedIndex];
//   const surroundingProducts = [
//     products[(selectedIndex - 1 + products.length) % products.length],
//     products[(selectedIndex + 1) % products.length],
//     products[(selectedIndex + 2) % products.length],
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-500 p-4">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-red-600">KEYRAMBITVN</h1>
//         <p className="text-xl italic">Tên bộ sưu tập</p>
//         <h2 className="text-3xl font-semibold text-white">
//           {selectedProduct.name}
//         </h2>
//       </div>
//       <div className="relative w-full max-w-md mt-5">
//         <div className="flex justify-center">
//           <Image
//             src={selectedProduct.image}
//             alt={selectedProduct.name}
//             width={213}
//             height={290}
//             className="rounded-lg shadow-lg z-10"
//           />
//         </div>
//         {surroundingProducts.map((product, index) => (
//           <Image
//             key={product.id}
//             src={product.image}
//             alt={product.name}
//             width={164}
//             height={224}
//             className="absolute rounded-lg shadow-md opacity-70 transform -translate-y-1/2"
//             style={{
//               left: index === 0 ? "-18%" : index === 1 ? "80%" : "33%",
//               top: index === 0 ? "50%" : index === 1 ? "50%" : "10%",
//               filter: "blur(3px)", // Added blur effect
//             }}
//           />
//         ))}
//       </div>

//       <button
//         onClick={() => handleSwipe("left")}
//         className="mt-4 px-4 py-2 bg-gray-200 rounded-full text-gray-800"
//       >
//         MORE INFORMATION &gt;
//       </button>
//     </div>
//   );
// }
// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import Box1 from "@/assets/box_1.png";
// import Box2 from "@/assets/box_2.png";
// import Box3 from "@/assets/box_3.png";
// import Box4 from "@/assets/box_4.png";

// const images = [Box1, Box2, Box3, Box4];

// export default function SlideBox() {
//   const [index, setIndex] = useState(0);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const next = () => {
//     setIndex((prev) => (prev + 1) % images.length);
//   };

//   const prev = () => {
//     setIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     const deltaX = touchEndX.current - touchStartX.current;

//     if (Math.abs(deltaX) > 50) {
//       if (deltaX < 0) {
//         next(); // swipe left
//       } else {
//         prev(); // swipe right
//       }
//     }
//   };

//   const getPositionClass = (i) => {
//     const total = images.length;
//     const relative = (i - index + total) % total;

//     switch (relative) {
//       case 0:
//         return "top-0 left-1/2 -translate-x-1/2 z-20 scale-100 blur-0"; // center
//       case 1:
//         return "top-[-15px] right-[-170px] md:right-[-100px] z-10 scale-75 blur-xs"; // right
//       case 2:
//         return "top-[-95px] left-1/2 -translate-x-1/2 z-0 scale-75 blur-xs"; // behind
//       case 3:
//         return "top-[-15px] left-[-170px] md:left-[-100px] z-10 scale-75 blur-xs"; // left
//       default:
//         return "hidden";
//     }
//   };

//   return (
//     <>
//       <div className="w-full overflow-x-hidden flex justify-center ">
//         <div
//           className="relative w-[430px] h-[300px] mt-[85px] mb-[30px] touch-pan-x "
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           {images.map((img, i) => {
//             const pos = getPositionClass(i);
//             const isRight = pos.includes("right");
//             const isLeft = pos.includes("left");

//             return (
//               <Image
//                 key={i}
//                 src={img}
//                 alt={`box-${i}`}
//                 onClick={isRight ? next : isLeft ? prev : undefined}
//                 className={`absolute transition-all duration-500 ease-out cursor-pointer ${pos}`}
//               />
//             );
//           })}
//         </div>
//       </div>

//       <div className="flex justify-center gap-4">
//         <button
//           onClick={prev}
//           className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
//         >
//           Previous
//         </button>
//         <button
//           onClick={next}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// }
