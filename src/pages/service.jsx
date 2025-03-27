import React from "react";
import "./Service.css";
import logoHunday from "../assets/images/logoHunday.svg";
import HundayKamaz from "../assets/images/hyundaiKamaz.svg";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Service = () => {
  return (
    <div className="relative w-full h-screen text-white py-10 container mx-auto">
      <div className="flex">
        <div className="gradient relative right-0 h-[600px] w-[70%] bg-gray-500 text-white py-10 px-20 text-center clip-shape"></div>
        <div className="absolute left-0 p-10 flex-col items-center h-[600px]">
          <img src={logoHunday} alt="" />
          <img
            src={HundayKamaz}
            alt=""
            className="relative bottom-28 left-16"
          />
        </div>
        <div className="absolute top-[-5px] p-10 bottom-0 w-[50%] h-[600px]">
          <div className="flex gap-10 krone absolute bottom-0">
            <article>
              <h1 className="font-normal text-[28px]">300 KG</h1>
              <p className="mont font-normal text-[20px]">Yuk sig‘imi</p>
            </article>
            <article>
              <h1 className="font-normal text-[28px]">25 METR</h1>
              <p className="mont font-normal text-[20px]">Yuk sig‘imi</p>
            </article>
            <article>
              <h1 className="font-normal text-[28px]">40 METR</h1>
              <p className="mont font-normal text-[20px]">Yuk sig‘imi</p>
            </article>
          </div>
        </div>
        <div className="relative w-[450px] h-[520px] p-[10px] mr-10">
          <article className="text-center flex-col">
            <h1 className="krone font-normal text-[24px] ">
              Avtovishka Daewoo Novus
            </h1>
            <p className="mont font-normal text-[16px] leading-6 text-right my-10">
              Horyong SKY 450SF havo platformalari 45 metrgacha bo'lgan
              balandlikdagi har qanday qurilish-montaj ishlarini bajarish uchun
              ajralmas uskunadir. Shuning uchun biz buni xususiy mijozlarga ham,
              kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham
              tavsiya qilamiz.
            </p>
          </article>
          <div className="absolute w-full flex items-center justify-between bottom-0">
            <div className="flex gap-5">
              <TfiArrowCircleLeft className="w-[55px] h-[55px]" />
              <TfiArrowCircleRight className="w-[55px] h-[55px]" />
            </div>
            <button className="w-[174px] h-[41px] text-black bg-[#fedf51] rounded-[10px] mont font-semibold text-[20px]">
              Bog‘lanish
            </button>
          </div>
        </div>
      </div>
      <section className="w-full h-[450px]">
        <div>
          <div className="clip-shape-second w-[302px] h-[204px] gradient"></div>
        </div>
      </section>
    </div>
  );
};

export default Service;
