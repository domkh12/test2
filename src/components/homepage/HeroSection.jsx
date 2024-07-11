import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { FaCheckCircle } from "react-icons/fa";
function HeroSection() {
  return (
    <section className="pb-20 font-sans sectoin dark:bg-gray-900" name="hero">
      <div className="flex justify-between items-center mx-20 mt-5">
        <div className="flex flex-col gap-7 w-[50%]">
          <h1 className="text-primary font-bold text-7xl">
            Almost Portfolios For You!
          </h1>
          <p className="text-xl font-medium dark:text-gray-100">
            A portfolio is a curated collection of materials that showcase your
            skills, accomplishments, and experience.
          </p>
          <p className="text-gray-700 dark:text-gray-400">
            Everything you need to build and grow any website all in one place .
          </p>
          <ButtonPrimary text={"Get Started"} />
        </div>
        <div className="w-[1200px] -mr-16">
          <img src="homepageImg/heroImg.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between mx-20">
        <div className="flex gap-3 justify-center items-center">
          <FaCheckCircle className="w-6 h-6 text-primary" />
          <p className="dark:text-gray-100">
            Build and edit your website without any coding or technical skills
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center 2xl:mr-[370px]">
          <FaCheckCircle className="w-6 h-6 text-primary" />
          <p className="dark:text-gray-100">Leverage custom modules to deliver a great user experience</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
