import React from "react";
import Header from "./Header";
import Controller from "./Controller";
import Favorite from "./Favorite";

const ControlSide: React.FC = () => {
  return (
    <div className="sm:w-[50%] w-full h-[80vh] mt-12 flex items-start justify-start flex-col gap-28">
      <Header />
      <Controller />
      <Favorite />
    </div>
  );
};

export default ControlSide;
