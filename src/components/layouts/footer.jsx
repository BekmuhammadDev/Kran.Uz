import React from "react";
import ilmoqImage from "../../assets/images/ilmoq.svg";
import smIlmoq from "../../assets/images/smIlmoq.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[235px] bg-[#000000] container mx-auto px-10 pl-20 text-white">
      <div className="flex justify-between items-center">
        <h1 className="krone font-normal text-[32px]">KRAN</h1>
        <article className="flex gap-20 mont font-semibold text-[16px] ml-40">
          <ul>
            <li>
              <NavLink to={"/"}>Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Hizmatlar</NavLink>
            </li>
            <li>
              <NavLink to={"/partners"}>Partners</NavLink>
            </li>
          </ul>
          <ul>
            <li>Telegram</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </article>
        <div className="flex items-center">
          <img
            src={ilmoqImage}
            alt=""
            className="w-[165px] h-[180px] relative top-[-6px] left-[95px] "
          />
          <img
            src={smIlmoq}
            alt=""
            className="w-[110px] h-[115px] relative top-[-36px]"
          />
        </div>
      </div>
      <p className="krone font-normal text-[16px] text-center">
        2025 iPro Group
      </p>
    </div>
  );
};

export default Footer;
