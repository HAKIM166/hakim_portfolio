"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
        className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px] xl:w-[400px] xl:h-[400px]"
      >
        <motion.div
          className="absolute inset-[6%] rounded-[2rem] border border-accent/50"
          initial={{ rotate: -8 }}
          animate={{ rotate: [-8, 6, -4, 4, -8] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-[16%] rounded-[2rem] bg-gradient-to-tr from-accent/30 via-transparent to-sky-500/15 blur-xl" />

        {/* Photo */}
        <div className="relative z-0 flex h-[270px] md:h-[310px] lg:h-80 xl:h-96 w-full items-center justify-center">
          <div className="relative h-full w-[70%] md:w-[75%] lg:w-[80%] overflow-hidden rounded-[100px]">
            <Image
              src="/assets/photo14.png"
              alt="Ahmed Hakim profile photo"
              fill
              priority
              sizes="(max-width: 768px) 240px, (max-width: 1280px) 272px, 320px"
              className="object-cover scale-100 md:scale-105 lg:scale-110 -translate-y-1"
            />
          </div>
        </div>

        {/* React */}
        <motion.div
          className="absolute -top-3 right-4 rounded-full border border-[#61DAFB] bg-black/70 px-3 py-1 text-xs text-[#61DAFB] backdrop-blur-sm"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          React
        </motion.div>

        {/* TypeScript */}
        <motion.div
          className="absolute bottom-4 left-4 rounded-full border border-[#3178C6] bg-black/70 px-3 py-1 text-xs text-[#3178C6] backdrop-blur-sm"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          TypeScript
        </motion.div>

        {/* Next.js */}
        <motion.div
          className="absolute top-10 -right-6 rounded-full border border-white/40 bg-black/80 px-3 py-1 text-xs text-white/85 backdrop-blur-sm"
          animate={{ y: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Next.js
        </motion.div>

        {/* HTML */}
        <motion.div
          className="absolute -top-4 left-6 rounded-full border border-[#E34F26] bg-[#E34F26] px-3 py-1 text-xs text-white backdrop-blur-sm"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          HTML
        </motion.div>

        {/* CSS */}
        <motion.div
          className="absolute top-1/2 -left-8 -translate-y-1/2 rounded-full border border-[#1572B6] bg-[#1572B6] px-3 py-1 text-xs text-white backdrop-blur-sm"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          CSS
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="absolute bottom-8 right-6 rounded-full border border-[#F7DF1E] bg-[#F7DF1E] px-3 py-1 text-xs text-[#111827] backdrop-blur-sm"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
        >
          JavaScript
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-[#06B6D4] bg-black/80 px-3 py-1 text-xs text-[#06B6D4] backdrop-blur-sm"
          animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
        >
          Tailwind
        </motion.div>
      </motion.div>
    </div>
  );
}
