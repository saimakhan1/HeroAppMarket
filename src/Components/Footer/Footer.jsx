import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-14 px-6 sm:px-20">
      <div className="top flex justify-between">
        <div className="left flex">
          <img src={logoImg} className="w-[20px] h-[20px]" alt="" />
          <h1>HERO.IO</h1>
        </div>
        <div className="right">
          <h1>Social Links</h1>
          <div className="flex">
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <TiSocialLinkedinCircular />
            </a>
            <a href="#">
              <CiFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="bottom py-10">
        <h1>Copyright © 2025 - All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
