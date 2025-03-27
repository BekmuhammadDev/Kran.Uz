import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <header className="container mx-auto h-20 py-7 px-5">
      <nav className="flex items-center justify-between ">
        <h1 className="text-white text-2xl font-normal">KRAN</h1>
        <ul className="flex gap-[72px] z-10 ml-40">
          <li>
            <NavLink to={"/"} className="text-white text-xl font-semibold">
              Biz haqimizda
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className="text-white text-xl font-semibold"
            >
              Hizmatlar
            </NavLink>
          </li>
          <li>
            <a className="text-white text-xl font-semibold" href="">
              Kontakt
            </a>
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
