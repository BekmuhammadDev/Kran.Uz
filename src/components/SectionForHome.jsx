import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import logoHunday from "../assets/images/logoHunday.svg";
import { NavLink } from "react-router-dom";

import eks145W from "../assets/images/Volvo_145W.svg";
import mercedesManipul from "../assets/images/mercedesManipul.svg";
import hundayEks from "../assets/images/hundayEks.svg";
import isuzu_manipul from "../assets/images/isuzu_manipul.svg";
import isuzu_manipul_140W from "../assets/images/Hyundai_140W.svg";
import { useTranslation } from "react-i18next";
import xcmg30 from "../assets/images/xcmg30.svg";
import karaAvto from "../assets/images/avto_kara.svg";

export default function Avtovishkalar() {
  const { t } = useTranslation();

  const cards = [
    { title: t("kranCategory1"), image: mercedesManipul },
    { title: t("ekskavatorCategory1"), image: hundayEks },
    { title: t("avtoKranCategory1"), image: xcmg30 },
    { title: t("karaCategory2"), image: karaAvto },
  ];

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
        {t("spets")}
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 justify-center gap-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[340px] md:w-[380px] lg:w-[440px] bg-[#2a2a2a] rounded-lg overflow-hidden relative flex justify-center items-center h-[320px] sm:h-[360px] md:h-[380px]"
            >
              <NavLink to="/services" className="block w-full h-full">
                <div className="smGradient w-full h-full flex justify-center items-center relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 hover:scale-110"
                  />
                  <h4 className="absolute bottom-4 right-4 krone font-normal text-[20px] sm:text-[24px] md:text-[28px] text-white">
                    {card.title}
                  </h4>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
