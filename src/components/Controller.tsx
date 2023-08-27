import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsShuffle } from "react-icons/bs";
// import { FaPauseCircle } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { stateManagment } from "../model/State";
import { addToFavorite, removeFromFavorite } from "../redux/QRadio";

const Controller: React.FC = () => {
  const currentStation = useSelector(
    (state: stateManagment) => state.QRadio.currentStation
  );
  const favoriteRadios = useSelector(
    (state: stateManagment) => state.QRadio.favoriteRadios
  );

  const ifFavorite = favoriteRadios.filter(
    (item) => item.id === currentStation.id
  );

  console.log(ifFavorite);

  console.log(currentStation);

  const dispatch = useDispatch();

  const addFavoriteHandler = () => {
    console.log("Fuck");
    dispatch(
      addToFavorite({
        name: currentStation.name,
        id: currentStation.id,
        url: currentStation.url,
      })
    );
    console.log(favoriteRadios);
  };

  const removeFavoriteHandler = () => {
    console.log("Fuck");
    console.log(favoriteRadios);
    dispatch(
      removeFromFavorite({
        name: currentStation.name,
        id: currentStation.id,
      })
    );
  };

  return (
    <div className="flex flex-col items-start justify-center xsm:ml-6 ml-0">
      <h3 className="text-black text-[20px] font-normal">PLAYING NOW</h3>
      <h1 className="md:text-[52px] xsm:text-[44px] text-[32px] font-bold">
        {currentStation.name === "" ? "Choose Station" : currentStation.name}
      </h1>
      <div className="w-[100%] flex items-center justify-center gap-12 mt-6">
        {ifFavorite.length !== 0 ? (
          <MdFavorite
            size={30}
            className="cursor-pointer"
            onClick={removeFavoriteHandler}
          />
        ) : (
          <MdFavoriteBorder
            size={30}
            className="cursor-pointer"
            onClick={addFavoriteHandler}
          />
        )}

        {/* <MdFavoriteBorder
          size={30}
          className="cursor-pointer"
          onClick={addFavoriteHandler}
        /> */}

        <FaPlayCircle size={48} className="cursor-pointer" />
        <BsShuffle size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Controller;
