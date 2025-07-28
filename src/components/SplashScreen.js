"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [step, setStep] = useState(0);
  const bgControls = useAnimation();

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1)); // zoom out
    const timer2 = setTimeout(() => {
      setStep(2); // move up and shrink
      bgControls.start({
        opacity: 0, // fade out the dark layer
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [bgControls]);

  const animationVariants = [
    { height: "auto", marginTop: 282 },
    { height: 95, marginTop: 337 },
    { height: 43, marginTop: 20 },
  ];

  return (
    <div className="fixed inset-0 w-screen h-screen z-[999] overflow-hidden flex items-start justify-center">
      {/* Background gradient layer */}
      <div
        style={{
          background: "var(--Background-ThepDoThanhDong)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Dark overlay that fades out */}
      <motion.div
        animate={bgControls}
        initial={{ opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-[#262626]"
      />

      {/* Animated logo */}
      <motion.img
        src="/logo.webp"
        alt="Logo"
        fetchPriority="high"
        initial={animationVariants[0]}
        animate={animationVariants[step]}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-[1]  block mx-auto max-w-none"
      />
    </div>
  );
}
