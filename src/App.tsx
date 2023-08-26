import React from "react";
import ControlSide from "./components/ControlSide";
import StationsSide from "./components/StationsSide";

const App: React.FC = () => {
  return (
    <div className="App flex items-center justify-between max-w-screen-xl m-auto">
      <ControlSide />
      <StationsSide />
    </div>
  );
};

export default App;
