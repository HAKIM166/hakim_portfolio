"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeOut" },
            transitionEnd: { display: "none" },
          }}
          className="pointer-events-none fixed left-0 top-0 z-30 h-screen w-screen bg-primary"
        />

        {children}
      </div>
    </AnimatePresence>
  );
}