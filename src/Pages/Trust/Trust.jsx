import React from "react";
import TrendingApps from "../TrendingApss/TrendingApps";

const Trust = () => {
  return (
    <div>
      <div className="bg-[#9F62F2] text-white py-14 ">
        <h1 className="text-3xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="mx-auto p-7 flex gap-14 justify-center ">
          <div className="sec1">
            <p className="mb-3">Total Downloads</p>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <p className="mt-3">21% More Than Last Month</p>
          </div>
          <div className="sec1">
            <p className="mb-3">Total Reviews</p>
            <h1 className="text-4xl font-bold">906K</h1>
            <p className="mt-3">45% More Than Last Month</p>
          </div>
          <div className="sec1">
            <p className="mb-3">Total Apps</p>
            <h1 className="text-4xl font-bold">132+</h1>
            <p className="mt-3">31% More Than Last Month</p>
          </div>
        </div>
      </div>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Trust;
