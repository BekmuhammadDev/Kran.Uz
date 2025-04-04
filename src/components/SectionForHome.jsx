import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import logoHunday from "../assets/images/logoHunday.svg";
import { NavLink } from "react-router-dom";
import eks145W from "../assets/images/Volvo_145W.svg";
import mercedesManipul from "../assets/images/mersedesManipul.svg";

const vehicles = [
  {
    name: "Avtovishka Daewoo Novus",
    image: eks145W,
    capacity: ["300 KG", "25 METR", "40 METR"],
  },
  {
    name: "Avtovishka Hyundai",
    image: eks145W,
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
    <section className="container mx-auto w-full py-20 bg-[#191919]">
      <h1 className="krone text-center mb-10 font-normal text-[22px] md:text-[28px] lg:text-[40px] text-[#fedf51]">
        Spec Texnikalar
      </h1>

      {/* Flex Container for Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* First Card */}
        <div className="w-full sm:w-[440px] h-[380px] bg-[#2a2a2a] rounded-lg overflow-hidden relative flex justify-center items-center">
          <NavLink to={"/services"} className="block w-full h-full">
            <div className="smGradient w-full h-full flex justify-center items-center relative">
              <img
                src={mercedesManipul}
                alt="Avto Kran"
                className="w-[350px] md:w-[400px] md:h-[280px] object-cover md:transition-transform md:duration-300 md:hover:scale-110"
              />
              <h4 className="absolute bottom-4 right-4 krone font-normal text-[24px] sm:text-[32px] text-white">
                Avto Kran
              </h4>
            </div>
          </NavLink>
        </div>

        {/* Second Card */}
        <div className="w-full sm:w-[440px] h-[380px] bg-[#2a2a2a] rounded-lg overflow-hidden relative flex justify-center items-center">
          <NavLink to={"/services"} className="block w-full h-full">
            <div className="smGradient w-full h-full flex justify-center items-center relative">
              <img
                src={eks145W}
                alt="Ekskavator"
                className="w-[370px] md:w-[400px] md:h-[280px] object-cover md:transition-transform md:duration-300 md:hover:scale-110 md:mb-10"
              />
              <h4 className="absolute bottom-4 right-4 krone font-normal text-[24px] sm:text-[32px] text-white">
                Ekskavator
              </h4>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
