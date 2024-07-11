import React from "react";
import CardTemplate from "./CardTemplate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TemplatesSection() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="py-20 bg-[#F7F7F7] dark:bg-gray-800 font-sans section" name="template">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl text-primary font-semibold">
          Transform your work into art with our templates
        </h2>
        <p className="text-lg dark:text-gray-100">Our popular templates!</p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>

      <div className="slider-container mt-10 mx-20">
        <Slider {...settings}>
          <CardTemplate
            type="Developer"
            image={"homepageImg/developerImg.png"}
          />
          <CardTemplate
            type="Marketing"
            image={"homepageImg/marketingImg.png"}
          />
          <CardTemplate
            type="Business"
            image={"homepageImg/businessImg.png"}
          />
          <CardTemplate
            type="Photography"
            image={"homepageImg/photographyImg.png"}
          />
        </Slider>
      </div>
    </section>
  );
}

export default TemplatesSection;
