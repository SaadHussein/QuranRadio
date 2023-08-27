import React, { useRef } from "react";
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
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const currentStation = useSelector(
    (state: stateManagment) => state.QRadio.currentStation
  );
  const isRunning = useSelector(
    (state: stateManagment) => state.QRadio.isRunning
  );

  const currentStationHandler = () => {
    if (isRunning) {
      dispatch(controlPlaying());
    }
    // dispatch(setCurrentStation({ name: "", url: "", id: "" }));
    dispatch(
      setCurrentStation({
        name: name,
        url: url,
        id: id,
      })
    );
    dispatch(toggleMenu());
    console.log("Hi");
    console.log(currentStation);
    dispatch(controlPlaying());
    isRunning ? audioRef.current?.play() : audioRef.current?.pause();
  };

  return (
    <div
      className="flex text-white items-center justify-start gap-5 hover:opacity-70 cursor-pointer"
      onClick={currentStationHandler}
    >
      <FaPlayCircle size={36} />
      <audio src={currentStation.url} autoPlay={false} ref={audioRef}></audio>
      <p className="lg:text-[24px] md:text-[18px] xsm:text-[16px] text-[10px] mr-2 font-bold">
        {name}
      </p>
    </div>
  );
};

export default StationItem;
