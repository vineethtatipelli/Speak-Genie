import React from "react";
import XPCard from "../components/XPCard";
import CircleAction from "../components/CircleAction";
import StoryCarousel from "../components/StoryCarousel";
import PracticeSection from "../components/PracticeSection";
import { Video, Users, BookOpen, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pb-28 px-4 pt-6">
      <XPCard name="Lorenzo" level={3} xp={42} nextXp={100} />

      <div className="mt-6 bg-white p-4 rounded-2xl shadow-sm">
        <div className="flex justify-between">
          <div className="flex gap-6">
            <CircleAction label="Video Learning" icon={<Video size={26} />} />
            <CircleAction label="Peer Calls" icon={<Users size={26} />} />
            <CircleAction label="Stories" icon={<BookOpen size={26} />} />
            <CircleAction label="AI Calls" icon={<Bot size={26} />} />
          </div>
        </div>

        <div className="mt-6">
          <StoryCarousel />
        </div>

        <div className="mt-8">
          <PracticeSection />
        </div>
      </div>
    </div>
  );
}
