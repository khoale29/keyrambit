"use client";

import { motion, AnimatePresence } from "framer-motion";
import { products } from "./Collections";
import Image from "next/image";
import Sda from "./Sda";
import { useEffect, useState } from "react";

export default function MoreInfoModal({ isOpen, onClose, index }) {

  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);




  const product = products[index];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-x-0 bottom-0 z-50 flex h-auto max-h-[95vh] flex-col rounded-t-3xl border-t border-white/20 bg-white/50 text-gray-900 shadow-2xl backdrop-blur-2xl dark:bg-black/50 dark:text-white"
        >

          <div
            className="absolute inset-0 blur-md opacity-40" // Adjust blur and opacity as needed
            style={{ backgroundColor: product.bgcolor }}
          />
          
          {/* Scrollable content area */}
          <div className="flex-grow overflow-y-auto">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/10 blur-3xl" />

            {/* Content wrapper */}
            <div className="relative z-10 mx-auto max-w-6xl text-left">
              
              {/* --- Header Section --- */}
              <div className="flex items-start justify-between p-6 pt-22 md:px-12">
                <div>
                  <h2 className="font-lavishly text-5xl text-gray-800 dark:text-gray-200 md:text-6xl">
                    Bộ sưu tập
                  </h2>
                  <p className="mt-1 text-xl font-bold text-gray-700 dark:text-gray-300 md:text-2xl">
                    {product.name}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black/5 text-xl text-gray-600 transition-colors hover:bg-black/10 dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white/20"
                >
                  ✕
                </button>
              </div>

              {/* TOP SECTION: Image next to Overview */}
              <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3 md:gap-6 md:px-12 items-start">
  {/* Left Column: Product Image */}
                <div className="md:col-span-1">
                  <div className="mx-auto md:mx-8 w-full max-w-[200px] overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Right Column: TỔNG QUAN */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    TỔNG QUAN
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* BOTTOM SECTION: Details stacked vertically */}
               <div className="grid grid-cols-1 gap-8 p-6 pt-4 md:grid-cols-3 md:gap-12 md:px-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Thương hiệu
                  </h3>
                  <p className="text-base text-gray-800 dark:text-gray-200">
                    KEYRAMBITVN
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Mẫu gồm
                  </h3>
                  <ul className="list-inside list-disc space-y-1 text-base text-gray-800 dark:text-gray-200">
                    {product.maugom.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Chất liệu
                  </h3>
                  <p className="text-base text-gray-800 dark:text-gray-200">
                    {product.chatlieu.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Sticky footer component */}
          <Sda />
        </motion.div>
      )}
    </AnimatePresence>
  );
}