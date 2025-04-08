import React from "react";
import bgAbout from "../assets/images/bgAbout.svg";
import { IoCall } from "react-icons/io5";
import { FaUser, FaPhone } from "react-icons/fa";
import artel from "../assets/images/artel.svg";
import park from "../assets/images/park.svg";
import enter from "../assets/images/enter.svg";
import grand from "../assets/images/grand.svg";
import discover from "../assets/images/discover.svg";
import Footer from "../components/layouts/footer";

const About = () => {
  return (
    <div className="w-full">
      <section
        className="w-full h-[467px]"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="krone font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-[#fedf51] text-center">
            Biz haqimizda
          </h1>
        </div>
      </section>
      <section className="flex flex-col justify-center md:flex-row items-center p-10 md:p-20 text-white text-center md:text-left px-8 md:px-32 mont font-normal text-[20px] gap-20">
        <p className="md:w-3/4 text-center">
          Biz 2015-yildan buyon aholiga sifatli va ishonchli xizmat ko‘rsatib
          kelmoqdamiz. Shu kungacha ko‘plab yirik brendlar bilan hamkorlik
          qilib, mijozlarimizga eng samarali va qulay transport xizmatlarini
          taqdim etmoqdamiz. Tajribamiz va ishonchli texnikalarimiz bilan har
          qanday yuk tashish, qurilish hamda maxsus texnika buyurtmalarini tez
          va sifatli bajarishga kafolat beramiz.
        </p>
        <button className="w-[50px] h-[50px] rounded-full bg-[#fedf51] text-black hidden font-semibold md:flex justify-center items-center text-[24px]">
          <a href="tel:+998971114040">
            <IoCall />
          </a>
        </button>
      </section>
      <section
        className="flex w-full justify-center items-center py-20 rounded-[50px] md:rounding container mx-auto"
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
          <h1 className="krone font-normal text-[24px] md:text-[40px] text-[#fedf51]">
            Hamkorlarimiz
          </h1>
          <div className="space-x-8 animate-marquee flex items-center justify-around mt-20">
            <img src={artel} alt="" />
            <img src={park} alt="" />
            <img src={enter} alt="" />
            <img src={grand} alt="" />
            <img src={discover} alt="" />
            <img src={artel} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
