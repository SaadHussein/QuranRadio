import React, { useEffect } from "react";
import ControlSide from "./components/ControlSide";
import StationsSide from "./components/StationsSide";
import { getData } from "./api/api";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setData } from "./redux/QRadio";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function setOurData() {
      const data = await getData();
      console.log(data);
      dispatch(setData(data));
    }

    setOurData();
  }, [dispatch]);
  return (
    <div className="relative App overflow-hidden flex sm:flex-row flex-col items-center justify-between xl:max-w-screen-xl xl:mx-auto mx-5 my-auto">
      <ControlSide />
      <StationsSide />
    </div>
  );
};

export default App;
