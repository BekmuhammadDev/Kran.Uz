import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import Footer from "../components/layouts/footer";
import homeHunday from "../assets/images/homeHunday.svg";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import kranImg from "../assets/images/kranImg.svg";
import logoHunday from "../assets/images/logoHunday.svg";
import "./Home.css";
import SectionForHome from "../components/SectionForHome";
// ///

const home = () => {
  return (
    <main className="container mx-auto">
      <section className="text-white h-screen flex container m-auto px-10 -z-10 overflow-hidden">
        {/* Chap tomondagi aside */}
        <motion.aside
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[25%] h-full pt-24 container m-auto"
        >
          <article>
            <ul>
              <li>
                <h1 className="krone font-normal text-[32px]">50 Tonna</h1>
                <p className="mont font-normal text-[20px]">Yuk sig‘imi</p>
              </li>
              <br />
              <br />
              <li>
                <h1 className="krone font-normal text-[32px]">70 METR</h1>
                <p className="mont font-normal text-[20px]">Strello</p>
              </li>
              <br />
              <br />
              <li>
                <h1 className="krone font-normal text-[32px]">18 METR</h1>
                <p className="mont font-normal text-[20px]">Gusak</p>
              </li>
            </ul>
          </article>
          <article className="absolute bottom-0">
            <h1 className="krone font-normal text-[32px]">550 000</h1>
            <p className="mont font-normal text-[20px]">Narx 1 soatiga</p>
          </article>
        </motion.aside>

        {/* O‘rta qism */}
        <div className="w-[50%] secondGradient h-[900px] relative bottom-[80px] z-[1] overflow-visible flex flex-col items-center">
          <motion.h1
            className="krone font-thin text-[42px] text-center mt-[100px]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Avtovishka Daewoo Novus
          </motion.h1>
          <motion.img
            src={homeHunday}
            alt=""
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-[950px] h-[670px] z-10 relative bottom-36"
          />
          <motion.button
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-[170px] h-[40px] bg-[#fedf51] text-black rounded-[10px] mont font-semibold text-[20px] mt-5 absolute bottom-44"
          >
            Bog‘lanish
          </motion.button>
        </div>

        {/* O‘ng tomondagi aside */}
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-[25%] px-10 pt-20 relative"
        >
          <p className="mont font-normal text-[16px] leading-6 h-full">
            Website orqali buyurtma qoldiring va o‘zingizga qulay avtovishkani
            ijaraga oling. Qiziqtirgan savollar uchun murojat yuboring yoki
            telefon qiling.
          </p>
          <button className="w-[50px] h-[50px] rounded-full bg-[#fedf51] text-black font-semibold flex justify-center items-center text-[24px] absolute bottom-24 right-0">
            <IoCall />
          </button>
        </motion.aside>
      </section>
      <section
        className="flex w-full justify-center items-center py-10 rounding container mx-auto"
        style={{
          background: "linear-gradient(to bottom, #4B4B4B, #191919)",
        }}
      >
        <div className="bg-[#4B4B4B] rounded-2xl p-6 z-[1] flex items-center space-x-6 w-[800px] shadow-lg mont">
          {/* Ism Input */}
          <div className="flex items-center space-x-3 flex-1 border-r border-gray-500 pr-6">
            <FaUser className="text-white text-xl" />
            <div>
              <p className="text-white font-semibold">Sizning ismingiz</p>
              <input
                type="text"
                placeholder="Shu yerga yozing"
                className="bg-transparent text-gray-300 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Telefon Input */}
          <div className="flex items-center space-x-3 flex-1 border-r border-gray-500 pr-6">
            <FaPhone className="text-white text-xl" />
            <div>
              <p className="text-white font-semibold">Telefon raqamingiz</p>
              <input
                type="text"
                placeholder="Shu yerga yozing"
                className="bg-transparent text-gray-300 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Buyurtma tugmasi */}
          <button className="bg-[#FEDF51] text-black font-semibold px-6 py-3 rounded-lg shadow-md">
            Buyurtma qoldirish
          </button>
        </div>
      </section>
      <section className="w-full h-[800px] flex items-center justify-center bg-[#191919] py-10 container mx-auto">
        <div className="max-w-7xl w-full text-white flex flex-col items-center">
          {/* Sarlavha */}
          <h2 className="text-[40px] text-center font-normal text-[#FEDF51] relative mb-24 krone">
            Nega Kran Uz?
            <span className="block w-[456px] h-1 bg-[#FEDF51] mx-auto"></span>
          </h2>

          {/* Kontent qismi */}
          <div className="flex justify-between items-center w-full relative">
            {/* Chap tomondagi matnlar */}
            <div className="text-left space-y-16">
              <div>
                <h3 className="text-[32px] font-normal">Qayerda?</h3>
                <p className="text-gray-400 mont font-normal text-[20px]">
                  Butun Uzbekistan bo‘ylab ijaraga olish
                </p>
              </div>
              <hr className="border-gray-600 w-[456px]" />
              <div>
                <h3 className="text-[32px] font-normal">Tarif?</h3>
                <p className="text-gray-400 mont font-normal text-[20px]">
                  Kunlik, oylik yoki yillik tariflar asosida ijaraga olish
                </p>
              </div>
            </div>

            {/* Markazdagi rasm */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img
                src={kranImg}
                alt="Crane Hook"
                className="w-[445px] h-[485px]"
              />
            </div>

            {/* O‘ng tomondagi matnlar */}
            <div className="text-right space-y-16">
              <div>
                <h3 className="text-[32px] font-normal">Tarif?</h3>
                <p className="text-gray-400 mont font-normal text-[20px]">
                  Kunlik, oylik yoki yillik tariflar asosida ijaraga olish
                </p>
              </div>
              <hr className="border-gray-600 w-[456px] ml-auto" />
              <div>
                <h3 className="text-[32px] font-normal">Qayerda?</h3>
                <p className="text-gray-400 mont font-normal text-[20px]">
                  Butun Uzbekistan bo‘ylab ijaraga olish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#191919] py-16 text-center overflow-hidden">
        {/* Sarlavha */}
        <h2 className="text-[#FEDF51] krone font-normal text-[40px]">
          Bizning hamkorlar
        </h2>
        <div className="w-[553px] h-1 bg-[#FEDF51] mx-auto mt-2 mb-10"></div>

        {/* Logolar container */}
        <div className="space-y-6">
          {/* Yuqori qator (chapdan o‘ngga) */}
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#333] parallelogram p-6 rounded-2xl shadow-lg flex items-center justify-center w-[150px] h-[100px] mx-3"
                >
                  <img src={logoHunday} alt="Hyundai" className="w-24" />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i + 10}
                  className="bg-[#333] parallelogram p-6 rounded-2xl shadow-lg flex items-center justify-center w-[150px] h-[100px] mx-3"
                >
                  <img src={logoHunday} alt="Hyundai" className="w-24" />
                </div>
              ))}
            </div>
          </div>

          {/* Pastki qator (o‘ngdan chapga) */}
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i + 20}
                  className="bg-[#333] p-6 parallelogram rounded-2xl shadow-lg flex items-center justify-center w-[150px] h-[100px] mx-3"
                >
                  <img src={logoHunday} alt="Hyundai" className="w-24" />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee-reverse" aria-hidden="true">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i + 30}
                  className="bg-[#333] parallelogram p-6 rounded-2xl shadow-lg flex items-center justify-center w-[150px] h-[100px] mx-3"
                >
                  <img src={logoHunday} alt="Hyundai" className="w-24" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animatsiya uchun Tailwind CSS */}
      <style>
        {`
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-100%); }
    }

    @keyframes marquee-reverse {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }

    .animate-marquee {
      display: flex;
      width: 200%;
      animation: marquee 15s linear infinite;
    }

    .animate-marquee-reverse {
      display: flex;
      width: 200%;
      animation: marquee-reverse 15s linear infinite;
    }
  `}
      </style>

      <SectionForHome />

      <Footer />
    </main>
  );
};

export default home;
