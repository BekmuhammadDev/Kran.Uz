import React from "react";
import { useEffect } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import Footer from "../components/layouts/footer";
import homeHunday from "../assets/images/homeHunday.svg";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import kranImg from "../assets/images/kranImg.svg";
import logoHunday from "../assets/images/logoHunday.svg";
import "./Home.css";
import SectionForHome from "../components/SectionForHome";
import Countdown from "../components/CountDown";
import mapImg from "../assets/images/map.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

const home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="container mx-auto">
      <section className="text-white flex container m-auto px-10 overflow-hidden">
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
                <h1 className="krone font-normal text-[32px]">550 000 UZS</h1>
                <p className="mont font-normal text-[20px]">Soati</p>
              </li>
              <br />
              <br />
              <li>
                <h1 className="krone font-normal text-[32px]">41m (9m+)</h1>
                <p className="mont font-normal text-[20px]">Uzunligi</p>
              </li>
              <br />
              <br />
              <li>
                <h1 className="krone font-normal text-[32px]">30 Tonna</h1>
                <p className="mont font-normal text-[20px]">Og‘irligi</p>
              </li>
            </ul>
          </article>
          <article className="absolute pt-32">
            <h1 className="krone font-normal text-[32px]">5 soat</h1>
            <p className="mont font-normal text-[20px]">Minimal soat</p>
          </article>
        </motion.aside>

        {/* O‘rta qism */}
        <div className="w-[50%] h-[800px] secondGradient relative overflow-visible flex-col items-center justify-center pt-16">
          <motion.h1
            className="krone font-thin text-[42px] text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Hyundai 55W
          </motion.h1>
          <motion.img
            src={homeHunday}
            alt=""
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-[950px] h-[670px] relative bottom-36"
          />
          <motion.button
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-[170px] h-[40px] bg-[#fedf51] text-black rounded-[10px] mont font-semibold text-[20px] relative left-[260px] top-[-190px]"
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
          <button className="w-[50px] h-[50px] rounded-full bg-[#fedf51] text-black font-semibold flex justify-center items-center text-[24px] absolute top-0 mt-[580px] right-0">
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
        <div className="bg-[#4B4B4B] rounded-2xl p-6 flex items-center space-x-6 w-[800px] h-auto shadow-lg mont">
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
      <Countdown />

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

      <section className="container mx-auto w-full h-[600px] flex justify-center items-center gap-10">
        <article className="">
          <h1 className="krone font-normal text-[48px] leading-10 text-[#fedf51] mb-5">
            Biz bilan bog'lanish
          </h1>
          <div>
            <p className="mont font-normal text-[20px] flex items-center gap-1 text-white">
              <span>
                <IoLocationOutline />
              </span>
              Bizning manzil
            </p>
            <p className="mont font-semibold text-[20px] text-white">
              Amir Temur shox ko'chasi, 107 B-uy, Toshkent, O'zbekiston
            </p>
          </div>
          <div className="my-8">
            <p className="mont font-normal text-[20px] flex items-center gap-1 text-white">
              <span>
                <IoMailOutline />
              </span>
              Elektron pochta manzil
            </p>
            <p className="mont font-semibold text-[20px] text-white">
              example@mail.uz
            </p>
          </div>{" "}
          <div>
            <p className="mont font-normal text-[20px] flex items-center gap-1 text-white">
              <span>
                <IoCallOutline />
              </span>
              Telefon
            </p>
            <p className="mont font-semibold text-[20px] text-white">
              +998 00 000 00 00
            </p>
          </div>
        </article>
        <img src={mapImg} alt="" />
      </section>

      <Footer />
    </main>
  );
};

export default home;
