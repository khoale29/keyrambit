"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { motion, AnimatePresence } from "framer-motion";

export default function WithSplash({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // match SplashScreen animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        background: !showSplash
          ? "var(--Background-ThepDoThanhDong)"
          : "#262626",
        transition: "background 0.5s ease-in-out",
        minHeight: "100vh",
      }}
    >
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999]"
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
}
