import React from "react";
import bannerImg from "../../assets/hero.png";
import Trust from "../../Pages/Trust/Trust";

const Banner = () => {
  return (
    <div>
      <div className="mx-auto text-center px-4 sm:px-10 md:px-20 lg:px-32 pt-10">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full max-w-4xl mx-auto"
        />
      </div>
      <Trust />
    </div>
  );
};

export default Banner;
