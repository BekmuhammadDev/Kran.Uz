import React, { useEffect, useState } from "react";
import "./Service.css";
import logoHunday from "../assets/images/logoHunday.svg";
import smKamaz from "../assets/images/smKamaz.svg";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import Footer from "../components/layouts/footer";
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
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVehicle = vehicleServices[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicleServices.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + vehicleServices.length) % vehicleServices.length
    );
  };

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#191919] overflow-hidden text-white pt-10">
      {/* Main Carousel Section */}
      <section className="grid-col md:flex relative items-center">
        <div className="w-[520px] h-[300px] gradient relative right-0 md:w-[670px] md:h-[505px] lg:h-[600px] lg:w-[70%] bg-gray-500 text-white py-10 px-20 text-center clip-shape"></div>

        <div className="absolute left-0 lg:p-10 md:p-5 flex-col items-center h-[600px] top-0">
          <div className="flex items-center justify-around pb-10">
            <img
              src={currentVehicle.logo}
              alt="Hyundai Logo"
              className="hidden md:block md:w-[46px] md:h-[28px] lg:w-[70px] lg:h-[40px]"
            />
            <h2 className="krone font-normal text-[18px] md:text-[24px] ml-20 hidden md:block">
              {currentVehicle.category}
            </h2>
          </div>
          <h1 className="krone font-normal text-[20px] md:text-[22px] lg:text-[24px] md:text-right text-center md:hidden">
            {currentVehicle.name}
          </h1>
          <img
            src={currentVehicle.image || mercedesManipul}
            alt={currentVehicle.name}
            className="relative w-[300px] left-10 h-[245px] md:w-[405px] md:h-[348px] md:top-[20] lg:w-[660px] lg:h-[500px] lg:bottom-20 lg:left-16"
          />
        </div>

        <div className="absolute top-[-5px] p-10 bottom-0 w-[50%] h-[600px]">
          {currentVehicle.specialLayout ? (
            <div className="md:flex gap-10 krone absolute bottom-0 hidden">
              {currentVehicle.specifications.map((spec, index) => (
                <article key={index}>
                  <h1 className="font-normal text-[20px] md:text-[28px]">
                    {spec.label}
                  </h1>
                  <p className="mont font-normal text-[16px] md:text-[20px]">
                    {spec.value}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div>
              {/* Mobile app */}
              <div className="w-[300px] flex-col krone relative top-[300px] md:hidden justify-center">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <article className="flex flex-col items-start border-b border-gray-500 pb-2">
                    <h1 className="font-normal text-[14px] md:text-[18px] lg:text-[28px]">
                      {currentVehicle.capacity || "N/A"}
                    </h1>
                    <p className="mont font-normal text-[16px] md:text-[20px] pt-1">
                      Yuk sig'imi
                    </p>
                  </article>
                  <article className="flex flex-col items-start border-b border-gray-500 pb-2">
                    <h1 className="font-normal text-[18px] md:text-[28px]">
                      {currentVehicle.minHours
                        ? `${currentVehicle.minHours} soat`
                        : "1 reys"}
                    </h1>
                    <p className="mont font-normal text-[16px] md:text-[20px]">
                      {currentVehicle.minHours ? "Minimal vaqt" : "Xizmat turi"}
                    </p>
                  </article>
                  <article className="flex flex-col items-start border-b border-gray-500 pb-2">
                    <h1 className="font-normal text-[16px] md:text-[28px]">
                      {currentVehicle.capacity}
                    </h1>
                    <p className="mont font-normal text-[16px] md:text-[20px]">
                      Ogirligi
                    </p>
                  </article>
                  <article className="flex flex-col items-start border-b border-gray-500 pb-2">
                    <h1 className="font-normal text-[16px] md:text-[28px]">
                      {currentVehicle.price}
                    </h1>
                    <p className="mont font-normal text-[16px] md:text-[20px]">
                      Narxi
                    </p>
                  </article>
                </div>
              </div>

              {/* Tablet Desktop */}

              <div className="w-full flex items-center md:gap-5 lg:gap-10 krone absolute md:bottom-0 lg:bottom-0 gap-3 opacity-0 md:opacity-100">
                <article>
                  <h1 className="font-normal text-[14px] md:text-[20px] lg:text-[28px]">
                    {currentVehicle.capacity || "N/A"}
                  </h1>
                  <p className="mont font-normal text-[16px] md:text-[18px] lg:text-[20px]">
                    Yuk sig'imi
                  </p>
                </article>
                <article>
                  <h1 className="font-normal text-[14px] md:text-[20px] lg:text-[28px]">
                    {currentVehicle.price}
                  </h1>
                  <p className="mont font-normal text-[16px] md:text-[18px] lg:text-[20px]">
                    Narxi
                  </p>
                </article>
                <article>
                  <h1 className="font-normal text-[14px] md:text-[20px] lg:text-[28px]">
                    {currentVehicle.minHours
                      ? `${currentVehicle.minHours} soat`
                      : "1 reys"}
                  </h1>
                  <p className="mont font-normal text-[16px] md:text-[18px] lg:text-[20px]">
                    {currentVehicle.minHours ? "Minimal vaqt" : "Xizmat turi"}
                  </p>
                </article>
              </div>
            </div>
          )}
        </div>

        <div className="relative md:top-[50px] w-[350px] md:w-[450px] h-[520px] pl-[50px] p-[10px] md:mr-10 flex flex-col-reverse md:flex-col">
          <article className="text-center flex-col md:mb-[300px] order-2 md:order-1">
            <h1 className="krone font-normal text-[20px] md:text-[22px] lg:text-[24px] md:text-right text-center hidden md:block">
              {currentVehicle.name}
            </h1>
            <p className="mont font-normal text-[14px] text-center md:text-[16px] leading-6 md:text-right md:my-10 relative">
              {currentVehicle.description}
            </p>
          </article>

          {/* Mobile */}

          <div className="w-full flex-col items-center gap-4 md:absolute bottom-0 order-1 md:order-2 md:hidden">
            <div className="flex gap-5 my-6 pl-20">
              <TfiArrowCircleLeft
                className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] cursor-pointer"
                onClick={prevSlide}
              />
              <TfiArrowCircleRight
                className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] cursor-pointer"
                onClick={nextSlide}
              />
            </div>
            <button className="w-full h-[35px] md:w-[174px] md:h-[41px] text-black bg-[#fedf51] rounded-[10px] mont font-semibold text-[18px] md:text-[20px]">
              Bog'lanish
            </button>
          </div>

          {/* Desktop Tablet */}
          <div className="w-full hidden md:flex lg:flex md:items-center gap-4 md:absolute md:justify-between bottom-0 order-1 md:order-2 pr-12">
            <div className="flex gap-5 mb-4 pt-[15px]">
              <TfiArrowCircleLeft
                className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] cursor-pointer"
                onClick={prevSlide}
              />
              <TfiArrowCircleRight
                className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] cursor-pointer"
                onClick={nextSlide}
              />
            </div>
            <button className="w-[150px] h-[35px] md:w-[174px] md:h-[41px] text-black bg-[#fedf51] rounded-[10px] mont font-semibold text-[18px] md:text-[20px]">
              Bog'lanish
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-auto pt-16 bg-[#191919] flex justify-center pb-10 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          {vehicleServices.slice(0, 4).map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="w-[320px] h-[204px] relative flex cursor-pointer items-center justify-center"
              onClick={() => {
                topFunction();
                setCurrentIndex(index);
              }}
            >
              <div className="smGradient w-[280px] h-[204px] gradient absolute"></div>
              {/* Logo chap tomonga surildi */}
              <img
                src={logoHunday}
                alt=""
                className="absolute left-10 top-4 w-[44px] h-[28px]"
              />
              <img
                src={vehicle.image || smKamaz}
                alt={vehicle.name}
                className="absolute bottom-5 w-[255px] h-[180px]"
              />
              <div className="absolute bottom-0 left-10 text-white">
                <h3 className="text-lg font-medium">{vehicle.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;
