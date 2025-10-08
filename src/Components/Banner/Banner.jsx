import React from "react";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="mx-auto text-center px-32 pt-10">
      <img src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
