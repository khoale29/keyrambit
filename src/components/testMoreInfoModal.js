"use-client";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "./Collections";
import Image from "next/image";
import { useState } from "react";
import Sda from "./testmoreinforfooter";

export default function MoreInfoModal({ isOpen, onClose, index }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Modal nội dung chính */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-0  h-[91%] z-50 w-full bg-white/50 backdrop-blur-[32px] text-black dark:text-white rounded-t-3xl p-6 shadow-lg"
          >
            {/* Nút đóng */}
            <div className="flex items-center justify-between py-10px ">
              <div className="text-black">
                <h2 className="">Bộ sưu tập</h2>
                <p>{products[index].name}</p>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-[50px] h-[50px] flex items-center justify-center rounded-[50px] bg-[rgba(101,101,101,0.3)] text-white text-2xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Nội dung */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full max-w-6xl mx-auto px-4 py-6 ">
              {/* Image bên trái */}
              <div className="flex-shrink-0 w-[140px] h-[180px] rounded-xl overflow-hidden">
                <Image
                  src={products[index].image}
                  alt={products[index].name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Nội dung bên phải */}
              <div className="flex flex-col gap-5 text-sm md:text-base text-black dark:text-white">
                {/* TỔNG QUAN */}
                <div className="text-black">
                  <h3 className="text-lg font-bold mb-1">TỔNG QUAN</h3>
                  <p className="leading-relaxed">
                    {products[index].description}
                  </p>
                </div>

                {/* THƯƠNG HIỆU */}
                <div className="text-black">
                  <h3 className="font-bold uppercase text-xs mb-1 opacity-60">
                    THƯƠNG HIỆU
                  </h3>
                  <p className="text-sm">{products[index].thuonghieu}</p>
                </div>

                {/* MẪU GỒM */}
                <div className="text-black">
                  <h3 className="font-bold uppercase text-xs mb-1 opacity-60">
                    MẪU GỒM
                  </h3>
                  <ul className="list-disc list-inside text-sm">
                    {products[index].maugom.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* CHẤT LIỆU */}
                <div className="text-black">
                  <h3 className="font-bold uppercase text-xs mb-1 opacity-60">
                    CHẤT LIỆU
                  </h3>
                  <p className="text-sm">
                    {products[index].chatlieu.join(" | ")}
                  </p>
                </div>
              </div>
            </div>
            <Sda />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
