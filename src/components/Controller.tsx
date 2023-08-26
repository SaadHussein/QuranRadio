import React from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BsShuffle } from "react-icons/bs";

const Controller: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center ml-6">
      <h3 className="text-black text-[20px] font-normal">PLAYING NOW</h3>
      <h1 className="text-[52px] font-bold">Choose Station</h1>
      <div className="w-[100%] flex items-center justify-center gap-12 mt-3">
        <MdFavoriteBorder size={30} className="cursor-pointer" />
        <FaPlayCircle size={48} className="cursor-pointer" />
        <BsShuffle size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Controller;
