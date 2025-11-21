# Hakim Portfolio

A modern, animated Front-End Developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.  
It showcases real projects, skills, services, stats, and a clear way for people to contact the developer.

---

## 📌 Overview

Hakim Portfolio is a personal portfolio website built to:

- Present the developer and the learning journey into front-end development.
- Showcase real-world projects such as dashboards, a prayer times app, and an e-commerce front-end.
- List skills, education, and self-learning paths in a clear structure.
- Communicate the front-end services that can be offered.
- Give recruiters and clients an easy way to get in touch.

The layout includes:

- A persistent header with navigation and a “Hire me” call-to-action.
- A dedicated mobile navigation drawer.
- Smooth transitions, gradients, and a focus on readability and responsiveness.

---

## 🌐 Live Demo

Live demo: https://hakim-portfolio-o68o.vercel.app/

---

## 🚀 Features

### Global Layout and Navigation

- Header with logo, navigation links, and a primary “Hire me” button that routes to the contact page.
- Desktop navigation with clear active state highlighting the current route.
- Mobile navigation using a sheet-style drawer that reuses the same navigation links and closes automatically when a link is clicked.

### Hero and Social Presence

- Profile photo with animated frame, gradient glow, and floating skill tags for technologies such as React, TypeScript, Next.js, HTML, CSS, JavaScript, and Tailwind CSS.
- Social links bar with icons and direct links to GitHub, LinkedIn, Facebook, and Instagram.

### Resume Section

A full Resume page implemented as a tabbed interface:

- Tabs for Experience, Education, Skills, and About me.
- Experience: self-learning, personal projects, and full-stack or web development training.
- Education: law degree, web development program, and online courses.
- Skills: grid of core technologies and tools including HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Git, GitHub, VS Code, and Figma.
- About me: structured about text with role, location, profiles, and languages.

### Services Section

Clear list of front-end services, including:

1. Front-End Web Development using React, Next.js, and TypeScript.  
2. Responsive UI and styling with Tailwind CSS and mobile-first design.  
3. Dashboards and web apps with cards, navigation, and API integration.  
4. Landing pages and portfolio websites focused on clarity and conversions.

Each service is presented as a card with a tag, title, description, and a link to the Work page.

### Work / Projects Section

The Work page is built around a Swiper-based slider with custom navigation buttons:

- Left and right arrow buttons that control the Swiper instance.
- Each slide shows a project thumbnail, category, and project number.
- A detail panel with project title, description, tech stack tags, and buttons for the live demo and GitHub repository.

Example highlighted projects:

- Mawaqeet Al-Muslim: Arabic prayer times web app with next-prayer countdown and API integration.  
- Analytics Dashboard: single-page dashboard UI with cards and structured layout.  
- E-commerce Front-end: multi-section front-end with hero, product listings, and category sections.

### Stats Section

A Stats component shows animated counters using react-countup, for example:

- Years or months of focused learning.
- Number of completed projects.
- Number of core technologies used.
- Number of API-driven projects.

The stats are displayed inside glass-style cards with hover effects.

### Contact Section

A full-featured Contact page that includes:

- Form fields for firstname, lastname, email, phone number, service selection, and message.
- A submit button labeled “Send message”.
- A side panel with static contact information such as phone number, email, and physical location (Manfalut, Assiut, Egypt).

### Page Transitions and Micro-animations

The portfolio uses several animation layers:

- Global page transition overlay that fades on route change.
- Stair-shaped animated overlay for unique page transitions.
- Smooth hero image entrance and floating skill badges around the profile image.

All animations are handled through Framer Motion with well-tuned timings.

---

## 🧰 Tech Stack

### Core

- Next.js  
- React  
- React DOM  

### Styling and Layout

- Tailwind CSS  
- tailwind-merge  
- class-variance-authority  

### Animations and Interaction

- Framer Motion  
- Swiper  
- react-countup  

### UI Components and Icons

- Radix UI and shadcn style components for tabs, tooltips, scroll areas, selects, sheets, and more.  
- lucide-react and react-icons for icons across navigation, buttons, and cards.

### Tooling

- ESLint with eslint-config-next  
- PostCSS and Autoprefixer  

---

## 📂 Project Structure

```bash
hakim-portfolio/
├─ app/
│  ├─ contact/
│  │  └─ page.jsx
│  ├─ resume/
│  │  └─ page.jsx
│  ├─ services/
│  │  └─ page.jsx
│  ├─ work/
│  │  └─ page.jsx
│  ├─ layout.jsx
│  ├─ page.jsx
│  └─ globals.css
├─ components/
│  ├─ Photo.jsx
│  ├─ Social.jsx
│  ├─ Stairs.jsx
│  ├─ StairTransition.jsx
│  ├─ Stats.jsx
│  └─ WorkSliderBtns.jsx
├─ app/components/ui/
│  ├─ button.jsx
│  ├─ input.jsx
│  ├─ scroll-area.jsx
│  ├─ select.jsx
│  ├─ sheet.jsx
│  ├─ tabs.jsx
│  ├─ textarea.jsx
│  └─ tooltip.jsx
├─ lib/
│  └─ utils.js
├─ public/
│  └─ assets/
│     ├─ file.svg
│     ├─ globe.svg
│     ├─ next.svg
│     ├─ vercel.svg
│     └─ window.svg
├─ package.json
└─ README.md
