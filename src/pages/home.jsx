import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaPhone } from "react-icons/fa";
import Footer from "../components/layouts/footer";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import "./Home.css";
import SectionForHome from "../components/SectionForHome";
import Countdown from "../components/CountDown";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import artel from "../assets/images/artel.svg";
import park from "../assets/images/park.svg";
import enter from "../assets/images/enter.svg";
import grand from "../assets/images/grand.svg";
import discover from "../assets/images/discover.svg";
import { NavLink } from "react-router-dom";
import { sendCustomEmail } from "../components/SendEmail";
import { useTranslation } from "react-i18next";
import "../i18";
import { BsCashCoin } from "react-icons/bs";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { PiTruckLight } from "react-icons/pi";
import tentovkaImg from "../assets/images/tentovka.svg";
import hundayEks from "../assets/images/Hyundai_55W.svg";
import mercedesManipul from "../assets/images/mercedesManipul.svg";
import karaAvto from "../assets/images/avto_kara.svg";
import shalandaPrit from "../assets/images/pritsep_shalanda.svg";
import shalandaKont from "../assets/images/kontenerovoz.svg";
import eksW140 from "../assets/images/Hyundai_140W.svg";
import eks145W from "../assets/images/Volvo_145W.svg";
import hundayManipull from "../assets/images/isuzu_manipul.svg";
import isuzuManipul from "../assets/images/isuzu_manipul.svg";
import xcmg30 from "../assets/images/xcmg30.svg";
import xcmg50 from "../assets/images/xcmg_50.svg";
import xcmg75 from "../assets/images/xcmg_75.svg";
import mercedesLogo from "../assets/images/mersedesLogo.svg";
import volvoLogo from "../assets/images/volvoLogo.svg";
import isuzuLogo from "../assets/images/isuzuLogo.svg";
import xcmgLogo from "../assets/images/xcmgLogo.svg";
import logoHunday from "../assets/images/logoHunday.svg";

const home = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const vehicleServices = [
    {
      id: 1,
      category: t("shalandaCategory1"),
      name: t("shalandaName1"),
      description: t("shalandaDescription1"),
      capacity: t("Shalandacapacity1"),
      price: t("shalandaPrice1"),
      minHours: null,
      advanceNotice: null,
      image: tentovkaImg,
      logo: logoHunday,
    },
    {
      id: 2,
      category: t("ekskavatorCategory1"),
      name: t("ekskavatorName1"),
      description: t("ekskavatorDescription1"),
      capacity: t("ekskavatorCapacity1"),
      price: t("ekskavatorPrice1"),
      minHours: 4,
      advanceNotice: t("ekskavatorAdvanceNotice1"),
      image: hundayEks,
      logo: logoHunday,
    },
    {
      id: 3,
      category: t("kranCategory1"),
      name: t("kranName1"),
      description: t("kranDescription1"),
      capacity: t("kranCapacity1"),
      price: t("kranPrice1"),
      minHours: null,
      advanceNotice: null,
      image: mercedesManipul,
      logo: mercedesLogo,
    },

    {
      id: 4,
      category: t("karaCategory1"),
      name: t("karaName1"),
      description: t("karaDescription1"),
      capacity: t("karaCapacity1"),
      price: t("karaPrice1"),
      minHours: 4,
      advanceNotice: null,
      image: karaAvto,
      logo: logoHunday,
    },
    {
      id: 5,
      category: t("shalandaCategory2"),
      name: t("shalandaName2"),
      description: t("shalandaDescription2"),
      capacity: t("shalandaCapacity2"),
      price: t("shalandaPrice2"),
      minHours: null,
      advanceNotice: null,
      image: shalandaPrit,
      logo: logoHunday,
    },
    {
      id: 6,
      category: "Shalanda",
      name: "Kontenerovoz shalanda",
      description:
        "Kontenerovoz shalanda 30 tonnagacha bo'lgan yuklarni tashish uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "30 tonna",
      price: "1,600,000 UZS",
      minHours: null,
      advanceNotice: null,
      image: shalandaKont,
      logo: logoHunday,
    },
    {
      id: 7,
      category: t("ekskavatorCategory1"),
      name: t("ekskavatorName1"),
      description: t("ekskavatorDescription1"),
      capacity: t("ekskavatorCapacity1"),
      price: t("ekskavatorPrice1"),
      minHours: 5,
      advanceNotice: t("ekskavatorAdvanceNotice1"),
      image: eksW140,
      logo: logoHunday,
    },
    {
      id: 8,
      category: t("ekskavatorCategory3"),
      name: t("ekskavatorName3"),
      description: t("ekskavatorDescription3"),
      capacity: t("ekskavatorCapacity3"),
      price: t("ekskavatorPrice3"),
      minHours: 5,
      advanceNotice: t("ekskavatorAdvanceNotice3"),
      image: eks145W,
      logo: volvoLogo,
    },
    {
      id: 10,
      category: t("kranCategory2"),
      name: t("kranName2"),
      description: t("kranDescription2"),
      capacity: t("kranCapacity2"),
      price: t("kranPrice2"),
      minHours: null,
      advanceNotice: null,
      image: hundayManipull,
      logo: logoHunday,
    },
    {
      id: 11,
      category: t("kranCategory3"),
      name: t("kranName3"),
      description: t("kranDescription3"),
      capacity: t("kranCapacity3"),
      price: t("kranPrice3"),
      minHours: null,
      advanceNotice: null,
      image: isuzuManipul,
      logo: isuzuLogo,
    },

    {
      id: 12,
      category: t("karaCategory2"),
      name: t("karaName2"),
      description: t("karaDescription2"),
      capacity: t("karaCapacity2"),
      price: t("karaPrice2"),
      minHours: 4,
      advanceNotice: null,
      image: karaAvto,
      logo: logoHunday,
    },
    {
      id: 13,
      category: t("karaCategory3"),
      name: t("karaName3"),
      description: t("karaDescription3"),
      capacity: t("karaCapacity3"),
      price: t("karaPrice3"),
      minHours: 6,
      advanceNotice: null,
      image: karaAvto,
      logo: logoHunday,
    },
    {
      id: 14,
      category: t("avtoKranCategory1"),
      name: t("avtoKranName1"),
      description: t("avtoKranDescription1"),
      capacity: t("avtoKranCapacity1"),
      price: t("avtoKranPrice1"),
      minHours: 5,
      advanceNotice: null,
      image: xcmg30,
      logo: xcmgLogo,
    },
    {
      id: 15,
      category: t("avtoKranCategory2"),
      name: t("avtoKranName2"),
      description: t("avtoKranDescription2"),
      capacity: t("avtoKranCapacity2"),
      price: t("avtoKranPrice2"),
      minHours: 5,
      advanceNotice: null,
      image: xcmg50,
      logo: xcmgLogo,
    },
    {
      id: 16,
      category: t("avtoKranCategory3"),
      name: t("avtoKranName3"),
      description: t("avtoKranDescription3"),
      capacity: t("avtoKranCapacity3"),
      price: t("avtoKranPrice3"),
      minHours: 5,
      advanceNotice: null,
      image: xcmg75,
      logo: xcmgLogo,
    },
  ];

  const filteredVehicles = vehicleServices.filter(
    (v) => v.image && v.name && v.description
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState(""); // Yangi state qo'shildi

  const handleSubmit = async () => {
    if (!name || !number) {
      setMessage("Iltimos, barcha maydonlarni to‘ldiring."); // Habarni set qilish
      setTimeout(() => {
        setMessage(""); // 3 sekunddan keyin xabarni tozalash
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === "partners") {
      const section = document.getElementById("partners");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo === "count") {
      const section = document.getElementById("count");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredVehicles.length);
    }, 3000); // har 5 sekundda yangilanadi

    return () => clearInterval(interval);
  }, []);

  const currentVehicle = filteredVehicles[currentIndex];

  return (
    <main>
      <section className="text-white pb-[100px] flex flex-col items-center md:flex-row px-5 md:px-10  relative">
        {/* Sariq diagonal chiziq - \ shaklda bo‘ladi */}
        <div className="absolute w-[300px] md:h-[1100px] lg:h-[1750px] bg-yellow-400 lg:left-32 z-0 transform md:-rotate-12 lg:-rotate-45 opacity-80  hidden md:block"></div>

        {/* Chap tomon - Ekskavator rasmi aha */}

        <div className=" flex items-center justify-between">
          <div className=" relative w-full md:w-[50%] lg:w-[50%] h-auto md:min-h-[800px] flex flex-col items-center justify-center md:pt-16 z-10">
            <motion.h1
              className="text zen font-thin text-[24px] mb-10 md:hidden"
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
              className="text zen  text-[20px]  md:text-[24px] lg:text-[48px] text-right mb-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              {currentVehicle.name}
            </motion.h1>
            <p className="mont font-normal text-[12px] md:text-[16px] lg:text-[24px] leading-6 md:text-right">
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
                className="w-[140px] md:w-[214px] lg:w-[170px] h-[35px] md:h-[44px] md:left-[50px] lg:h-[50px] bg-[#fedf51] text-black rounded-[10px] font-semibold text-[16px] md:text-[18px] lg:text-[20px] mt-9"
              >
                <NavLink to={"/services"}>{t("techniqueses")}</NavLink>
              </motion.button>
              <button className="w-[35px] fixed  md:w-[45px] lg:w-[50px] h-[35px] mt-10 ml-28  md:h-[45px] lg:h-[50px] rounded-full bg-[#fedf51] text-black font-semibold flex justify-center items-center text-[18px] md:text-[22px] lg:text-[24px]">
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
              <NavLink to={"/services"}>{t("techniqueses")}</NavLink>
            </motion.button>
          </div>
        </motion.aside>
      </section>

      <section
        id="partners"
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

      <section
        id="count"
        className="bg-[#191919] py-16 text-center overflow-hidden flex items-center justify-around"
      >
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

      <section
        style={{
          background: `radial-gradient(circle 300px at center left, rgba(254, 223, 81, 0.3), transparent 80%)`,
        }}
        className="mt-40 mb-20 md:h-[450px]"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap xl:flex-row justify-center">
            <div className="px-5 xl:px-0">
              <div className="flex gap-8  xl:border-r-2 pr-10 pb-10  border-b-2">
                <IoCallOutline color="yellow" fontSize={90} />
                <div>
                  <h1 className="text-white text-3xl font-bold mb-2">
                    {t("leave_call")}
                  </h1>

                  <p
                    className="text-white text-xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: t("select_techniques") }}
                  ></p>
                </div>
              </div>

              <div className="flex gap-8 xl:border-r-2 pr-10 pt-10 pb-10 xl:pb-0 ">
                <PiTruckLight color="yellow" fontSize={90} />
                <div>
                  <h1 className="text-white text-3xl font-bold mb-2">
                    {t("getting_technique")}
                  </h1>
                  <p
                    className="text-white text-xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: t("select_techniques") }}
                  ></p>
                </div>
              </div>
            </div>

            <div className="px-5 xl:px-0">
              <div className="flex gap-8 border-b-2 border-t-2 md:border-t-0 xl:pl-10 pr-10 pt-10 xl:pt-0 pb-10">
                <PiPencilSimpleLineLight color="yellow" fontSize={90} />
                <div>
                  <h1 className="text-white text-3xl font-bold mb-2">
                    {t("place_an_order")}
                  </h1>
                  <p
                    className="text-white text-xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: t("select_techniques") }}
                  ></p>
                </div>
              </div>

              <div className=" flex gap-8 xl:pl-10 pt-10 ">
                <BsCashCoin color="yellow" fontSize={90} />
                <div>
                  <h1 className="text-white text-3xl font-bold mb-2">
                    {t("payment")}
                  </h1>
                  <p
                    className="text-white text-xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: t("select_techniques") }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionForHome />

      <section className="w-full my-40 md:my-0 h-[600px] flex flex-col md:flex-row justify-between md:px-20 items-center md:gap-20">
        <article className="text-center md:text-left">
          <h1 className="krone font-normal text-[32px] sm:leading-[1.1] sm:text-[48px] md:text-[40px] lg:text-[48px] leading-10 text-[#fedf51] mb-5">
            {t("contact_us")}
          </h1>
          <div className="text-center md:text-left">
            <p className="mont font-normal text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoLocationOutline />
              </span>
              {t("adreess")}
            </p>
            <p className="mont font-semibold text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] text-white">
              {t("yunusobod")}, {t("toshkent")}, {t("Ozbekiston")}
            </p>
          </div>
          <div className="my-6 sm:my-8 text-center md:text-left">
            <p className="mont font-normal text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoMailOutline />
              </span>
              {t("email_address")}
            </p>
            <p className="mont font-semibold text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] text-white">
              spestexarendapro@gamil.com
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="mont font-normal text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] flex items-center gap-1 justify-center md:justify-start text-white">
              <span>
                <IoCallOutline />
              </span>
              {t("phone")}
            </p>
            <p className="mont font-semibold text-[16px] sm:text-[20px] md:text-[18px] lg:text-[20px] text-white">
              +998 97 111 40 40
            </p>
          </div>
        </article>

        <div className=" md:w-[600px] mt-20 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5995.790829453292!2d69.28601115!3d41.35328015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef53f5b5f6f0d%3A0x8a78d69d52d2b1c!2sYunusobod%2C%20Tashkent!5e0!3m2!1sen!2s!4v1712569500000!5m2!1sen!2s"
            width="100%"
            height="350"
            className="rounded-md"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default home;
