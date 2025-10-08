// import React, { useState, useEffect } from "react";
// import downloadImg from "../../assets/icon-downloads.png";
// import ratingImg from "../../assets/icon-ratings.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Installation = () => {
//   const [installedApps, setInstalledApps] = useState([]);
//   const [sortOrder, setSortOrder] = useState("high-low");

//   // Load installed apps from localStorage
//   useEffect(() => {
//     const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     setInstalledApps(storedApps);
//   }, []);

//   // Handle uninstall
//   const handleUninstall = (id) => {
//     const updatedApps = installedApps.filter((app) => app.id !== id);
//     setInstalledApps(updatedApps);
//     localStorage.setItem("installedApps", JSON.stringify(updatedApps));
//     toast.success("App uninstalled successfully!");
//   };

//   // Handle sort change
//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//   };

//   const sortedApps = [...installedApps].sort((a, b) => {
//     if (sortOrder === "high-low") return b.downloads - a.downloads;
//     else return a.downloads - b.downloads;
//   });

//   return (
//     <div className="py-14 px-7 space-y-10">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* 1. Headline and paragraph */}
//       <div className="text-center space-y-2">
//         <h1 className="text-3xl font-bold">My Installed Apps</h1>
//         <p className="text-gray-600">
//           Manage all the apps you have installed from our platform.
//         </p>
//       </div>

//       {/* 2. Installed apps count and sort */}
//       <div className="flex flex-wrap justify-between items-center gap-4">
//         <div className="text-lg font-medium">
//           Installed Apps: {installedApps.length}
//         </div>
//         <div>
//           <select
//             value={sortOrder}
//             onChange={handleSortChange}
//             className="border rounded-md px-3 py-1 bg-white shadow-sm"
//           >
//             <option value="high-low">Sort by Downloads: High-Low</option>
//             <option value="low-high">Sort by Downloads: Low-High</option>
//           </select>
//         </div>
//       </div>

//       {/* 3. Installed apps list */}
//       <div className="space-y-6">
//         {sortedApps.length === 0 ? (
//           <p className="text-center text-gray-500">No apps installed yet.</p>
//         ) : (
//           sortedApps.map((app) => (
//             <div
//               key={app.id}
//               className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg"
//             >
//               {/* Left side: Image + App Info */}
//               <div className="flex items-center gap-4">
//                 <img
//                   src={app.image}
//                   alt={app.title}
//                   className="w-20 h-20 rounded-lg object-cover"
//                 />
//                 <div className="space-y-1">
//                   <h2 className="text-xl font-semibold">{app.title}</h2>
//                   <div className="flex gap-4 text-gray-600 items-center">
//                     <div className="flex items-center gap-1">
//                       <img
//                         src={downloadImg}
//                         alt="downloads"
//                         className="h-5 w-5"
//                       />
//                       <span>{app.downloads}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <img src={ratingImg} alt="rating" className="h-5 w-5" />
//                       <span>{app.ratingAvg}</span>
//                     </div>
//                     <div>
//                       <span>{app.size} MB</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right side: Uninstall Button */}
//               <button
//                 onClick={() => handleUninstall(app.id)}
//                 className="px-5 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
//               >
//                 Uninstall
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Installation;

import React, { useState, useEffect } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");

  // Load installed apps from localStorage
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedApps = [...installedApps].sort((a, b) =>
    sortOrder === "high-low"
      ? b.downloads - a.downloads
      : a.downloads - b.downloads
  );

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
            <option value="high-low">Sort by Downloads: High-Low</option>
            <option value="low-high">Sort by Downloads: Low-High</option>
          </select>
        </div>
      </div>

      {/* App List */}
      <div className="space-y-6">
        {sortedApps.length === 0 ? (
          <p className="text-center text-gray-500">No apps installed yet.</p>
        ) : (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg"
            >
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
