import React, { useState } from "react";
import Logo from "../assets/QRadio.png";
import LanguageMenu from "./LanguageMenu";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux/es/exports";
import { toggleMenu } from "../redux/QRadio";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const openMenuHandler = () => {
    setOpenMenu((prevState: boolean) => !prevState);
    console.log(openMenu);
  };

  const stationMenuHandler = () => {
    dispatch(toggleMenu());
    console.log("Hi");
  };
  return (
    <div className="w-[100%] flex items-center justify-between">
      <div className="w-28 h-14">
        <img
          src={Logo}
          alt="Logo Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center mb-[8px]">
        <MdLanguage size={20} className="xsm:block hidden" />
        <p className="ml-1">Language</p>
        <div className="flex items-center justify-center relative ml-1">
          <IoIosArrowDown
            className="cursor-pointer"
            onClick={openMenuHandler}
          />
          {openMenu && <LanguageMenu />}
        </div>
        <p className="sm:hidden block ml-2" onClick={stationMenuHandler}>
          Stations
        </p>
      </div>
    </div>
  );
};

export default Header;
