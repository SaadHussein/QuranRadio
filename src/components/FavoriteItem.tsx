import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCurrentStation } from "../redux/QRadio";

const FavoriteItem: React.FC<{ name: string; url: string; id: string }> = ({
  name,
  url,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch(setCurrentStation({ name: name, url: url, id: id }))
      }
      className="shadow-md cursor-pointer w-[120px] h-[120px] p-2 flex-grow-0 flex-shrink-0 rounded-md duration-300 bg-blue-950 hover:bg-blue-900 text-white flex items-end"
    >
      {name}
    </div>
  );
};

export default FavoriteItem;
