import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <header className="container mx-auto h-20 py-7 pl-20 pr-20">
      <nav className="flex items-center justify-between bg-transparent">
        <NavLink to={"/"} className="krone font-normal text-[24px] text-white">
          KRAN
        </NavLink>
        <ul className="mont font-semibold text-[20px] flex gap-[72px] ml-40">
          <li>
            <NavLink to={"/about"} className="text-white text-xl font-semibold">
              Biz haqimizda
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className="text-white text-xl font-semibold"
            >
              Texnikalar
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white text-xl font-semibold">
              Aksiyalar
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white text-xl font-semibold">
              Hamkorlar
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-9">
          <div className="flex items-center gap-1 cursor-pointer">
            <IoEarthOutline color="white" fontSize={24} />
            <h2 className="text-white text-xl font-semibold">UZ</h2>
          </div>
          <button className="bg-[#FEDF51]  py-2 px-8 rounded-xl text-xl font-semibold">
            Bog‘lanish
          </button>
        </div>
      </nav>
    </header>
  );
};

export default header;
