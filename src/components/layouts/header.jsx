import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEarthOutline, IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import OrderForm from "../forContact/Contact";
import { useTranslation } from "react-i18next";
import "../../i18";
import Logo from "../../assets/public/Spectex_LOGO svg.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("UZ");

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    i18n.changeLanguage(lang.toLowerCase()); // i18next uchun tilni almashtiramiz
  };

  const handleCardClick = () => {
    navigate("/", { state: { scrollTo: "partners" } });
  };

  const handleCountClick = () => {
    navigate("/", { state: { scrollTo: "count" } });
  };

  return (
    <>
      {/* ✅ Fixed va shisha effektli header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-10 backdrop-blur-lg shadow-md">
        <nav className="container mx-auto h-20 py-5 px-10 sm:px-6 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <NavLink to={"/"}>
            <img src={Logo} alt="" width={150} className="ml-5" />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex mont font-semibold text-[20px] gap-[72px] ml-40">
            <li>
              <Link
                to="partners"
                smooth={true}
                duration={500}
                className="text-white cursor-pointer text-xl font-semibold hover:text-[#FEDF51] transition-colors"
                onClick={handleCardClick}
              >
                {t("partners")}
              </Link>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="text-white text-xl font-semibold hover:text-[#FEDF51] transition-colors"
              >
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                className="text-white text-xl font-semibold hover:text-[#FEDF51] transition-colors"
              >
                {t("techniques")}
              </NavLink>
            </li>
            <li>
              <Link
                onClick={handleCountClick}
                smooth={true}
                duration={500}
                className="text-white text-xl cursor-pointer font-semibold hover:text-[#FEDF51] transition-colors"
              >
                {t("aksiya")}
              </Link>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-9">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-white text-xl font-semibold"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <IoEarthOutline color="white" fontSize={24} />
                <h2 className="text-white">{selectedLanguage}</h2>{" "}
                {/* <-- fix qilingan */}
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-20">
                  <ul className="bg-black rounded-md">
                    <li>
                      <button
                        onClick={() => handleLanguageChange("UZ")}
                        className="w-full text-center px-4 py-2 text-white"
                      >
                        UZ
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("RU")}
                        className="w-full text-center px-4 py-2 text-white"
                      >
                        RU
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <button
              className="bg-[#FEDF51] py-2 px-8 rounded-xl text-xl font-semibold hover:bg-[#fed035] transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              {t("contact")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <IoMenu size={32} />
          </button>
        </nav>
      </header>

      {/* ✅ Sahifa tarkibiga header balandligini hisobga olib padding qo‘shildi */}
      <div className="h-20"></div>

      {/* Mobile Menu (Sidebar) */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-[#191919] bg-opacity-90 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-[#191919] shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-4 flex justify-end">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoClose size={32} />
            </button>
          </div>

          <nav className="mt-8 px-6">

            <ul className="flex flex-col space-y-6">
              <li>
                <Link
                  to="partners"
                  smooth={true}
                  duration={500}
                  className="text-white cursor-pointer text-xl font-semibold hover:text-[#FEDF51] transition-colors"
                >
                  {t("partners")}
                </Link>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className="text-white text-xl font-semibold hover:text-[#FEDF51] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/services"}
                  className="text-white text-xl font-semibold hover:text-[#FEDF51] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("techniques")}
                </NavLink>
              </li>
              <li>
                <Link
                  to="count"
                  smooth={true}
                  duration={500}
                  className="text-white text-xl cursor-pointer font-semibold hover:text-[#FEDF51] transition-colors"
                >
                  {t("aksiya")}
                </Link>
              </li>
            </ul>

            {/* Language Dropdown */}
            <div className="relative top-5">
              <button
                className="flex items-center gap-1 text-white text-xl font-semibold"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <IoEarthOutline color="white" fontSize={24} />
                <h2 className="text-white">{selectedLanguage}</h2>{" "}
                {/* <-- fix qilingan */}
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-20">
                  <ul className="bg-black rounded-md">
                    <li>
                      <button
                        onClick={() => handleLanguageChange("UZ")}
                        className="w-full text-center px-4 py-2 text-white"
                      >
                        UZ
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleLanguageChange("RU")}
                        className="w-full text-center px-4 py-2 text-white"
                      >
                        RU
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button
              className="bg-[#FEDF51] py-2 px-8 rounded-xl mt-10 text-xl font-semibold hover:bg-[#fed035] transition-colors w-full"
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
            >
              {t("contact")}
            </button>

          </nav>

        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && <OrderForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
