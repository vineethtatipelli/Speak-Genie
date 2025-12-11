import React from "react";
import { useNavigate } from "react-router-dom";
import QuizBuilder from "../components/QuizBuilder";

export default function CraftQuiz() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 pt-6 pb-28 bg-[#fbfffb]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="rounded-full p-2 bg-white shadow-sm"
      >
        ← Back
      </button>

      <QuizBuilder />
    </div>
  );
}
