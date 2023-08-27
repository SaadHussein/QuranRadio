import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCurrentStation, toggleMenu } from "../redux/QRadio";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { stateManagment } from "../model/State";

const StationItem: React.FC<{ name: string; url: string }> = ({
  name,
  url,
}) => {
  const dispatch = useDispatch();
  const currentStation = useSelector(
    (state: stateManagment) => state.QRadio.currentStation
  );

  const currentStationHandler = () => {
    dispatch(setCurrentStation({ name: "", url: "" }));
    dispatch(setCurrentStation({ name: name, url: url }));
    dispatch(toggleMenu());
    console.log("Hi");
    console.log(currentStation);
  };

  return (
    <div
      className="flex text-white items-center justify-start gap-5 hover:opacity-70 cursor-pointer"
      onClick={currentStationHandler}
    >
      <FaPlayCircle size={36} />
      <p className="lg:text-[24px] md:text-[18px] xsm:text-[16px] text-[10px] mr-2 font-bold">
        {name}
      </p>
    </div>
  );
};

export default StationItem;
