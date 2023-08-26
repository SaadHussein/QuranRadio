import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const StationItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex text-white items-center justify-start gap-7 hover:opacity-70 cursor-pointer">
      <FaPlayCircle size={36} />
      <p className="text-[24px] font-bold">{name}</p>
    </div>
  );
};

export default StationItem;
