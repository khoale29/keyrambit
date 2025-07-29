"use client";

import { products } from "@/components/Collections";

import { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Header } from "./Header";
import MoreInfoModal from "@/components/MoreInfoModal";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
const total = 4;
export const Hero = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        next(); // swipe left
      } else {
        prev(); // swipe right
      }
    }
  };

  const getPositionClass = (i) => {
    const relative = (i - index + total) % total;
    switch (relative) {
      case 0:
        return "center";
      case 1:
        return "right";
      case 2:
        return "back";
      case 3:
        return "left";
      default:
        return "hidden";
    }
  };

  return (
    <section
      className={`${products[index].bgcolor} transition-all duration-500 ease-out min-h-screen w-full`}
    >
      <Header />
      <div className={`container mx-auto pt-14px text-center `}>
        {/* <p className="font-lavishly text-[36px] text-center text-[#212121] leading-[1.0] tracking-normal tracking-tighter ">
          Bộ sưu tập
        </p> */}

        <AnimatePresence mode="wait">
          <motion.p
            key={products[index].name} // quan trọng để AnimatePresence hoạt động khi name thay đổi
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={`font-semibold text-[38px] sm:text-[66px] bg-clip-text text-transparent ${products[index].bgcolor} leading-[1.5]`}
            style={{
              letterSpacing: "-4.4px",
            }}
          >
            {products[index].name}
          </motion.p>
        </AnimatePresence>

        <div className="w-full overflow-x-hidden flex justify-center ">
          <div
            className="relative w-[300px] sm:w-[430px] h-[255px] mt-[70px] md:mt-[140px] lg:mt-[65px]  mb-[30px] "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {products.map((product, i) => {
              const pos = getPositionClass(i);

              const activateClick =
                pos === "left"
                  ? () => prev()
                  : pos === "right"
                  ? () => next()
                  : pos === "center"
                  ? () => setOpen(true)
                  : undefined;

              return (
                <Image
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  onClick={activateClick}
                  className={clsx(
                    "absolute transition-all duration-500 ease-out cursor-pointer",
                    {
                      "top-0 left-1/2 -translate-x-1/2 z-20 scale-100 blur-0":
                        pos === "center",
                      "top-[-15px] right-[-150px] md:right-[-100px] z-10 scale-75 blur-xs":
                        pos === "right",
                      "top-[-95px] left-1/2 -translate-x-1/2 z-0 scale-75 blur-xs":
                        pos === "back",
                      "top-[-15px] left-[-150px] md:left-[-100px] z-10 scale-75 blur-xs":
                        pos === "left",
                    }
                  )}
                />
              );
            })}
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-6 items-center text-center lg:flex-row md:justify-center lg:gap-0 mt-[20px] md:mt-[45px] lg:mt-[35px]">
          {/* Bộ sưu tập */}
          <div className="w-[300px] flex flex-col items-center">
            <p className="font-montserrat font-normal text-[12px] uppercase opacity-70">
              Bộ sưu tập
            </p>

            <div className="h-[24px] w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={products[index].bosuutap}
                  className="w-full text-center font-medium text-[16px] whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {products[index].bosuutap}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Vật liệu */}
          <div className="w-[300px] flex flex-col items-center">
            <p className="font-montserrat font-normal text-[12px] uppercase opacity-70">
              Vật liệu
            </p>

            <div className="h-[24px] w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={products[index].vatlieu}
                  className="w-full text-center font-medium text-[16px] whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {products[index].chatlieu.join(" | ")}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Sản xuất tại */}
          <div className="w-[300px] flex flex-col items-center">
            <p className="font-montserrat font-normal text-[12px] uppercase opacity-70">
              Sản xuất tại
            </p>
            <p className="font-montserrat font-medium text-[16px] text-center truncate">
              {products[index].sanxuattai}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 pb-6 flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-montserrat font-medium text-[14px] transition cursor-pointer"
          >
            More Information &nbsp; →
          </button>
        </div>
        <MoreInfoModal
          isOpen={open}
          onClose={() => setOpen(false)}
          index={index}
        />
      </div>
    </section>
  );
};
