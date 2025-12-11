import React, { useState } from "react";

const NowPlayingPlayer: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying((p) => !p);

  return (
    <div className="p-4 rounded-2xl bg-white shadow-sm">
      <div className="rounded-lg overflow-hidden border-4 border-white/60">
        <img
          src="/assets/tale.png"
          alt="now playing"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold">The Melody of Friendship</h2>
        <p className="text-sm text-gray-500">
          A heartwarming story about friendship and courage
        </p>

        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full">
          Test Your Understanding · 7 Questions
        </button>

        <div className="mt-4">
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              style={{ width: "12%" }}
              className="h-2 rounded-full bg-green-500"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="text-xs text-gray-500">0:00</div>
            <div className="text-xs text-gray-500">2:18</div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4">
            <button className="p-2 rounded-full bg-white shadow-sm">⟲</button>
            <button
              onClick={toggle}
              className="p-4 rounded-full bg-green-600 text-white"
            >
              {playing ? "⏸" : "▶"}
            </button>
            <button className="p-2 rounded-full bg-white shadow-sm">↻</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingPlayer;
