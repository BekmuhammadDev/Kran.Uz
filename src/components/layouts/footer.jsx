import React from "react";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-[#000000] text-white py-8 px-10 krone container mx-auto text-center">
      <div className="max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo Section */}
          <div className="w-full md:w-auto">
            <h1 className="text-2xl font-bold mb-4">KRAN</h1>
          </div>

          {/* Contacts Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-lg font-semibold mb-3">Kontaktlar</h2>
            <ul className="space-y-2">
              <li>Toshkent, Yunusobod</li>
              <li>+998 97 111 40 40</li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-lg font-semibold mb-3">Linklar</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to={"/about"} className="hover:text-gray-300">
                  Biz haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services"} className="hover:text-gray-300">
                  Hizmatlar
                </NavLink>
              </li>
              <li>
                <NavLink to={"/partners"} className="hover:text-gray-300">
                  Partners
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-auto">
            <h2 className="text-lg font-semibold mb-3">Medialar</h2>
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

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm">2025 IPro Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
