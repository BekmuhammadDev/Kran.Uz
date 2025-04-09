import React from "react";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import "../../i18"
import Logo from "../../assets/public/Spectex_LOGO svg.svg"


const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#000000] text-white py-8 px-10 krone text-center">
      <div className="max-w-screen-2xl container mx-auto">
        <div className="flex flex-col mx-auto md:flex-row justify-between items-start gap-8">
          {/* Logo Section */}

          <div className="relative bottom-8">
            <img src={Logo} alt="" width={180} />
          </div>


          {/* Contacts Section */}
          <div className="w-full md:w-auto mont">
            <h2 className="text-lg font-semibold mb-3">{t("contacts")}</h2>
            <ul className="space-y-2 ">
              {t("yunusobod")}, {t("toshkent")}
              <li className="mt-5">+998 97 111 40 40</li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-base mont font-semibold mb-3">{t("links")}</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to={"/about"} className="hover:text-gray-300 mont">
                  {t("about")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services"} className="hover:text-gray-300 mont">
                  {t("techniqueses")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-lg font-semibold mb-3 mont">{t("media")}</h2>
            <ul className="flex items-center text-[24px] gap-2 justify-center">
              <li>
                <FaTelegramPlane />
              </li>
              <li>
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section footer svaeded */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm">2025 IPro Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
