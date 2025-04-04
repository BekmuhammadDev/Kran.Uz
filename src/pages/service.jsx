import React, { useEffect, useState } from "react";
import "./Service.css";
import logoHunday from "../assets/images/logoHunday.svg";
import smKamaz from "../assets/images/smKamaz.svg";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import Footer from "../components/layouts/footer";
import tentovkaImg from "../assets/images/tentovka.svg";
import hundayEks from "../assets/images/Hyundai_55W.svg";
import mercedesManipul from "../assets/images/mersedesManipul.svg";
import karaAvto from "../assets/images/avto_kara.svg";
import shalandaPrit from "../assets/images/pritsep_shalanda.svg";
import shalandaKont from "../assets/images/kontenerovoz.svg";
import eksW140 from "../assets/images/Hyundai_140W.svg";
import eks145W from "../assets/images/Volvo_145W.svg";
import hundayManipull from "../assets/images/hundayManipull.svg";
import isuzuManipul from "../assets/images/isuzu_manipul.svg";

const Service = () => {
  const vehicleServices = [
    {
      id: 1,
      category: "Shalanda",
      name: "Tentovka shalanda",
      description:
        "Tentovka shalanda 30 tonnagacha bo'lgan yuklarni tashish uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "30 tonna",
      price: "2,000,000 UZS",
      minHours: null,
      advanceNotice: null,
      image: tentovkaImg,
    },
    {
      id: 2,
      category: "Ekskavator",
      name: "Hyundai 55W",
      description:
        "Hyundai 55W ekskavator qurilish va qazish ishlari uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "5 tonna",
      price: "500,000 UZS",
      minHours: 4,
      advanceNotice: "2 soat oldindan",
      image: hundayEks,
    },
    {
      id: 3,
      category: "Manipulyator Kran",
      name: "Mercedes",
      description:
        "Mercedes manipulyator kran yuk tashish va ko'tarish ishlari uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "8 tonna",
      price: "1,600,000 UZS",
      minHours: null,
      advanceNotice: null,
      image: mercedesManipul,
    },

    {
      id: 4,
      category: "Kara",
      name: "Avto Kara 3 tonna",
      description:
        "Avto Kara 3 tonna yuk tashish xizmati uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "3 tonna",
      price: "500,000 UZS",
      minHours: 4,
      advanceNotice: null,
      image: karaAvto,
    },
    {
      id: 5,
      category: "Shalanda",
      name: "Pritsep shalanda",
      description:
        "Pritsep shalanda 30 tonnagacha bo'lgan yuklarni tashish uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "30 tonna",
      price: "1,600,000 UZS",
      minHours: null,
      advanceNotice: null,
      image: shalandaPrit,
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
    },
    {
      id: 7,
      category: "Ekskavator",
      name: "Hyundai 140W",
      description:
        "Hyundai 140W ekskavator qurilish va qazish ishlari uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "7 tonna",
      price: "600,000 UZS",
      minHours: 5,
      advanceNotice: "2 soat oldindan",
      image: eksW140,
    },
    {
      id: 8,
      category: "Ekskavator",
      name: "Volvo 145W",
      description:
        "Volvo 145W ekskavator qurilish va qazish ishlari uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "8 tonna",
      price: "650,000 UZS",
      minHours: 5,
      advanceNotice: "2 soat oldindan",
      image: eks145W,
    },
    {
      id: 10,
      category: "Manipulyator Kran",
      name: "Hyundai",
      description:
        "Hyundai manipulyator kran yuk tashish va ko'tarish ishlari uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "4 tonna",
      price: "1,400,000 UZS",
      minHours: null,
      advanceNotice: null,
      image: hundayManipull,
    },
    {
      id: 11,
      category: "Manipulyator Kran",
      name: "Isuzu",
      description:
        "Isuzu manipulyator kran yuk tashish va ko'tarish ishlari uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "3 tonna",
      price: "1,300,000 UZS",
      minHours: null,
      advanceNotice: null,
      image: isuzuManipul,
    },

    // Kara (Trucks)
    {
      id: 12,
      category: "Kara",
      name: "Avto Kara 5 tonna",
      description:
        "Avto Kara 5 tonna yuk tashish xizmati uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "5 tonna",
      price: "600,000 UZS",
      minHours: 4,
      advanceNotice: null,
      image: karaAvto,
    },
    {
      id: 13,
      category: "Kara",
      name: "Avto Kara 10 tonna",
      description:
        "Avto Kara 10 tonna yuk tashish xizmati uchun mo'ljallangan. Shuning uchun biz buni xususiy mijozlarga ham, kichik qurilish guruhlariga ham, yirik doimiy mijozlarga ham tavsiya qilamiz.",
      capacity: "10 tonna",
      price: "800,000 UZS",
      minHours: 6,
      advanceNotice: null,
      image: karaAvto,
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

  return (
    <div className="relative w-full min-h-screen bg-[#191919] overflow-hidden text-white pt-10 container mx-auto">
      {/* Main Carousel Section */}
      <section className="grid-col md:flex relative">
        <div className="w-[420px] h-[300px] gradient relative right-0 md:w-[670px] md:h-[505px] lg:h-[600px] lg:w-[70%] bg-gray-500 text-white py-10 px-20 text-center clip-shape"></div>

        <div className="absolute left-0 lg:p-10 md:p-5 flex-col items-center h-[600px] top-0">
          <div className="flex items-center justify-around pb-10">
            <img
              src={logoHunday}
              alt="Hyundai Logo"
              className="hidden md:block"
            />
            <h2 className="krone font-normal text-[18px] md:text-[24px] ml-20 hidden md:block">
              {currentVehicle.category}
            </h2>
          </div>
          <img
            src={currentVehicle.image || mercedesManipul}
            alt={currentVehicle.name}
            className="relative w-[490px] h-[345px] md:w-[405px] md:h-[348px] md:top-[20] lg:w-[800px] lg:h-[650px] bottom-16 lg:bottom-36 lg:left-16"
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
              <div className="w-[300px] flex-col md:gap-10 krone relative top-[300px] md:hidden pl-[50px]">
                <div className="flex w-[200px] items-center justify-center gap-5">
                  <article className="flex flex-col items-center">
                    <h1 className="font-normal text-[14px] md:text-[18px] lg:text-[28px]">
                      {currentVehicle.capacity || "N/A"}
                    </h1>
                    <p className="mont font-normal text-[16px] md:text-[20px] pt-1">
                      Yuk sig'imi
                    </p>
                  </article>
                  <article className="flex flex-col items-center">
                    <h1 className="font-normal text-[18px] md:text-[28px]">
                      {currentVehicle.minHours
                        ? `${currentVehicle.minHours} soat`
                        : "1 reys"}
                    </h1>
                    <p className="mont font-normal text-[16px] md:text-[20px]">
                      {currentVehicle.minHours ? "Minimal vaqt" : "Xizmat turi"}
                    </p>
                  </article>
                </div>

                <article className="w-[200px] flex flex-col items-center col-span-2 pt-2">
                  <h1 className="font-normal text-[16px] md:text-[28px]">
                    {currentVehicle.price}
                  </h1>
                  <p className="mont font-normal text-[16px] md:text-[20px]">
                    Narxi
                  </p>
                </article>
              </div>

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

        <div className="relative w-[350px] md:w-[450px] h-[520px] pl-[50px] p-[10px] md:mr-10 flex flex-col-reverse md:flex-col">
          <article className="text-center flex-col md:mb-[300px] order-2 md:order-1">
            <h1 className="krone font-normal text-[20px] md:text-[22px] lg:text-[24px] md:text-right text-center">
              {currentVehicle.name}
            </h1>
            <p className="mont font-normal text-[14px] md:text-[16px] leading-6 md:text-right text-center my-10">
              {currentVehicle.description}
            </p>
          </article>

          <div className="w-full flex-col items-center gap-4 md:absolute bottom-0 order-1 md:order-2 md:hidden">
            <div className="flex gap-5 mb-4 pl-24">
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
              onClick={() => setCurrentIndex(index)}
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
              <div className="absolute bottom-4 left-10 md:left-0text-white">
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
