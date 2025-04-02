import React from "react";
import { useEffect, useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import Footer from "../components/layouts/footer";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import logoHunday from "../assets/images/logoHunday.svg";
import "./Home.css";
import SectionForHome from "../components/SectionForHome";
import Countdown from "../components/CountDown";
import mapImg from "../assets/images/map.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import Contact from "../components/forContact/Contact";
import artel from "../assets/images/artel.svg";
import park from "../assets/images/park.svg";
import enter from "../assets/images/enter.svg";
import grand from "../assets/images/grand.svg";
import discover from "../assets/images/discover.svg";
import Hyundai_55W from "../assets/images/hundayEks.svg";
import { NavLink } from "react-router-dom";

const home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="container mx-auto">
      <section className="text-white flex flex-col md:flex-row container m-auto px-5 md:px-10 overflow-hidden">
        {/* Chap tomondagi aside */}
        <motion.aside
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[25%] container m-auto hidden md:block pt-32"
        >
          <article className="relative md:top-[-150px] top-0">
            <ul className="text-center md:text-left">
              <li>
                <h1 className="krone font-normal text-[28px] md:text-[32px]">
                  550 000 UZS
                </h1>
                <p className="mont font-normal text-[16px] md:text-[20px]">
                  Soati
                </p>
              </li>
              <br />
              <li>
                <h1 className="krone font-normal text-[28px] md:text-[32px]">
                  41m (9m+)
                </h1>
                <p className="mont font-normal text-[16px] md:text-[20px]">
                  Uzunligi
                </p>
              </li>
              <br />
              <li>
                <h1 className="krone font-normal text-[28px] md:text-[32px]">
                  30 Tonna
                </h1>
                <p className="mont font-normal text-[16px] md:text-[20px]">
                  Og‘irligi
                </p>
              </li>
            </ul>
          </article>
          <article className="absolute md:relative">
            <h1 className="krone font-normal text-[28px] md:text-[32px]">
              5 soat
            </h1>
            <p className="mont font-normal text-[16px] md:text-[20px]">
              Minimal soat
            </p>
          </article>
        </motion.aside>
        <motion.aside
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[25%] text-center md:text-left mt-5 md:mt-0 order-2 md:order-none md:hidden"
        >
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2 md:block">
            <li>
              <h1 className="krone font-normal text-[18px] md:text-[32px]">
                550 000 UZS
              </h1>
              <p className="mont font-normal text-[14px] md:text-[20px]">
                Soati
              </p>
            </li>
            <li>
              <h1 className="krone font-normal text-[20px] md:text-[32px]">
                41m (9m+)
              </h1>
              <p className="mont font-normal text-[14px] md:text-[20px]">
                Uzunligi
              </p>
            </li>
            <li>
              <h1 className="krone font-normal text-[20px] md:text-[32px]">
                5 soat
              </h1>
              <p className="mont font-normal text-[14px] md:text-[20px]">
                Minimal soat
              </p>
            </li>
            <li>
              <h1 className="krone font-normal text-[20px] md:text-[32px]">
                30 Tonna
              </h1>
              <p className="mont font-normal text-[14px] md:text-[20px]">
                Og‘irligi
              </p>
            </li>
          </ul>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-full md:w-[170px] h-[50px] bg-[#fedf51] text-black rounded-[10px] mont font-semibold text-[18px] md:text-[20px] mt-5 md:hidden"
          >
            <NavLink to={"/services"}>Texnikalar</NavLink>
          </motion.button>
        </motion.aside>

        {/* O‘rta qism */}
        <div className="w-full md:w-[50%] md:h-[800px] secondGradient relative overflow-visible flex flex-col items-center justify-center pt-10 md:pt-16">
          <motion.h1
            className="krone font-thin text-[24px] md:text-[42px] text-center mb-5"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Hyundai 55W
          </motion.h1>
          <motion.img
            src={Hyundai_55W}
            alt="Hyundai 55W"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-[280px] h-[200px] md:w-[950px] md:h-[670px] relative md:bottom-[160px]"
          />
          <motion.button
            onClick={() => setIsModalOpen(true)}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-[150px] md:w-[170px] h-[40px] bg-[#fedf51] text-black rounded-[10px] mont font-semibold text-[18px] md:text-[20px] absolute md:bottom-[190px] hidden md:block"
          >
            <NavLink to={"/services"}>Texnikalar</NavLink>
          </motion.button>
        </div>

        {/* O‘ng tomondagi aside */}
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-[25%] px-5 md:px-10 pt-10 md:pt-32 relative hidden md:block"
        >
          <p className="mont font-normal text-[14px] md:text-[16px] leading-6 h-full">
            Website orqali buyurtma qoldiring va o‘zingizga qulay avtovishkani
            ijaraga oling. Qiziqtirgan savollar uchun murojat yuboring yoki
            telefon qiling.
          </p>
          <button className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full bg-[#fedf51] text-black font-semibold lg:flex justify-center items-center text-[20px] md:text-[24px] absolute md:top-0 md:mt-[580px] right-0 hidden md:block">
            <a href="tel:+998887024742">
              <IoCall />
            </a>
          </button>
        </motion.aside>
      </section>

      <section
        className="flex w-full mt-10 justify-center items-center py-10 rounding container mx-auto"
        style={{
          background: "linear-gradient(to bottom, #4B4B4B, #191919)",
        }}
      >
        <div className="bg-transparent md:bg-[#4B4B4B] rounded-2xl p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 w-[90%] md:w-[800px] h-auto shadow-lg mont text-center md:text-left">
          {/* Ism Input */}
          <div className="flex items-center space-x-3 flex-1 border-b md:border-b-0 md:border-r border-gray-500 pb-3 md:pb-0 pr-0 md:pr-6 w-full justify-center md:justify-start">
            <FaUser className="text-white text-xl" />
            <div>
              <p className="text-white font-semibold text-left">
                Sizning ismingiz
              </p>
              <input
                type="text"
                placeholder="Shu yerga yozing"
                className="bg-transparent text-gray-300 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Telefon Input */}
          <div className="flex items-center space-x-3 flex-1 border-b md:border-b-0 md:border-r border-gray-500 pb-3 md:pb-0 pr-0 md:pr-6 w-full justify-center md:justify-start">
            <FaPhone className="text-white text-xl" />
            <div>
              <p className="text-white font-semibold text-left">
                Telefon raqamingiz
              </p>
              <input
                type="text"
                placeholder="Shu yerga yozing"
                className="bg-transparent text-gray-300 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Buyurtma tugmasi */}
          <button className="bg-[#FEDF51] text-black font-semibold px-6 py-3 rounded-lg shadow-md w-full md:w-auto">
            Buyurtma qoldirish
          </button>
        </div>
      </section>
      <section className="bg-[#191919] py-16 text-center overflow-hidden flex items-center justify-around">
        <div className="overflow-hidden w-full">
          <div className="space-x-8 animate-marquee flex items-center justify-around">
            <img src={artel} alt="" />
            <img src={park} alt="" />
            <img src={enter} alt="" />
            <img src={grand} alt="" />
            <img src={discover} alt="" />
            <img src={artel} alt="" />
          </div>
        </div>
      </section>

      <Countdown />

      <SectionForHome />

      <section className="container mx-auto w-full h-[600px] flex flex-col md:flex-row justify-center items-center gap-10">
        <article className="text-center md:text-left">
          <h1 className="krone font-normal text-[36px] sm:text-[48px] leading-10 text-[#fedf51] mb-5">
            Biz bilan bog'lanish
          </h1>
          <div className="text-center md:text-left">
            <p className="mont font-normal text-[18px] sm:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoLocationOutline />
              </span>
              Bizning manzil
            </p>
            <p className="mont font-semibold text-[18px] sm:text-[20px] text-white">
              Amir Temur shox ko'chasi, 107 B-uy, Toshkent, O'zbekiston
            </p>
          </div>
          <div className="my-6 sm:my-8 text-center md:text-left">
            <p className="mont font-normal text-[18px] sm:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoMailOutline />
              </span>
              Elektron pochta manzil
            </p>
            <p className="mont font-semibold text-[18px] sm:text-[20px] text-white">
              example@mail.uz
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="mont font-normal text-[18px] sm:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoCallOutline />
              </span>
              Telefon
            </p>
            <p className="mont font-semibold text-[18px] sm:text-[20px] text-white">
              +998 00 000 00 00
            </p>
          </div>
        </article>

        <img
          src={mapImg}
          alt="Map"
          className="w-full sm:w-[400px] h-[300px] object-cover mt-8 sm:mt-0"
        />
      </section>

      <Footer />
    </main>
  );
};

export default home;
