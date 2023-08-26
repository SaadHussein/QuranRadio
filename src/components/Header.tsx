import React, { useState } from "react";
import Logo from "../assets/QRadio.png";
import LanguageMenu from "./LanguageMenu";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const openMenuHandler = () => {
    setOpenMenu((prevState: boolean) => !prevState);
    console.log(openMenu);
  };
  return (
    <div className=" flex items-center justify-between">
      <div className="w-28 h-14">
        <img
          src={Logo}
          alt="Logo Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center">
        <MdLanguage size={20} />
        <p className="ml-2">Language</p>
        <div className="flex items-center justify-center relative ml-6">
          <IoIosArrowDown
            className="cursor-pointer"
            onClick={openMenuHandler}
          />
          {openMenu && <LanguageMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
