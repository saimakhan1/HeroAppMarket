import React from "react";
import { NavLink } from "react-router";
import gPlay from "../../assets/gplay.jpg";
import sPlay from "../../assets/appstorelogo.jpg";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div className="c2 py-3">
      <div className="mx-auto my-5 ">
        <h1 className="text-2xl font-bold">
          We Build <br></br>
          <span className="text-[#9F62F2] font-bold">Productive</span> Apps
        </h1>
        <p className="text-gray-400">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.<br></br>Our goal is to turn your
          ideas into digital experiences that truly make an impact.{" "}
        </p>
        <div
          className=" flex text-center justify-center my-4 gap-5
      "
        >
          <NavLink
            to={"https://play.google.com/store/games?hl=en"}
            className={"bg-red-200"}
          >
            <button className="btn">
              <img src={gPlay} className="h-[20px] w-[20px]" alt="" />
              Google Play
            </button>
          </NavLink>
          <NavLink to={"https://www.apple.com/app-store/"}>
            <button className="btn">
              <img src={sPlay} className="h-[20px] w-[20px]" alt="" />
              App Store
            </button>
          </NavLink>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
