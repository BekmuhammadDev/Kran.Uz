import React from "react";
import { useEffect, useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import Footer from "../components/layouts/footer";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import "./Home.css";
import SectionForHome from "../components/SectionForHome";
import Countdown from "../components/CountDown";
import mapImg from "../assets/images/map.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import artel from "../assets/images/artel.svg";
import park from "../assets/images/park.svg";
import enter from "../assets/images/enter.svg";
import grand from "../assets/images/grand.svg";
import discover from "../assets/images/discover.svg";
import Hyundai_55W from "../assets/images/hundayEks.svg";
import { NavLink } from "react-router-dom";
import { vehicleServices } from "./service";

const filteredVehicles = vehicleServices.filter(
  (v) => v.image && v.name && v.description
);

const home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredVehicles.length);
    }, 3000); // har 5 sekundda yangilanadi

    return () => clearInterval(interval);
  }, []);

  const currentVehicle = filteredVehicles[currentIndex];

  return (
    <main className="">
      <section className="text-white pb-[100px] flex flex-col items-center md:flex-row px-5 md:px-10  relative">
        {/* Sariq diagonal chiziq - \ shaklda bo‘ladi */}
        <div className="absolute w-[300px] md:h-[1100px] lg:h-[1750px] bg-yellow-400 lg:left-32 z-0 transform md:-rotate-12 lg:-rotate-45 opacity-80  hidden md:block"></div>

        {/* Chap tomon - Ekskavator rasmi aha */}

        <div className=" flex items-center justify-between">
          <div className="container mx-auto relative w-full md:w-[50%] lg:w-[50%] h-auto md:min-h-[800px] flex flex-col items-center justify-center md:pt-16 z-10">
            <motion.h1
              className="text zen font-thin text-[22px] mb-10 md:hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              {currentVehicle.name}
            </motion.h1>
            <motion.img
              src={currentVehicle.image}
              alt={currentVehicle.name}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="w-[300px] h-[300px] md:w-[550px] md:h-[540px] lg:w-[550px] relative top-[-40px] md:left-[-50px] xl:w-[650px] xl:h-[700px]"
            />
          </div>

          {/* O'ng tomon - Matn va tugmalar */}
          <motion.aside
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-full lg:h-[550px] md:w-[50%] lg:w-[50%] flex-col relative hidden md:block z-10"
          >
            <motion.h1
              className="text zen font-thin text-[20px] md:text-[24px] lg:text-[42px] text-right mb-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              {currentVehicle.name}
            </motion.h1>
            <p className="mont font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:text-right">
              {currentVehicle.description}
            </p>

            {/* Texnikalar tugmasi */}

            {/* Telefon orqali bog‘lanish tugmasi */}
            <div className="absolute right-0">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="w-[140px] md:w-[214px] lg:w-[170px] h-[35px] md:h-[44px] md:left-[50px] lg:h-[50px] bg-[#fedf51] text-black rounded-[10px] font-semibold text-[16px] md:text-[18px] lg:text-[20px] mt-5"
              >
                <NavLink to={"/services"}>Texnikalar</NavLink>
              </motion.button>
              <button className="w-[35px]  md:w-[45px] lg:w-[50px] h-[35px] mt-10 ml-28  md:h-[45px] lg:h-[50px] rounded-full bg-[#fedf51] text-black font-semibold flex justify-center items-center text-[18px] md:text-[22px] lg:text-[24px]">
                <a href="tel:+998971114040">
                  <IoCall />
                </a>
              </button>
            </div>
          </motion.aside>
        </div>

        {/* Mobile aside */}
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full px-5 flex-col items-center justify-center relative top-[-220px] md:hidden lg:hidden"
        >
          <p className="mont font-normal text-[12px] text-center relative top-[190px]">
            {currentVehicle.description}
          </p>

          {/* Texnikalar tugmasi */}

          {/* Telefon orqali bog‘lanish tugmasi */}
          <div>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="w-full mt-10 h-[35px] bg-[#fedf51] text-black rounded-[10px] mont font-semibold text-[16px] relative top-[190px]"
            >
              <NavLink to={"/services"}>Texnikalar</NavLink>
            </motion.button>
          </div>
        </motion.aside>
      </section>
      <section
        className="flex w-full justify-center items-center md:py-20 relative rounded-[50px] md:rounding"
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
                pattern="[A-Za-z\u0400-\u04FF\s]+"
                inputMode="text"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(
                    /[^A-Za-z\u0400-\u04FF\s]/g,
                    ""
                  );
                }}
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
                type="tel"
                placeholder="Shu yerga yozing"
                className="bg-transparent text-gray-300 focus:outline-none w-full"
                pattern="[0-9]+"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
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
      <section className="w-full h-[600px] flex flex-col md:flex-row justify-center items-center gap-10">
        <article className="text-center md:text-left">
          <h1 className="krone font-normal text-[32px] sm:text-[48px] md:text-[40px] lg:text-[48px] leading-10 text-[#fedf51] mb-5">
            Biz bilan bog'lanish
          </h1>
          <div className="text-center md:text-left">
            <p className="mont font-normal text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoLocationOutline />
              </span>
              Bizning manzil
            </p>
            <p className="mont font-semibold text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] text-white">
              Amir Temur shox ko'chasi, 107 B-uy, Toshkent, O'zbekiston
            </p>
          </div>
          <div className="my-6 sm:my-8 text-center md:text-left">
            <p className="mont font-normal text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoMailOutline />
              </span>
              Elektron pochta manzil
            </p>
            <p className="mont font-semibold text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] text-white">
              example@mail.uz
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="mont font-normal text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoCallOutline />
              </span>
              Telefon
            </p>
            <p className="mont font-semibold text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] text-white">
              +998 97 111 40 40
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
