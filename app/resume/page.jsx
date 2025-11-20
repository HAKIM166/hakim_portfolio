"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiBootstrap,
} from "react-icons/si";

/* ABOUT DATA */
const about = {
  title: "About me",
  description: `I'm Ahmed Abd Ul Hakim Amir, a self-taught junior front-end developer from Assiut, Egypt. 
Over the last ~1.5 years I've focused on building real projects with React, Next.js and modern CSS, 
moving from a law background into web development. I care about clean code, reusable components 
and responsive, user-friendly interfaces.`,
  info: [
    { fieldName: "Name", fieldValue: "Ahmed Abd Ul Hakim Amir" },
    { fieldName: "Role", fieldValue: "Front-End Developer (Junior)" },
    { fieldName: "Location", fieldValue: "Manfalut, Assiut, Egypt" },
    {
      fieldName: "Experience",
      fieldValue: "≈1.5 years (self-learning & projects)",
    },
    { fieldName: "Email", fieldValue: "ahmed.hakem2@yahoo.com" },
    { fieldName: "Phone", fieldValue: "+20 109 251 0794" },
    { fieldName: "GitHub", fieldValue: "github.com/HAKIM166" },
    {
      fieldName: "LinkedIn",
      fieldValue: "linkedin.com/in/ahmed-hakem-34b3b3350",
    },
    { fieldName: "Languages", fieldValue: "Arabic (native), English (B1)" },
  ],
};

/* EXPERIENCE DATA */
const experience = {
  title: "Experience",
  description: `I'm a self-taught front-end developer. My experience comes from building real projects, 
completing a full-stack program and practicing modern front-end workflows with React and Next.js.`,
  items: [
    {
      company: "Self-Learning & Personal Projects",
      position: "Front-End Developer (Practice & Portfolio)",
      duration: "2023 – Present",
    },
    {
      company: "CLS Learning Solution – Online",
      position: "Full-Stack Web Development Trainee (190 hours)",
      duration: "Feb 2025 – May 2025",
    },
  ],
};

/* EDUCATION DATA */
const education = {
  title: "Education",
  description: `My formal education is in law, and my technical skills come from intensive online training 
and structured self-learning in front-end and full-stack web development.`,
  items: [
    {
      institution: "CLS Learning Solution – Online",
      degree: "Full-Stack Web Development Program (190 hours)",
      duration: "Feb 2025 – May 2025",
    },
    {
      institution: "Assiut University – Faculty of Law",
      degree: "Bachelor of Law (LL.B.) – Grade: Good",
      duration: "2021 – 2025",
    },
    {
      institution: "Online platforms (YouTube, Coursera, etc.)",
      degree: "Front-End & JavaScript Self-Learning",
      duration: "2023 – Present",
    },
  ],
};

/* SKILLS DATA */
const skills = {
  title: "My skills",
  description: `I focus on modern front-end development: React, Next.js, TypeScript and Tailwind CSS, 
with a strong focus on clean code, component reuse and responsive design.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      hoverClass: "group-hover:text-[#E34F26]",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
      hoverClass: "group-hover:text-[#1572B6]",
    },
    {
      icon: <FaJs />,
      name: "JavaScript (ES6+)",
      hoverClass: "group-hover:text-[#F7DF1E]",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      hoverClass: "group-hover:text-[#3178C6]",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      hoverClass: "group-hover:text-[#61DBFB]",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      hoverClass: "group-hover:text-white",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      hoverClass: "group-hover:text-[#38BDF8]",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      hoverClass: "group-hover:text-[#7952B3]",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      hoverClass: "group-hover:text-[#F05032]",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      hoverClass: "group-hover:text-[#F5F5F5]",
    },
    {
      icon: <FaCode />,
      name: "VS Code",
      hoverClass: "group-hover:text-[#22A6F2]",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      hoverClass: "group-hover:text-[#F24E1E]",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#14141b] border border-white/5 h-[180px] 
                        py-6 px-8 rounded-xl flex flex-col justify-center items-center
                        lg:items-start gap-2 hover:border-accent/70 hover:bg-[#181824]
                        transition-colors duration-300"
                      >
                        <span className="text-accent text-sm font-medium">
                          {item.duration}
                        </span>
                        <h3 className="text-lg font-semibold max-w-[260px] min-h-[52px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-white/60 text-sm">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#14141b] border border-white/5 h-[180px] 
                        py-6 px-8 rounded-xl flex flex-col justify-center items-center
                        lg:items-start gap-2 hover:border-accent/70 hover:bg-[#181824]
                        transition-colors duration-300"
                      >
                        <span className="text-accent text-sm font-medium">
                          {item.duration}
                        </span>
                        <h3 className="text-lg font-semibold max-w-[260px] min-h-[52px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          <p className="text-white/60 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[16px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[24px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={80}>
                        <Tooltip>
                          <TooltipTrigger
                            className="w-full h-[130px] bg-[#151521] rounded-xl 
                              flex flex-col justify-center items-center gap-3 
                              border border-white/5 group
                              hover:border-accent/70 hover:bg-[#1f2937]
                              transition-all duration-300"
                          >
                            <div
                              className={`text-4xl md:text-5xl text-white/70 transition-all duration-300 ${skill.hoverClass}`}
                            >
                              {skill.icon}
                            </div>
                            <p className="capitalize text-xs text-white/60 group-hover:text-white/90 transition-colors duration-300">
                              {skill.name}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize text-xs">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ABOUT ME */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 whitespace-pre-line">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60 text-sm">
                        {item.fieldName}
                      </span>
                      <span className="text-base md:text-lg">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
