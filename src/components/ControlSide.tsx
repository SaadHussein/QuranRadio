import React from "react";
import Header from "./Header";
import Controller from "./Controller";

const ControlSide: React.FC = () => {
  return (
    <div className="w-[50%] h-[100%] flex items-start justify-between flex-col gap-32">
      <Header />
      <Controller />
    </div>
  );
};

export default ControlSide;
