import React from "react";
import StationItem from "./StationItem";

const STATIONS = [
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "SaadHusseinSaadHussein",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
  {
    name: "Saad",
  },
];

const StationsSide: React.FC = () => {
  return (
    <div className="stationSide transition-all duration-300 sm:relative absolute rounded-xl lg:w-[40%] sm:w-[45%] w-[100%] h-[85vh] mt-20 z-0 sm:flex items-start justify-start">
      <div className="z-10 w-full px-6 py-7 h-full">
        <h1 className="text-white text-[32px] font-bold mb-6">
          Choose Station
        </h1>
        <div className="flex flex-col gap-6 overflow-y-auto w-full h-[90%]">
          {STATIONS.map((station) => (
            <StationItem name={station.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationsSide;
