import React from "react";

type Props = {
  label: string;
  icon?: React.ReactNode;
};

const CircleAction: React.FC<Props> = ({ label, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
        {icon ?? <div className="w-6 h-6 bg-gray-200 rounded" />}
      </div>
      <div className="text-xs mt-2">{label}</div>
    </div>
  );
};

export default CircleAction;
