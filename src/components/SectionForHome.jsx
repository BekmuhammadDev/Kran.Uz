import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import hundayKamaz from "../assets/images/hyundaiKamaz.svg";
import logoHunday from "../assets/images/logoHunday.svg";
import smKamaz from "../assets/images/smKamaz.svg";
import { NavLink } from "react-router-dom";

const vehicles = [
  {
    name: "Avtovishka Daewoo Novus",
    image: hundayKamaz,
    capacity: ["300 KG", "25 METR", "40 METR"],
  },
  {
    name: "Avtovishka Hyundai",
    image: hundayKamaz,
    capacity: ["350 KG", "28 METR", "45 METR"],
  },
];

export default function Avtovishkalar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length
    );
  };

  return (
    <section className="container mx-auto w-full h-[700px] flex-col items-center justify-center py-20 overflow-hidden">
      <h1 className="krone text-center mb-10 font-normal text-[40px] text-[#fedf51]">
        Spec Texnikalar
      </h1>
      <div className="relative flex left-[180px]">
        <NavLink to={"/services"}>
          <div className="parallelogram smGradient w-[440px] h-[380px] gradient absolute">
            <h4 className="absolute krone font-normal text-[32px] text-white top-10 left-10">
              Avto Kran
            </h4>
          </div>
          <img
            src={smKamaz}
            alt=""
            className="absolute w-[580px] h-[400px] top-3 left-10 transition-transform duration-300 hover:scale-110"
          />
        </NavLink>
      </div>
      <div className="relative left-[850px]">
        <NavLink to={"/services"}>
          <div className="parallelogram smGradient w-[440px] h-[380px] gradient absolute">
            <h4 className="absolute krone font-normal text-[32px] text-white top-10 left-10">
              Ekskavator
            </h4>
          </div>
          <img
            src={smKamaz}
            alt=""
            className="absolute w-[580px] h-[400px] top-3 left-10 transition-transform duration-300 hover:scale-110"
          />
        </NavLink>
      </div>
    </section>
  );
}
