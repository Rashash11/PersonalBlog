<div align="center">

# Mostafa Elrashash — Technical Portfolio

### AI Engineering, Computer Vision, and Automation

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![GitHub](https://img.shields.io/badge/GitHub-Rashash11-181717?style=for-the-badge&logo=github)](https://github.com/Rashash11)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mostafa-ibrahim-414506260/)

---

![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

</div>

---

## Executive Summary

A highly interactive personal portfolio for Mostafa Elrashash — an Artificial Intelligence student and junior software developer specializing in computer vision, machine learning, and automation. The platform pairs a data-driven content layer with WebGL physics simulations, real-time GitHub telemetry, and an autonomous AI chatbot assistant.

---

## System Architecture & Technologies

### Core Framework
- **Next.js 16 (App Router):** Server-side rendering, static generation, and advanced caching.
- **React 19 & TypeScript:** Type-safe, modern reactive UI across 50+ custom components.

### 3D Graphics & Physics Simulation
- **Three.js & React Three Fiber (R3F):** WebGL rendering engine.
- **Rapier Physics:** Real-time physics for the interactive 3D lanyard ID badge.

### UI/UX Choreography
- **Framer Motion & GSAP:** Timeline-based choreography and micro-interactions.
- **Tailwind CSS & Shadcn UI:** Utility-first design system on Radix UI primitives.
- **Lenis:** Smooth scrolling.

### System Integrations & APIs
- **Dual-LLM AI Chatbot:** Groq (LLaMA 3.1) as primary provider with automatic failover to Google Gemini, using context built directly from `portfolio.ts`.
- **GitHub GraphQL/REST:** Repository statistics and language breakdown.
- **Next-Intl:** Bilingual experience (English / Arabic).

---

## Project Structure

```text
PersonalBlog/
├── src/
│   ├── app/                          # Next.js 16 App Router Entry Points
│   │   ├── api/                      # Backend API Routes (Chatbot, Contact, GitHub)
│   │   ├── projects/                 # Project Directory
│   │   ├── experience/               # Career Timeline
│   │   ├── skills/                   # Technical Skill Radar
│   │   ├── resume/                   # Custom PDF Rendering Engine (react-pdf)
│   │   └── blog/                     # Article Renderer
│   ├── components/
│   │   ├── three/                    # WebGL & R3F Components (Lanyard badge)
│   │   ├── sections/                 # Primary Page Layout Structures
│   │   └── ui/                       # 50+ Custom Shadcn & Animated Primitives
│   ├── data/
│   │   └── portfolio.ts              # Centralized TS Data Store
│   ├── hooks/                        # Custom React Hooks (Performance, Intersection)
│   └── styles/                       # Global CSS & Tailwind Directives
├── public/                           # Static Assets (Images, 3D Models, Resume PDF)
├── next.config.ts                    # Next.js Optimization Configuration
└── tailwind.config.ts                # Custom Design System Configurations
```

---

## Key Features

### 1. Interactive 3D Environment
A physics-simulated ID badge (`@react-three/drei`, `@react-three/fiber`, Rapier) that responds to cursor velocity and window constraints in real time.

### 2. Autonomous Portfolio Chatbot
A conversational agent at `/api/chat` that builds its context window from `portfolio.ts` and answers questions about Mostafa's background using a redundant Dual-LLM setup (Groq + Gemini failover).

### 3. Real-Time GitHub Telemetry
Live GitHub activity heatmap and language breakdown via authenticated GraphQL requests.

### 4. Interactive PDF Resume Viewer
A `react-pdf`-based viewer for zooming, rotating, searching, and downloading the resume in-browser.

### 5. Performance Diagnostics
A `usePerformance` hook evaluates client hardware in real time, disabling intensive shaders/animations on low-power devices.

---

## Local Development Setup

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rashash11/PersonalBlog.git
   cd PersonalBlog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory.

   ```env
   NEXT_PUBLIC_GITHUB_USERNAME=Rashash11
   GITHUB_TOKEN=your_personal_access_token
   GROQ_API_KEY=your_groq_key
   GEMINI_API_KEY=your_gemini_key
   EMAIL_USER=your_gmail_address
   EMAIL_APP_PASSWORD=your_gmail_app_password
   ```

   All of these are optional — the site renders and runs without them; the chatbot, GitHub stats widget, and contact form simply stay inactive until the corresponding key is set.

4. **Initialize Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` to interact with the application.

### Production Build
```bash
npm run build
npm start
```

---

## Project Showcase Overview

| Project | Core Technologies |
|---|---|
| Robotic Arm with AI Vision (98% pick-and-place accuracy) | Python, YOLOv8, DeepSeek API |
| AI-Powered Secure Chat Monitor (Chrome extension) | JavaScript, Chrome Extension APIs, AI/NLP |
| Restaurant Recommendation Engine | Python, PyTorch, Neural Collaborative Filtering |
| AI-Powered Prosthetic Hand | Python, Sensor Integration, Adaptive AI |
| NASA International Space Apps Challenge | Python, Data Visualization, AI |

---

## License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <p>Built by Mostafa Elrashash</p>
</div>
