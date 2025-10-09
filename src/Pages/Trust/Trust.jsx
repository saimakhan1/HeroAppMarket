import React from "react";
import TrendingApps from "../TrendingApss/TrendingApps";

const Trust = () => {
  return (
    <div>
      {/* Trusted by Section */}
      <div className="bg-[#9F62F2] text-white py-10 sm:py-14 px-4 sm:px-8 text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
          Trusted by Millions, Built for You
        </h1>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 text-center">
          {/* Total Downloads */}
          <div className="sec1">
            <p className="mb-2 text-base sm:text-lg opacity-90">
              Total Downloads
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold">29.6M</h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base opacity-90">
              21% More Than Last Month
            </p>
          </div>

          {/* Total Reviews */}
          <div className="sec1">
            <p className="mb-2 text-base sm:text-lg opacity-90">
              Total Reviews
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold">906K</h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base opacity-90">
              45% More Than Last Month
            </p>
          </div>

          {/* Total Apps */}
          <div className="sec1">
            <p className="mb-2 text-base sm:text-lg opacity-90">Total Apps</p>
            <h1 className="text-3xl sm:text-4xl font-bold">132+</h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base opacity-90">
              31% More Than Last Month
            </p>
          </div>
        </div>
      </div>

      {/* Trending Apps Section */}
      <TrendingApps />
    </div>
  );
};

export default Trust;
