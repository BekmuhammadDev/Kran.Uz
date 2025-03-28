import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import hundayKamaz from "../assets/images/hyundaiKamaz.svg";
import logoHunday from "../assets/images/logoHunday.svg";

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
    <section className="w-full h-[800px] bg-[#191919] text-center relative">
      <h2 className="text-3xl font-semibold text-[#FEDF51]">Avtovishkalar</h2>
      <div className="w-16 h-1 bg-[#FEDF51] mx-auto mt-2 mb-10"></div>

      <div className="relative flex-cols items-center justify-between w-full">
        {/* Katta card */}
        <div className="relative w-[60%] h-[500px] bg-[#2C2C2C] rounded-[30px] clip-right overflow-hidden p-10">
          {/* Logotip va nom */}
          <div className="absolute top-3">
            <img src={logoHunday} alt="Hyundai" className="w-12" />
          </div>
          <h3 className="absolute right-10 top-3 krone text-white">
            {vehicles[activeIndex].name}
          </h3>

          {/* Mashina rasmi */}
          <div className="flex items-center justify-center h-full">
            <img
              src={vehicles[activeIndex].image}
              alt={vehicles[activeIndex].name}
              className="w-[75%] object-contain absolute bottom-16 right-[100px]"
            />
          </div>

          {/* Yuk sig‘imi */}
          <div className="absolute bottom-10 left-[300px] transform -translate-x-1/2 flex items-center space-x-8">
            {vehicles[activeIndex].capacity.map((item, i) => (
              <div key={i} className="text-white text-center">
                <span className="krone font-normal text-[28px]">{item}</span>
                <p className="mont font-normal text-[20px] ">Yuk sig‘imi</p>
              </div>
            ))}
          </div>
        </div>

        {/* Karusel tugmalari */}
        <div className="absolute bottom-[30px] right-[600px] flex space-x-4 justify-center items-center">
          <button
            onClick={prevSlide}
            className="text-white border-[3px] border-solid p-3 rounded-full shadow-md"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="text-white border-[3px] border-solid p-3 rounded-full shadow-md"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Kichik parallelogram card */}
        <div className=" absolute parallelogram right-[250px] top-1/2 transform -translate-y-1/2 w-[473px] h-[140px] bg-[#2C2C2C] overflow-hidden">
          <img
            src={vehicles[(activeIndex + 1) % vehicles.length].image}
            alt="Next Vehicle"
            className="w-3/4 object-cover skew-x-[20deg]"
          />
        </div>
      </div>

      <style>
        {`
          .clip-left {
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
          }
          .parallelogram {
            width: 200px;
            height: 140px;
            transform: skew(-20deg);
            border-radius: 20px;
            background: #333;
          }
          .clip-right {
              clip-path: polygon(0% 0, 100% 0,75% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
}
