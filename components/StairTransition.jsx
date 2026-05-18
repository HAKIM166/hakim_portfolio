"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import Stairs from "./Stairs";

export default function StairTransition() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="pointer-events-none">
        <div className="pointer-events-none fixed left-0 top-0 z-40 flex h-screen w-screen">
          <Stairs />
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            transitionEnd: { display: "none" },
          }}
          className="pointer-events-none fixed left-0 top-0 z-30 h-screen w-screen bg-primary"
        />
      </div>
    </AnimatePresence>
  );
}