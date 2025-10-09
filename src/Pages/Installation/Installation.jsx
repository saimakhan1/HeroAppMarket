import React, { useState, useEffect } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

  // Convert "6M" / "4.5K" / "50K" → number
  const convertDownloadsToNumber = (value) => {
    if (!value) return 0;
    const lower = value.toString().toLowerCase();
    if (lower.endsWith("m")) return parseFloat(lower) * 1_000_000;
    if (lower.endsWith("k")) return parseFloat(lower) * 1_000;
    return parseFloat(lower);
  };

  // Load installed apps
  useEffect(() => {
    const timer = setTimeout(() => {
      const storedApps =
        JSON.parse(localStorage.getItem("installedApps")) || [];
      const formatted = storedApps.map((app) => ({
        ...app,
        downloadsNumber: convertDownloadsToNumber(app.downloads),
      }));
      setInstalledApps(formatted);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Uninstall app
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  // Sort apps
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...installedApps].sort((a, b) => {
      if (!a.downloadsNumber)
        a.downloadsNumber = convertDownloadsToNumber(a.downloads);
      if (!b.downloadsNumber)
        b.downloadsNumber = convertDownloadsToNumber(b.downloads);
      return order === "high-low"
        ? b.downloadsNumber - a.downloadsNumber
        : a.downloadsNumber - b.downloadsNumber;
    });
    setInstalledApps(sorted);
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner text-secondary mr-2"></span>
        Loading...
      </div>
    );
  }

  return (
    <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 space-y-10">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Headline */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">My Installed Apps</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Manage all the apps you have installed from our platform.
        </p>
      </div>

      {/* Count & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-base sm:text-lg font-medium">
          Installed Apps: {installedApps.length}
        </div>
        <div>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border rounded-md px-3 py-2 bg-white shadow-sm text-sm sm:text-base"
          >
            <option value="">Sort by</option>
            <option value="high-low">High to Low</option>
            <option value="low-high">Low to High</option>
          </select>
        </div>
      </div>

      {/* App List */}
      <div className="space-y-6">
        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            No apps installed yet.
          </p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-lg"
            >
              {/* Left: App Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto text-center sm:text-left">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-cover mx-auto sm:mx-0"
                />
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {app.title}
                  </h2>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-gray-600 text-sm sm:text-base items-center">
                    <div className="flex items-center gap-1">
                      <img
                        src={downloadImg}
                        alt="downloads"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img
                        src={ratingImg}
                        alt="rating"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      />
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 text-sm sm:text-base w-full sm:w-auto"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
