import React from "react";
import StationItem from "./StationItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { stateManagment } from "../model/State";

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
  const menuOpen = useSelector(
    (state: stateManagment) => state.QRadio.MenuOpen
  );
  return (
    <>
      <div
        className={`stationSide shadow-2xl transition-all duration-300 sm:relative absolute sm:top-0 top-4 rounded-xl lg:w-[40%] sm:w-[45%] w-[100%] h-[85vh] mt-20 z-0 ${
          menuOpen ? "translate-x-[120%] sm:translate-x-[0%]" : ""
        } flex items-start justify-start`}
      >
        <div className="z-10 w-full px-6 py-7 h-full">
          <h1 className="text-white xsm:text-[32px] text-[22px] font-bold mb-6">
            Choose Station
          </h1>
          <div className="flex flex-col gap-6 overflow-y-auto w-full h-[90%]">
            {STATIONS.map((station) => (
              <StationItem
                name={station.name}
                key={station.name + Math.random()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StationsSide;
