import React from "react";
import ControlSide from "./components/ControlSide";
import StationsSide from "./components/StationsSide";

const App: React.FC = () => {
  return (
    <div className="relative App overflow-hidden flex sm:flex-row flex-col items-center justify-between xl:max-w-screen-xl xl:mx-auto mx-5 my-auto">
      <ControlSide />
      <StationsSide />
    </div>
  );
};

export default App;
