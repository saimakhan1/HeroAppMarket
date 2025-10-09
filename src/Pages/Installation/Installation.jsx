import React, { useState, useEffect } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  // Helper: convert "6M" / "4.5K" / "50K" → number
  const convertDownloadsToNumber = (value) => {
    if (!value) return 0;
    const lower = value.toString().toLowerCase();
    if (lower.endsWith("m")) return parseFloat(lower) * 1_000_000;
    if (lower.endsWith("k")) return parseFloat(lower) * 1_000;
    return parseFloat(lower);
  };

  // Load installed apps from localStorage
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const formatted = storedApps.map((app) => ({
      ...app,
      downloadsNumber: convertDownloadsToNumber(app.downloads),
    }));
    setInstalledApps(formatted);
  }, []);

  // Uninstall app
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  // Handle sort
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sorted = [...installedApps];
    if (order === "high-low") {
      sorted.sort((a, b) => b.downloadsNumber - a.downloadsNumber);
    } else if (order === "low-high") {
      sorted.sort((a, b) => a.downloadsNumber - b.downloadsNumber);
    }
    setInstalledApps(sorted);
  };

  return (
    <div className="py-14 px-7 space-y-10">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Headline */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">My Installed Apps</h1>
        <p className="text-gray-600">
          Manage all the apps you have installed from our platform.
        </p>
      </div>

      {/* Count & Sort */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="text-lg font-medium">
          Installed Apps: {installedApps.length}
        </div>
        <div>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border rounded-md px-3 py-1 bg-white shadow-sm"
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
          <p className="text-center text-gray-500">No apps installed yet.</p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg"
            >
              {/* Left: App Info */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">{app.title}</h2>
                  <div className="flex gap-4 text-gray-600 items-center">
                    <div className="flex items-center gap-1">
                      <img
                        src={downloadImg}
                        alt="downloads"
                        className="h-5 w-5"
                      />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={ratingImg} alt="rating" className="h-5 w-5" />
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
                className="px-5 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
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
