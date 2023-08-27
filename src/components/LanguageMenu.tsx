import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { stateManagment } from "../model/State";

const LanguageMenu: React.FC = () => {
  const ourData = useSelector((state: stateManagment) => state.QRadio.ourData);
  return (
    <div className="absolute overflow-y-scroll flex justify-center shadow-xl top-6 right-1 bg-white rounded-md w-24 h-60">
      <ul className="list-none">
        {ourData.language.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer py-1 px-[6px] hover:bg-gray-200"
          >
            {item.native}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageMenu;
