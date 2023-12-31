import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { controlPlaying, setCurrentStation, toggleMenu } from "../redux/QRadio";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { stateManagment } from "../model/State";

const StationItem: React.FC<{ name: string; url: string; id: string }> = ({
  name,
  url,
  id,
}) => {
  const dispatch = useDispatch();
  const currentStation = useSelector(
    (state: stateManagment) => state.QRadio.currentStation
  );

  // const isRunning = useSelector(
  //   (state: stateManagment) => state.QRadio.isRunning
  // );

  const currentStationHandler = () => {
    dispatch(controlPlaying(false));
    dispatch(
      setCurrentStation({
        name: name,
        url: url,
        id: id,
      })
    );
    dispatch(toggleMenu());
    console.log(currentStation);
  };

  return (
    <div
      className="flex text-white items-center justify-start gap-5 hover:opacity-70 cursor-pointer"
      onClick={currentStationHandler}
    >
      <FaPlayCircle size={36} />
      <p className="lg:text-[24px] md:text-[20px] xsm:text-[18px] text-[15px] mr-2 font-bold">
        {name}
      </p>
    </div>
  );
};

export default StationItem;
