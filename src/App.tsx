import React from "react";
import ControlSide from "./components/ControlSide";
import StationsSide from "./components/StationsSide";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-12 py-8">
      <ControlSide />
      <StationsSide />
    </div>
  );
};

export default App;
