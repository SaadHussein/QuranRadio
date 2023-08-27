import React, { useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { stateManagment } from "../model/State";
import { setIsRunning } from "../redux/QRadio";

const StationItem: React.FC<{ name: string; url: string }> = ({
  name,
  url,
}) => {
  const isRunning = useSelector(
    (state: stateManagment) => state.QRadio.isRunning
  );
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioHandler = () => {};

  return (
    <div
      className="flex text-white items-center justify-start gap-5 hover:opacity-70 cursor-pointer"
      onClick={audioHandler}
    >
      <FaPlayCircle size={36} />
      <audio src={url} autoPlay={false} ref={audioRef}></audio>
      <p className="lg:text-[24px] md:text-[18px] xsm:text-[16px] text-[10px] mr-2 font-bold">
        {name}
      </p>
    </div>
  );
};

export default StationItem;
