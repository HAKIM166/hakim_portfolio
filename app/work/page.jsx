"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

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
    category: "frontend",
    title: "project 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Natus doloribus voluptas recusandae architecto `,
    stack: [{ name: "Html 5" }, { name: " Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Natus doloribus voluptas recusandae architecto `,
    stack: [{ name: "Html 5" }, { name: " Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Natus doloribus voluptas recusandae architecto `,
    stack: [{ name: "Html 5" }, { name: " Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (Swiper) => {
    // get current slide index
    const currentIndex = Swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent
              text-outline"
              >
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                     bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                     bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub
                          className="text-white text-3xl
                        group-hover:text-accent"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repositry</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center
                     items-center bg-pink-50/20"
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* imsge */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0
               bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover
                text-primary text-[22px] w-[44px] h-[44px] flex justify-center
                items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}





















// "use client";

// import { motion } from "framer-motion";
// import React, { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import Link from "next/link";
// import Image from "next/image";
// import WorkSliderBtns from "@/components/WorkSliderBtns";

// const projects = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "project 1",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//      Natus doloribus voluptas recusandae architecto `,
//     stack: [{ name: "Html 5" }, { name: " Css 3" }, { name: "Javascript" }],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "frontend",
//     title: "project 2",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//      Natus doloribus voluptas recusandae architecto `,
//     stack: [{ name: "React" }, { name: " Tailwind" }, { name: "Framer Motion" }],
//     image: "/assets/work/thumb2.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "frontend",
//     title: "project 3",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//      Natus doloribus voluptas recusandae architecto `,
//     stack: [{ name: "Next.js" }, { name: " Typescript" }, { name: "Chart.js" }],
//     image: "/assets/work/thumb3.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "04",
//     category: "frontend",
//     title: "project 4",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//      Natus doloribus voluptas recusandae architecto `,
//     stack: [{ name: "Next.js" }, { name: " Typescript" }, { name: "Chart.js" }],
//     image: "/assets/work/thumb3.png",
//     live: "",
//     github: "",
//   },
// ];

// export default function Work() {
//   const [project, setProject] = useState(projects[0]);

//   const handleSlideChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;
//     setProject(projects[currentIndex]);
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
//       className="min-h-[80vh] flex items-center py-12 lg:py-16"
//     >
//       <div className="container mx-auto">
//         {/* نفس اللاوت الحالي بالظبط */}
//         <div className="flex flex-col xl:flex-row gap-10 xl:gap-14 items-start">
//           {/* === LEFT: SLIDER (ما لمسناش الwidth) === */}
//           <div className="w-full xl:w-[55%]">
//             {/* عنوان بسيط فوق السلايدر */}
//             <div className="mb-4 flex items-center justify-between">
//               <h3 className="text-sm md:text-base font-medium text-slate-100">
//                 Selected work
//               </h3>
//             </div>

//             {/* السلايدر نفسه */}
//             <div className="relative">
//               <Swiper
//                 spaceBetween={24}
//                 slidesPerView={1}
//                 onSlideChange={handleSlideChange}
//                 className="relative"
//               >
//                 {projects.map((item, index) => (
//                   <SwiperSlide key={index} className="w-full">
//                     {/* الكارد الداخلي – بسيط وكلاسيك */}
//                     <div
//                       className="
//                         relative w-full overflow-hidden 
//                         border border-slate-700 bg-slate-950
//                         h-[230px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[420px]
//                       "
//                     >
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         className="object-cover"
//                         priority={index === 0}
//                       />

//                       {/* info بسيطة في أسفل الكارد */}
//                       <div className="absolute inset-x-0 bottom-0 z-10 bg-black/45 backdrop-blur-sm px-4 py-2 flex items-center justify-between text-[11px] md:text-xs text-slate-100">
//                         <span className="uppercase tracking-[0.18em] text-slate-200">
//                           {item.category}
//                         </span>
//                         <span className="font-mono text-slate-300">
//                           #{item.num}
//                         </span>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}

//                 {/* أزرار السلايدر – نفس المكان والرسبونسف */}
//                 <WorkSliderBtns
//                   containerStyles="flex gap-3 absolute right-4 bottom-4 z-20"
//                 />
//               </Swiper>
//             </div>
//           </div>

//           {/* === RIGHT: TEXT (ما لمسناش الwidth) === */}
//           <div className="w-full xl:w-[45%]">
//             <div className="flex flex-col gap-5 md:gap-6">
//               <div>
//                 <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-emerald-300/80 mb-2">
//                   {project.category} project
//                 </p>
//                 <h2 className="text-2xl md:text-3xl xl:text-[2.3rem] font-semibold text-white leading-tight">
//                   {project.title}
//                 </h2>
//                 <p className="mt-1 text-[11px] text-slate-400">
//                   Selected work #{project.num}
//                 </p>
//               </div>

//               <p className="text-sm md:text-base text-slate-200/80 leading-relaxed">
//                 {project.description}
//               </p>

//               {/* التقنيات */}
//               <div className="flex flex-wrap gap-2">
//                 {project.stack.map((item, index) => (
//                   <span
//                     key={index}
//                     className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-xs md:text-sm text-slate-100"
//                   >
//                     {item.name}
//                   </span>
//                 ))}
//               </div>

//               <div className="h-px w-full bg-slate-700/60" />

//               {/* الأزرار */}
//               <div className="flex flex-wrap items-center gap-4">
//                 {/* Live btn */}
//                 <Link href={project.live || "#"} aria-disabled={!project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger
//                         className="group flex h-[48px] w-[48px] items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/15 hover:bg-emerald-500/30 transition"
//                       >
//                         <BsArrowUpRight className="text-lg text-emerald-100 group-hover:text-white" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Live project</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>

//                 {/* Github btn */}
//                 <Link href={project.github || "#"} aria-disabled={!project.github}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger
//                         className="group flex h-[48px] w-[48px] items-center justify-center rounded-full border border-slate-500 bg-slate-800/80 hover:bg-slate-700 transition"
//                       >
//                         <BsGithub className="text-lg text-slate-100 group-hover:text-emerald-300" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Github repository</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>

//               </div>
//             </div>
//           </div>
//           {/* === END RIGHT === */}
//         </div>
//       </div>
//     </motion.section>
//   );
// }
