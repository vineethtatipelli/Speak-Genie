## 📌 Project Overview
This project recreates three mobile UI screens (Home, Now Playing, and Craft Quiz) using React, TypeScript, Vite, and Tailwind CSS. The goal is to build a clean, responsive, and component-based frontend that closely matches the given UI designs. It demonstrates strong frontend engineering practices such as reusable components, Tailwind-based styling, and mobile-first responsiveness.

## 🚀 How to Run the Project
1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Open the project in your browser:
   http://localhost:5173

4. Build for production:
   npm run build

5. Preview the production build:
   npm run preview

## 🧩 Assumptions Made
- The task is UI-focused only; no backend or real API calls are implemented.
- Audio player controls are UI-only and not connected to real audio.
- Images used in the UI are stored locally inside the public/assets folder.
- Quiz generation is not functional; only the UI layout and interaction design are implemented.
- Navigation uses React Router, but only the required screens are included.

## 📁 Brief Folder Structure
src/
  components/       → Reusable UI components (XPCard, CircleAction, StoryCarousel, etc.)
  pages/            → Screen pages (Home, NowPlaying, CraftQuiz)
  App.tsx           → Routing and layout wrapper
  main.tsx          → React app entry file
  index.css         → Tailwind CSS imports

public/
  assets/           → Local images used in the UI

This structure keeps the project modular, readable, and easy to maintain while supporting responsive UI development.
