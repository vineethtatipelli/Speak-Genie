import React from "react";
import { useNavigate } from "react-router-dom";
import NowPlayingPlayer from "../components/NowPlayingPlayer";

export default function NowPlaying() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 pt-6 pb-28 bg-gradient-to-b from-[#f6fff9] to-white">
      {/* Back Button */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-white rounded-full p-2 shadow-sm"
        >
          ←
        </button>

        <div className="text-sm font-semibold">NOW PLAYING</div>

        <div className="flex items-center gap-3">
          <button className="bg-white rounded-full p-2 shadow-sm">📄</button>
          <button className="bg-green-600 text-white rounded-full p-2">
            🔔
          </button>
        </div>
      </div>

      <NowPlayingPlayer />
    </div>
  );
}
