"use client";
import { useState, useEffect } from "react";
import MoreInfoModal from "./MoreInfoModal";
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

export default function Home1() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="mt-4">
        More information
      </button>

      <MoreInfoModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
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
