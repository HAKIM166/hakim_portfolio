"use client";

import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-End Web Development",
    description:
      "Building modern, responsive web interfaces using React, Next.js, TypeScript and clean, reusable components ready for real-world use.",
    href: "/work",
    tag: "Frontend",
  },
  {
    num: "02",
    title: "Responsive UI & Styling",
    description:
      "Creating pixel-perfect layouts with Tailwind CSS, modern CSS tools and mobile-first design so your website looks great on every screen.",
    href: "/work",
    tag: "UI / Responsive",
  },
  {
    num: "03",
    title: "Dashboards & Web Apps",
    description:
      "Developing multi-page dashboards and utility apps with React Router, API integration and organized components for maintainable code.",
    href: "/work",
    tag: "Dashboards",
  },
  {
    num: "04",
    title: "Landing Pages & Portfolios",
    description:
      "Designing and building fast, clean landing pages and personal portfolios that highlight your brand and convert visitors into clients.",
    href: "/work",
    tag: "Landing / Portfolio",
  },
];

export default function Services() {
  return (
    <motion.section
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        {/* العنوان */}
        <div className="mb-10 max-w-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/70 mb-2">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What I can build for you
          </h1>
          <p className="text-white/60 text-sm md:text-base">
            As a self-taught Front-End Developer, I focus on clean code,
            reusable components and responsive layouts using React, Next.js and
            modern CSS tools.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
          {services.map((service) => (
            <div
              key={service.num}
              className="flex flex-col gap-4 border border-white/10 
                         bg-slate-900/50 p-5 xl:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.7)]
                         hover:border-accent/70 hover:bg-slate-900/80
                         transition-colors duration-300 group
                         hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.9)]"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-accent">
                    {service.num}
                  </span>
                  <span className="text-[11px] px-2 py-1 rounded-full border border-white/15 text-white/60">
                    {service.tag}
                  </span>
                </div>

                <Link
                  href={service.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full 
                             border border-white/20 text-white/70
                             hover:border-accent hover:text-accent
                             transition-colors duration-300"
                >
                  <FiArrowUpRight className="text-lg" />
                </Link>
              </div>

              <h2 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h2>

              <p className="text-sm md:text-[15px] leading-relaxed text-white/70">
                {service.description}
              </p>

              <div className="mt-2 h-px w-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
