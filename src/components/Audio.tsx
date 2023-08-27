import React, { useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { stateManagment } from "../model/State";

const Audio: React.FC<{ url: string }> = ({ url }) => {
  const isRunning = useSelector(
    (state: stateManagment) => state.QRadio.isRunning
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  console.log("Fuck Me");
  console.log(isRunning, url);

  isRunning ? audioRef.current?.play() : audioRef.current?.pause();

  return (
    <>
      <audio src={url} autoPlay={false} ref={audioRef}></audio>
    </>
  );
};

export default Audio;
