import React, { useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { stateManagment } from "../model/State";
// import { controlPlaying } from "../redux/QRadio";

const Audio: React.FC<{ url: string }> = ({ url }) => {
  // const dispatch = useDispatch();
  const isRunning = useSelector(
    (state: stateManagment) => state.QRadio.isRunning
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  console.log("Fuck Me");
  console.log(isRunning, url);

  isRunning ? audioRef.current?.play() : audioRef.current?.pause();

  // dispatch(controlPlaying(true));

  return (
    <>
      <audio src={url} autoPlay={false} ref={audioRef}></audio>
    </>
  );
};

export default Audio;
