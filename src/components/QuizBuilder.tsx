import React, { useState } from "react";
import { Difficulty } from "../types";

const sampleTopics = ["My Best Friend", "Cricket Basics", "Solar System", "Healthy Habits", "Animals & Birds", "School Picnic"];

export default function QuizBuilder() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  return (
    <div className="space-y-6 p-4">
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <div className="text-xs uppercase text-green-600 font-semibold">Learn Tab</div>
        <h2 className="text-2xl font-bold mt-2">Craft a custom quiz</h2>
        <p className="text-sm text-gray-600 mt-2">Pick a topic, choose difficulty, and we will build four fun questions instantly.</p>

        <div className="mt-4">
          <div className="text-xs text-gray-500">Step 1: Choose a topic</div>
          <input
            className="mt-2 w-full p-3 bg-gray-50 rounded-lg border"
            placeholder='e.g., "My school day" or "Planets in space"'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            maxLength={60}
          />
          <div className="flex gap-2 mt-3 flex-wrap">
            {sampleTopics.map((t) => (
              <button key={t} onClick={() => setTopic(t)} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="text-xs text-gray-500">Step 2: Pick a challenge level</div>
          <div className="mt-2 grid gap-3">
            <LevelCard label="Easy" desc="Short sentences & gentle vocabulary." selected={difficulty === "easy"} onClick={() => setDifficulty("easy")} />
            <LevelCard label="Medium" desc="Everyday situations with detail." selected={difficulty === "medium"} onClick={() => setDifficulty("medium")} />
            <LevelCard label="Hard" desc="Longer thinking and tricky choices." selected={difficulty === "hard"} onClick={() => setDifficulty("hard")} />
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-green-600 text-white p-4 rounded-lg">Friendly quiz with instant feedback: bite-sized explanation for every answer.</div>
        </div>

        <div className="mt-6">
          <button className="w-full py-3 rounded-full bg-gray-200 text-gray-600">Generate Quiz</button>
        </div>
      </div>
    </div>
  );
}

function LevelCard({ label, desc, selected, onClick }: { label: string; desc: string; selected?: boolean; onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`p-4 rounded-xl border ${selected ? "border-green-300 bg-green-50" : "bg-white"}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{label}</div>
          <div className="text-sm text-gray-500">{desc}</div>
        </div>
        {selected && <div className="text-green-600">Selected</div>}
      </div>
    </div>
  );
}
