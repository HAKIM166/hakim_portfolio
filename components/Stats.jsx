"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1.5,
    decimals: 1,
    text: "Years of focused learning",
  },
  {
    num: 5,
    decimals: 0,
    text: "Major projects built",
  },
  {
    num: 8,
    decimals: 0,
    text: "Core technologies used",
  },
  {
    num: 3,
    decimals: 0,
    text: "API-driven projects",
  },
];

export default function Stats() {
  return (
    <section className="pt-8 pb-12 xl:pt-10 xl:pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 max-w-[1200px] mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center  border border-white/10 px-4 py-4 md:py-6 backdrop-blur-sm shadow-sm hover:border-accent hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-accent">
                <CountUp
                  end={item.num}
                  decimals={item.decimals ?? 0}
                  duration={2.5}
                  delay={1}
                />
              </span>

              <p className="mt-2 text-center text-xs md:text-sm text-white/80 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
