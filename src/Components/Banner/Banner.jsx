import React from "react";
import bannerImg from "../../assets/hero.png";
import Trust from "../../Pages/Trust/Trust";

const Banner = () => {
  return (
    <div>
      <div className="mx-auto text-center px-32 pt-10">
        <img src={bannerImg} alt="" />
      </div>
      <Trust></Trust>
    </div>
  );
};

export default Banner;
