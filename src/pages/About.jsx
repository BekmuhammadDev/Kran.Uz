import React from "react";
import bgAbout from "../assets/images/bgAbout.svg";

const About = () => {
  return (
    <div className="w-full container mx-auto">
      <section
        className="w-full h-[385px]"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="krone font-normal text-[40px] text-[#fedf51] text-center space-">
          Biz haqimizda
        </h1>
      </section>
    </div>
  );
};

export default About;
