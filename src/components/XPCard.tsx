import React from "react";

type Props = {
  name: string;
  level: number;
  xp: number;
  nextXp: number;
};

const XPCard: React.FC<Props> = ({ name, level, xp, nextXp }) => {
  const percent = Math.min(100, Math.round((xp / nextXp) * 100));
  return (
    <div className="bg-gradient-to-br from-[#2fc07a] to-[#20a86a] text-white p-4 rounded-2xl card-rounded">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs opacity-90">Good Night</div>
          <div className="text-xl font-semibold">{name}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs bg-white/10 px-2 py-1 rounded-md">PRO</div>
        </div>
      </div>

      <div className="mt-4 bg-white/10 p-3 rounded-lg">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">L{level}</div>
            <div>XP Progress</div>
          </div>
          <div className="text-right">
            <div className="text-sm">{xp}/{nextXp} XP</div>
            <div className="text-[12px] opacity-75">Next: L{level + 1}</div>
          </div>
        </div>
        <div className="w-full bg-white/20 h-2 rounded-full mt-3">
          <div className="bg-white h-2 rounded-full" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
};

export default XPCard;
