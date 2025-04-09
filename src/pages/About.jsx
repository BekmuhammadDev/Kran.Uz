import React from "react";
import bgAbout from "../assets/images/bgAbout.svg";
import { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { FaUser, FaPhone } from "react-icons/fa";
import artel from "../assets/images/artel.svg";
import park from "../assets/images/park.svg";
import enter from "../assets/images/enter.svg";
import grand from "../assets/images/grand.svg";
import discover from "../assets/images/discover.svg";
import Footer from "../components/layouts/footer";
import { sendCustomEmail } from "../components/SendEmail";
import { useTranslation } from "react-i18next";

const About = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState(""); // Yangi state qo'shildi
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async () => {
    if (!name || !number) {
      setMessage(t("redAlert"));
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    const response = await sendCustomEmail(name, number);
    setMessage(response.message); // Habarni set qilish

    // Xabarni 3 sekunddan keyin o'chirish
    setTimeout(() => {
      setMessage("");
    }, 3000);

    // Inputlarni tozalash
    if (response.success) {
      setName("");
      setNumber("");
    }
  };

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
            {t("about")}
          </h1>
        </div>
      </section>
      <section className="flex flex-col justify-center md:flex-row items-center p-10 md:p-20 text-white text-center md:text-left px-8 md:px-32 mont font-normal text-[20px] gap-20">
        <p className="md:w-3/4 text-center">{t("textabout1")}</p>
        <button className="w-[50px] h-[50px] rounded-full bg-[#fedf51] text-black hidden font-semibold md:flex justify-center items-center text-[24px]">
          <a href="tel:+998971114040">
            <IoCall />
          </a>
        </button>
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
              <p className="text-white font-semibold text-left">{t("name")}</p>
              <input
                type="text"
                placeholder={t("write_here")}
                className="bg-transparent text-gray-300 focus:outline-none w-full"
                pattern="[A-Za-z\u0400-\u04FF\s]+"
                inputMode="text"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value.replace(/[^A-Za-z\u0400-\u04FF\s]/g, "")
                  )
                }
                maxLength={20} // Maksimal uzunlikni 20 belgiga cheklash
              />
            </div>
          </div>

          {/* Telefon Input */}
          <div className="flex items-center space-x-3 flex-1 border-b md:border-b-0 md:border-r border-gray-500 pb-3 md:pb-0 pr-0 md:pr-6 w-full justify-center md:justify-start">
            <FaPhone className="text-white text-xl" />
            <div>
              <p className="text-white font-semibold text-left">
                {t("phone_number")}
              </p>
              <input
                type="tel"
                placeholder="+998 (99) 999 99 99"
                className="bg-transparent text-gray-300 focus:outline-none w-full"
                pattern="[0-9]+"
                inputMode="numeric"
                value={number}
                onChange={(e) => {
                  // Raqam kiritishda +998 avtomatik qo'shilsin
                  let input = e.target.value.replace(/[^0-9]/g, ""); // faqat raqamlarni qabul qilish
                  if (!input.startsWith("998")) {
                    input = "998" + input; // +998 ni avtomatik qo'shish
                  }
                  setNumber(input);
                }}
                maxLength={12} // Telefon raqamining maksimal uzunligini cheklash (+998 (99) 999 99 99 formatida)
              />
            </div>
          </div>

          {/* Buyurtma tugmasi */}
          <button
            className="bg-[#FEDF51] text-black font-semibold px-6 py-3 rounded-lg shadow-md w-full md:w-auto"
            onClick={handleSubmit}
          >
            {t("place_an_order")}
          </button>

          {/* Habarni ko'rsatish */}
          {message && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div
                className={`text-center text-white rounded-lg p-6 max-w-[90%] md:max-w-[500px] ${
                  message === "Xabar yuborildi!"
                    ? "bg-[#28a745]"
                    : "bg-[#FF4C4C]"
                }`}
              >
                {message}
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="bg-[#191919] py-16 text-center overflow-hidden flex items-center justify-around">
        <div className="overflow-hidden w-full">
          <h1 className="krone font-normal text-[24px] md:text-[40px] text-[#fedf51]">
            {t("our_partners")}
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
