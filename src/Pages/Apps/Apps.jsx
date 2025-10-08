// import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router";
// import App1 from "../App1/App1";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Apps = () => {
//   const appData = useLoaderData();
//   const [searchText, setSearchText] = useState("");
//   const [filteredApps, setFilteredApps] = useState(appData);
//   const [loading, setLoading] = useState(false);
//   const [installedApps, setInstalledApps] = useState(
//     JSON.parse(localStorage.getItem("installedApps")) || []
//   );

//   // Filter apps whenever searchText changes
//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => {
//       const filtered = appData.filter((app) =>
//         app.title.toLowerCase().includes(searchText.toLowerCase())
//       );
//       setFilteredApps(filtered);
//       setLoading(false);
//     }, 200); // small delay to simulate loading

//     return () => clearTimeout(timer);
//   }, [searchText, appData]);

//   // Handle Install
//   const handleInstall = (app) => {
//     if (!installedApps.find((a) => a.id === app.id)) {
//       const updatedApps = [...installedApps, app];
//       setInstalledApps(updatedApps);
//       localStorage.setItem("installedApps", JSON.stringify(updatedApps));
//       toast.success(`${app.title} installed successfully!`);
//     }
//   };

//   return (
//     <div className="py-14 c2">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header & Search */}
//       <div className="up1 flex flex-wrap justify-between items-center gap-4 px-7">
//         <h2 className="text-xl font-bold">
//           ({filteredApps.length}) Apps Found
//         </h2>

//         <div className="flex items-center border rounded-md px-3 py-1 bg-white shadow-sm">
//           <svg
//             className="h-5 w-5 opacity-50 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <g
//               strokeLinejoin="round"
//               strokeLinecap="round"
//               strokeWidth="2.5"
//               fill="none"
//               stroke="currentColor"
//             >
//               <circle cx="11" cy="11" r="8"></circle>
//               <path d="m21 21-4.3-4.3"></path>
//             </g>
//           </svg>
//           <input
//             type="search"
//             placeholder="Search apps..."
//             className="outline-none grow"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* App Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-8">
//         {loading ? (
//           <p className="col-span-full text-center text-gray-500 text-lg">
//             <span className="loading loading-spinner text-primary"></span>{" "}
//             Loading...
//           </p>
//         ) : filteredApps.length > 0 ? (
//           filteredApps.map((app) => (
//             <App1
//               key={app.id}
//               app={app}
//               installed={installedApps.some((a) => a.id === app.id)}
//               onInstall={() => handleInstall(app)}
//             />
//           ))
//         ) : (
//           <p className="col-span-full text-gray-500 text-center">
//             No App Found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Apps;

import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import App1 from "../App1/App1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apps = () => {
  const appData = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [filteredApps, setFilteredApps] = useState(appData);
  const [loading, setLoading] = useState(false);
  const [installedApps, setInstalledApps] = useState(
    JSON.parse(localStorage.getItem("installedApps")) || []
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = appData.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText, appData]);

  const handleInstall = (app) => {
    if (!installedApps.find((a) => a.id === app.id)) {
      const updatedApps = [...installedApps, app];
      setInstalledApps(updatedApps);
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
      toast.success(`${app.title} installed successfully!`);
    }
  };

  return (
    <div className="py-14 c2">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header & Search */}
      <div className="up1 flex flex-wrap justify-between items-center gap-4 px-7">
        <h2 className="text-xl font-bold">
          ({filteredApps.length}) Apps Found
        </h2>

        <div className="flex items-center border rounded-md px-3 py-1 bg-white shadow-sm">
          <svg
            className="h-5 w-5 opacity-50 mr-2"
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
          <input
            type="search"
            placeholder="Search apps..."
            className="outline-none grow"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-8">
        {loading ? (
          <p className="col-span-full text-center text-gray-500 text-lg">
            <span className="loading loading-spinner text-primary"></span>{" "}
            Loading...
          </p>
        ) : filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <App1
              key={app.id}
              app={app}
              installed={installedApps.some((a) => a.id === app.id)}
              onInstall={() => handleInstall(app)}
            />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No App Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Apps;
