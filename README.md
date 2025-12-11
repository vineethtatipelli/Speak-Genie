
```markdown
# 🚀 Bondify UI — React + TypeScript + Vite + Tailwind CSS

A fully responsive, modern frontend recreation of multiple mobile UI screens inspired by a learning application. The project focuses on **pixel-close UI**, **clean component architecture**, and **responsive design**, suitable for a **Frontend Engineer Interview Task**.

---

## ✨ Overview

This project rebuilds three screens from a mobile learning app using **React**, **TypeScript**, and **Tailwind CSS**, closely matching the provided UI designs.

It demonstrates:

- Modular & reusable components  
- Clean folder structure  
- Tailwind-based UI theming  
- Responsive layouts (Mobile → Tablet → Laptop)  
- Good code readability and maintainability  
- Navigation using React Router  

This project serves as both a **learning exercise** and a **technical showcase** of frontend UI development skills.

---

## 📱 Screens Implemented

### **1️⃣ Home Screen**
Includes:
- XP progress card  
- Circular quick-action icons  
- Audio story carousel  
- Practice with Humans section  
- Practice with AI section  
- Bottom navigation bar  

### **2️⃣ Now Playing Screen**
Displays:
- Story cover artwork  
- Title + description  
- Interactive audio controls  
- "Test Your Understanding" button  

### **3️⃣ Craft a Custom Quiz Screen**
Features:
- Topic selection  
- Difficulty selection  
- Interactive cards  
- Smooth mobile-first layout  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI library |
| **TypeScript** | Strong typing & maintainability |
| **Vite** | Fast bundler & dev server |
| **Tailwind CSS** | Utility-first styling system |
| **React Router** | Client-side navigation |
| **Lucide / Heroicons** | Icon set for UI elements |

---

## 📁 Folder Structure

```

bondify-ui/
├── public/
│   └── assets/           # Local images used in the UI
│
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── XPCard.tsx
│   │   ├── CircleAction.tsx
│   │   ├── StoryCarousel.tsx
│   │   ├── PracticeSection.tsx
│   │   ├── NowPlayingPlayer.tsx
│   │   └── QuizBuilder.tsx
│   │
│   ├── pages/            # Individual screens
│   │   ├── Home.tsx
│   │   ├── NowPlaying.tsx
│   │   └── CraftQuiz.tsx
│   │
│   ├── App.tsx           # Router + layout wrapper
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Tailwind imports + custom styles
│   └── types.d.ts        # Shared TypeScript types
│
├── package.json
├── tsconfig.json
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd bondify-ui
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Vite will run at:

👉 [http://localhost:5173](http://localhost:5173)

### 4️⃣ Build for production

```bash
npm run build
npm run preview
```

---

## 🎨 Styling & Responsiveness

This project uses **Tailwind CSS** for:

* Spacing
* Colors
* Gradients
* Shadows
* Typography
* Layouts
* Responsive breakpoints (`sm:`, `md:`, `lg:`)

The UI is **mobile-first**, and it scales beautifully on **tablet** and **small laptop** screens thanks to responsive Tailwind utility classes.

---

## 🧩 Component Architecture

The UI is constructed from modular, reusable components:

* **XPCard** → Displays user level, XP and progress
* **CircleAction** → Quick access action icons
* **StoryCarousel** → Scrollable story preview cards
* **PracticeSection** → "Practice with Humans" + "Practice with AI" cards
* **NowPlayingPlayer** → Audio playback UI
* **QuizBuilder** → Custom quiz generation interface

Each component follows clean, readable structure & Tailwind utility usage.

---

## 🚦 Navigation

Navigation is handled using **React Router v6**.

Available routes:

* `/home`
* `/now`
* `/quiz`

Back navigation uses:

```ts
navigate(-1);
```

Bottom navigation provides quick access between screens.

---

## 📌 Assumptions Made

* The provided UI task is **frontend-only**; therefore no backend integration is included.
* Local images are stored inside `/public/assets`.
* Audio player is UI-only and not linked to a real audio file.
* Quiz generation is not functional—the UI/UX is implemented as per design expectations.

---

## 🌐 Deployment

You can deploy this project very easily using:

### **Vercel (recommended)**

* Zero config for Vite
* Automatic deployments from GitHub

Or use:

* Netlify
* Cloudflare Pages
* GitHub Pages

---

## 🎯 Why This Project Is Valuable

This project demonstrates:

* Pixel-close UI implementation
* Strong understanding of Tailwind
* Mobile-first responsive design
* Clean component architecture
* Professional-level code structure
* TypeScript best practices
* Realistic frontend engineering workflow

An excellent project for showcasing frontend skills in interviews.

---

## 🚀 Future Enhancements (Optional)

* Integrate real backend APIs
* Add actual audio playback functionality
* Store XP/user data dynamically
* Generate quizzes using AI or predefined logic
* Add Framer Motion animations for smoother transitions

---

## 🙌 Thank You!

Feel free to contribute, suggest improvements, or use this project as a learning resource or interview submission.

```
