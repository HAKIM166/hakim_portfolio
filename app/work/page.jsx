"use client";

import { motion } from "framer-motion";
import React, { useState, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "SaaS Dashboard / AI Workspace",
    title: "NexusDesk",
    description:
      "A modern AI-powered SaaS workspace dashboard built with Next.js, TypeScript, Tailwind CSS, Supabase, Zustand, and Groq AI. It includes protected authentication, Arabic/English localization with RTL support, dashboard analytics, clients, projects, employees, tasks, calendar workflows, dark/light themes, and a responsive premium UI.",
    stack: [
      { name: "Next.js 16" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Tailwind CSS v4" },
      { name: "Supabase" },
      { name: "Zustand" },
      { name: "Groq AI" },
      { name: "RTL Support" },
      { name: "Responsive UI" },
    ],
    image: "/assets/work/thumb21.png",
    live: "https://nexusdesk-psi.vercel.app",
    github: "https://github.com/HAKIM166/nexusdesk",
  },
  {
    num: "02",
    category: "Fullstack / Frontend + API",
    title: "Bzeyada Restaurant Platform",
    description:
      "A full online ordering platform built for a real restaurant client in Saudi Arabia. Includes dynamic menu management, customizable addons, cart system with unique logic, order creation, real-time tracking, user authentication with OTP, profile settings, and interactive map location selection — all powered by Next.js, MongoDB, and a custom API.",
    stack: [
      { name: "Next.js 14" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Leaflet Maps" },
      { name: "Context API" },
      { name: "REST API" },
    ],
    image: "/assets/work/thumb20.png",
    live: "https://bzeyada-restaurant-three.vercel.app/",
    github: null,
  },
  {
    num: "03",
    category: "Digital Restaurant Menu / Ordering Experience",
    title: "Bashamelo Menu",
    description:
      "A modern digital restaurant menu and ordering experience built with Next.js, TypeScript, MUI, and Zustand. The project includes a complete cart and checkout flow, WhatsApp order integration with structured customer details, dynamic offers management, responsive mobile-first UI, SEO optimization, local order persistence, and a clean production-ready experience designed for real restaurant usage.",
    stack: [
      { name: "Next.js 16" },
      { name: "TypeScript" },
      { name: "MUI" },
      { name: "Zustand" },
      { name: "Responsive UI" },
      { name: "WhatsApp Ordering" },
      { name: "SEO Optimization" },
      { name: "Mobile First" },
      { name: "Dynamic Offers" },
    ],
    image: "/assets/work/thumb22.png",
    live: "https://bashamelo-menu.vercel.app/",
    github: "https://github.com/HAKIM166/bashamelo-menu",
  },
  {
    num: "04",
    category: "E-commerce Frontend",
    title: "E-commerce Front-End – Abaya & Thobe Store",
    description:
      "A multi-page e-commerce front-end for a modern Abaya & Thobe store. The project includes a hero slider, product grid, offer section with countdown, and responsive layout optimized for mobile and desktop.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript (ES6+)" },
      { name: "Responsive Design" },
      { name: "Swiper.js (Hero Slider)" },
      { name: "LocalStorage (Cart & Wishlist)" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://hakim166.github.io/e-commarce_website/",
    github: "https://github.com/HAKIM166/e-commarce_website",
  },
  {
    num: "05",
    category: "Analytics Dashboard",
    title: "Analytics Dashboard (React)",
    description:
      "Single-page analytics dashboard built with React and React Router, featuring statistic cards, tables and navigation between sections.",
    stack: [
      { name: "React" },
      { name: "React Router" },
      { name: "CSS 3" },
      { name: "JavaScript ES6" },
    ],
    image: "/assets/work/thumb6.png",
    live: "https://hakim166.github.io/Dashboard/",
    github: "https://github.com/HAKIM166/Dashboard",
  },
  {
    num: "06",
    category: "Islamic Web Application",
    title: "Mawaqeet Al-Muslim",
    description:
      "Prayer times web app inspired by Mawaqit, with Arabic UI, next prayer countdown and dynamic data loaded from an external API.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "REST API" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://hakim166.github.io/Mawaqit/",
    github: "https://github.com/HAKIM166/Mawaqit",
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  return (
    <TooltipProvider delayDuration={80}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          {/* Main layout: left (slider) + right (details) */}
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-14 items-start">
            {/* LEFT: slider area */}
            <div className="w-full xl:w-[55%]">
              {/* Section title above slider */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm md:text-base font-medium text-slate-100">
                  Selected work
                </h3>
              </div>

              {/* Slider wrapper */}
              <div className="relative">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  onSlideChange={handleSlideChange}
                  className="relative"
                >
                  {projects.map((item, index) => (
                    <SwiperSlide key={item.num} className="w-full">
                      {/* Project image card */}
                      <div
                        className="
                          relative w-full overflow-hidden 
                          border border-slate-700/70 bg-slate-950
                          h-[230px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px]
                        "
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          priority={index === 0}
                          sizes="(min-width:1280px) 50vw,
                                 (min-width:768px) 80vw,
                                 100vw"
                          className="object-cover will-change-transform"
                        />

                        {/* Bottom info bar: category + slide number (#01) */}
                        <div className="absolute inset-x-0 z-10 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 py-2 flex text-[11px] md:text-xs justify-between items-center text-slate-100 gap-3">
                          <span className="uppercase tracking-[0.18em] text-slate-300 font-bold text-base">
                            {item.category}
                          </span>
                          <span className="font-mono text-slate-300 font-bold text-base">
                            #{item.num}
                          </span>
                        </div>

                        {/* Slider navigation arrows (inside card, bottom-right) */}
                        <WorkSliderBtns
                          containerStyles="flex gap-2 absolute bottom-4 right-4 z-20 items-center"
                          btnStyles="border border-slate-500/60 bg-slate-900/70
                            hover:bg-sky-500/30 hover:border-sky-500
                            text-slate-100 hover:text-white
                            text-[14px] w-[30px] h-[30px]
                            flex justify-center items-center
                            rounded-full shadow-sm transition-all duration-200"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* RIGHT: project details */}
            <div className="w-full xl:w-[45%]">
              <div className="flex flex-col gap-5 md:gap-6">
                {/* Title & meta */}
                <div>
                  <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-sky-400/80 mb-2">
                    {project.category} project
                  </p>
                  <h2 className="text-2xl md:text-3xl xl:text-[2.3rem] font-semibold text-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Selected work #{project.num}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-200/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-xs md:text-sm text-slate-100"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-700/60" />

                {/* Action buttons (Live + Github) */}
                <div className="flex flex-wrap items-center gap-4">
                  {/* Live project button */}
                  <Link
                    href={project.live || "#"}
                    aria-disabled={!project.live}
                  >
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[46px] w-[46px] items-center justify-center rounded-full border border-sky-500/80 bg-sky-500/10 hover:bg-sky-500/30 transition">
                        <BsArrowUpRight className="text-lg text-sky-100 group-hover:text-white" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>

                  {/* Github button */}
                  <Link
                    href={project.github || "#"}
                    aria-disabled={!project.github}
                  >
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[46px] w-[46px] items-center justify-center rounded-full border border-slate-500 bg-slate-800/80 hover:bg-slate-700 transition">
                        <BsGithub className="text-lg text-slate-100 group-hover:text-sky-300" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                </div>
              </div>
            </div>
            {/* END right column */}
          </div>
        </div>
      </motion.section>
    </TooltipProvider>
  );
}
