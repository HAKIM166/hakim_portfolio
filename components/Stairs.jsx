"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    opacity: 1,
  },
  animate: {
    top: "30%",
    opacity: 0,
  },
  exit: {
    top: ["100%", "0%"],
    opacity: [1, 2, 1],
  },
};
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const getStepStyle = (index) => {
  const opacity = 0.35 + index * 0.08;
  const angle = index % 2 === 0 ? 10 : -10;
  const positionShift = index * 12;

  return {
    opacity,
    transform: `skewY(${angle}deg) translateX(${positionShift}px)`,
    transformOrigin: "top left",
    backgroundImage:
      "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,64,175,1) 35%, rgba(56,189,248,0.9) 70%, rgba(15,23,42,1) 100%)",
    backgroundSize: "200% 200%",
    backgroundPosition: `${20 + index * 15}% 0%`,
    boxShadow: "0 0 40px rgba(15,23,42,0.9)",
    borderRadius: "40px",
  };
};

export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.09,
          }}
          className="h-full w-full relative overflow-hidden border border-white/5 backdrop-blur-md mix-blend-screen pointer-events-none"
          style={getStepStyle(index)}
        ></motion.div>
      ))}
    </>
  );
}
