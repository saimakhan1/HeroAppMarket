import React, { useEffect, useState } from "react";
import App1 from "../App1/App1";
import { Link } from "react-router";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("./appsData1.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error fetching apps:", err));
  }, []);

  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold mb-4">Trending Apps</h1>
      <p className="text-gray-600 mb-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {apps.slice(0, 8).map((app) => (
          <App1 app={app}></App1>
        ))}
      </div>
      {/* button div */}
      <Link to={"/apps"}>
        <div className="mt-6 flex justify-center items-center">
          <button className="px-12 w-[300px] mx-auto btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Show All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default TrendingApps;
