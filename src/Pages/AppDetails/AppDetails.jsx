import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppNotFound from "./AppNotFound";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch("/appsData1.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((a) => a.id === parseInt(id));
        setApp(foundApp);

        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];
        if (installedApps.find((a) => a.id === parseInt(id))) {
          setInstalled(true);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-secondary text-2xl"></span>
      </div>
    );
  }

  if (!app) return <AppNotFound />;

  const chartData = app.ratings
    .map((r) => ({ star: r.name, count: r.count }))
    .reverse();

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.find((a) => a.id === app.id)) {
      const updatedApps = [...installedApps, app];
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* App Info */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1 space-y-4 w-full text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {app.title}
          </h1>
          <h2>
            <span className="text-gray-600">Developed by:</span>{" "}
            <span className="text-purple-700">{app.companyName}</span>{" "}
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1">
              <img
                src={downloadImg}
                alt="downloads"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span>{app.downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src={ratingImg}
                alt="rating"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span>{app.ratingAvg}</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src={reviewImg}
                alt="reviews"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <span>{app.reviews.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-2 sm:mt-4 px-6 py-2 rounded-md text-white font-semibold w-full md:w-auto ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : `install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Review Chart */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Ratings
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="star" />
            <Tooltip />
            <Bar dataKey="count" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-left">
          Description
        </h2>
        <p className="text-gray-700 text-justify text-sm sm:text-base md:text-lg hyphens-auto">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
