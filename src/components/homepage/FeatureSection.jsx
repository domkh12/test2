import React from "react";
import CardFeature from "./CardFeature";
import { FiGlobe } from "react-icons/fi";
import { GrTemplate } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { FaSearchengin } from "react-icons/fa6";
import { HiOutlineShieldCheck } from "react-icons/hi";
function FeatureSection() {
  return (
    <section className="py-20 font-sans section dark:bg-gray-900" name="features">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl text-primary font-semibold">
          Why Choose Showcase?
        </h2>
        <p className="text-lg dark:text-gray-100">
          Showcase.com has everything you need. Whatever you want to do, we have
          a feature for it.
        </p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="grid grid-cols-3 mx-20 gap-4 mt-10">
        <CardFeature title='Public Domain Name' desc='Claim your unique public domain name to make your portfolio easily accessible to everyone online.' icon={<FiGlobe className="w-[100%] h-[100%] text-primary"/>}/>
        <CardFeature title='Free Templates' desc='Choose from a variety of professionally designed templates available for free, tailored to various professions.' icon={<GrTemplate className="w-[100%] h-[100%] text-primary" />}/>
        <CardFeature title='Responsive Templates' desc='All our templates are fully responsive, ensuring your portfolio looks great on any device.' icon={<FaMobileAlt className="w-[100%] h-[100%] text-primary"/>}/>
        <CardFeature title='Easy Customization' desc='Easily customize your portfolio with our intuitive tools. Update text, images, and social media links to make it uniquely yours' icon={<LuPencilLine className="w-[100%] h-[100%] text-primary"/>}/>
        <CardFeature title='SEO-Friendly' desc='Every template is optimized for search engines out of the box, helping you attract more visitors without any extra effort.' icon={<FaSearchengin className="w-[100%] h-[100%] text-primary"/>}/>
        <CardFeature title='Secure and Reliable' desc='Your data is secure with us. We ensure top-notch security and reliability, so you can focus on creating without worries.' icon={<HiOutlineShieldCheck className="w-[100%] h-[100%] text-primary"/>}/>
      </div>
    </section>
  );
}

export default FeatureSection;
