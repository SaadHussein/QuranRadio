import React, { useEffect, useState } from "react";
import StationItem from "./StationItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { stateManagment } from "../model/State";
import { getRadioData } from "../api/api";
import { radio } from "../model/State";
import { setOurRadios } from "../redux/QRadio";

const StationsSide: React.FC = () => {
  const dispatch = useDispatch();
  const [radios, setRadios] = useState<{
    radios: radio[];
  }>({ radios: [] });
  const menuOpen = useSelector(
    (state: stateManagment) => state.QRadio.MenuOpen
  );
  const ourData = useSelector((state: stateManagment) => state.QRadio.ourData);
  const ourRadios = useSelector(
    (state: stateManagment) => state.QRadio.ourRadios
  );

  useEffect(() => {
    async function getOurRadioData() {
      const data = await getRadioData(ourData.language[0].radios);
      setRadios(data);
      dispatch(setOurRadios(data.radios));
    }

    getOurRadioData();
  }, [ourData.language, dispatch]);
  return (
    <>
      <div
        className={`stationSide shadow-2xl transition-all duration-300 sm:relative absolute sm:top-0 top-4 rounded-xl lg:w-[40%] sm:w-[45%] w-[100%] h-[85vh] mt-20 z-0 ${
          menuOpen ? "translate-x-[120%] sm:translate-x-[0%]" : ""
        } flex items-start justify-start`}
      >
        <div className="z-10 w-full px-6 py-7 h-full">
          <h1 className="text-white xsm:text-[32px] text-[22px] font-bold mb-6">
            Choose Station
          </h1>
          <div className="flex flex-col gap-6 overflow-y-auto overflow-x-hidden w-full h-[90%]">
            {(ourRadios.length === 0 ? radios.radios : ourRadios).map(
              (station) => (
                <StationItem
                  name={station.name}
                  url={station.url}
                  key={station.id}
                  id={station.id}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StationsSide;
