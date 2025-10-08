import React from "react";
import { useLoaderData } from "react-router";
import App1 from "../App1/App1";

const Apps = () => {
  const appData = useLoaderData();
  console.log(appData);
  return (
    <div className="py-14 c2">
      <div className="up1 flex justify-around items-center">
        <h2 className="text-left p-7 text-xl font-bold">(16) Apps Found</h2>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center ">
        {appData.map((app) => (
          <App1 key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
