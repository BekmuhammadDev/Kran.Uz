import React from "react";
import { useEffect, useState } from "react";
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
import Contact from "../components/forContact/Contact";
import artel from "../assets/images/artel.svg";
import park from "../assets/images/park.svg";
import enter from "../assets/images/enter.svg";
import grand from "../assets/images/grand.svg";
import discover from "../assets/images/discover.svg";

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
      <section className="text-white flex container m-auto px-10 overflow-hidden">
        {/* Chap tomondagi aside */}
        <motion.aside
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[25%] container m-auto hidden md:block"
        >
          <article className="relative top-[-150px]">
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
          <article className="absolute">
            <h1 className="krone font-normal text-[32px]">5 soat</h1>
            <p className="mont font-normal text-[20px]">Minimal soat</p>
          </article>
        </motion.aside>

        {/* O‘rta qism */}
        <div className="md:w-[50%] md:h-[800px] secondGradient relative overflow-visible mdflex-col items-center justify-center pt-16">
          <motion.h1
            className="krone font-thin md:text-[42px] text-[28px] text-center"
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
            className="md:w-[950px] md:h-[670px] w-[350px] h-[253px] relative bottom-36 top-[10px]"
          />
          <motion.button
            onClick={() => setIsModalOpen(true)}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-[170px] h-[40px] bg-[#fedf51] text-black rounded-[10px] mont font-semibold text-[20px] relative md:left-[260px] top-[-190px]"
          >
            Texnikalar
          </motion.button>
        </div>

        {/* O‘ng tomondagi aside */}
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-[25%] px-10 pt-20 relative hidden md:block"
        >
          <p className="mont font-normal text-[16px] leading-6 h-full">
            Website orqali buyurtma qoldiring va o‘zingizga qulay avtovishkani
            ijaraga oling. Qiziqtirgan savollar uchun murojat yuboring yoki
            telefon qiling.
          </p>
          <button className="w-[50px] h-[50px] rounded-full bg-[#fedf51] text-black font-semibold flex justify-center items-center text-[24px] absolute top-0 mt-[580px] right-0">
            <a href="tel:+998887024742">
              {" "}
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

      <section className="bg-[#191919] py-16 text-center overflow-hidden flex items-center justify-around">
        <img src={artel} alt="" />
        <img src={park} alt="" />
        <img src={enter} alt="" />
        <img src={grand} alt="" />
        <img src={discover} alt="" />
        <img src={artel} alt="" />
      </section>
      <Countdown />

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
