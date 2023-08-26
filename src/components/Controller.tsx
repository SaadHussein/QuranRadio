import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsShuffle } from "react-icons/bs";
// import { FaPauseCircle } from "react-icons/fa";
// import { MdFavorite } from "react-icons/md";

const Controller: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center ml-6">
      <h3 className="text-black text-[20px] font-normal">PLAYING NOW</h3>
      <h1 className="md:text-[52px] text-[44px] font-bold">Choose Station</h1>
      <div className="w-[100%] flex items-center justify-center gap-12 mt-6">
        <MdFavoriteBorder size={30} className="cursor-pointer" />
        <FaPlayCircle size={48} className="cursor-pointer" />
        <BsShuffle size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Controller;
