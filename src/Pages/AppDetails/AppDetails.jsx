// import React, { useState, useEffect } from "react";
// import { useLoaderData, useParams } from "react-router";
// import downloadImg from "../../assets/icon-downloads.png";
// import ratingImg from "../../assets/icon-ratings.png";
// import reviewImg from "../../assets/icon-review.png";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AppDetails = () => {
//   const { id } = useParams();
//   const [app, setApp] = useState(null);
//   const [installed, setInstalled] = useState(false);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time (e.g., fetching data)
//     const timer = setTimeout(() => setLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     fetch("/appsData1.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const foundApp = data.find((a) => a.id === parseInt(id));
//         setApp(foundApp);

//         // Check if installed
//         const installedApps =
//           JSON.parse(localStorage.getItem("installedApps")) || [];
//         if (installedApps.find((a) => a.id === parseInt(id))) {
//           setInstalled(true);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   // if (!app) return <p className="p-10 text-red-500">App not found</p>;
//   // if (!app) return <AppNotFound />;

//   // if (!app) {
//   //   return <AppNotFound />;
//   // }

//   const chartData = app.ratings
//     .map((r) => ({ star: r.name, count: r.count }))
//     .reverse();

//   const handleInstall = () => {
//     const installedApps =
//       JSON.parse(localStorage.getItem("installedApps")) || [];
//     if (!installedApps.find((a) => a.id === app.id)) {
//       const updatedApps = [...installedApps, app];
//       localStorage.setItem("installedApps", JSON.stringify(updatedApps));
//       setInstalled(true);
//       toast.success(`${app.title} installed successfully!`);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center ">
//         <span className="loading loading-spinner text-secondary"></span>
//         Loading{" "}
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 space-y-10">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* App Info */}
//       <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
//         <img
//           src={app.image}
//           alt={app.title}
//           className="w-48 h-48 rounded-xl object-cover"
//         />
//         <div className="flex-1 space-y-4">
//           <h1 className="text-3xl font-bold">{app.title}</h1>
//           <div className="flex gap-4">
//             <div className="flex items-center gap-1">
//               <img src={downloadImg} alt="downloads" className="h-6 w-6" />
//               <span>{app.downloads}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <img src={ratingImg} alt="rating" className="h-6 w-6" />
//               <span>{app.ratingAvg}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <img src={reviewImg} alt="reviews" className="h-6 w-6" />
//               <span>{app.reviews.toLocaleString()}</span>
//             </div>
//           </div>
//           <button
//             onClick={handleInstall}
//             disabled={installed}
//             className={`px-6 py-2 rounded-md text-white font-semibold ${
//               installed
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-green-500 hover:bg-green-600"
//             }`}
//           >
//             {installed ? "Installed" : "Install"}
//           </button>
//         </div>
//       </div>

//       {/* Review Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Reviews</h2>
//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart
//             layout="vertical"
//             data={chartData}
//             margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
//           >
//             <XAxis type="number" />
//             <YAxis type="category" dataKey="star" />
//             <Tooltip />
//             <Bar dataKey="count" fill="orange" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Description */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-left">Description</h2>
//         <p className="text-gray-700 text-left">{app.description}</p>
//       </div>
//     </div>
//   );
// };

// export default AppDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import your custom page
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
      <div className="flex justify-center ">
        <span className="loading loading-spinner text-secondary"></span>
        Loading{" "}
      </div>
    );
  }

  // ✅ Show AppNotFound if no app exists
  if (!app) return <AppNotFound></AppNotFound>;

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
    <div className="p-8 space-y-10">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* App Info */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-48 h-48 rounded-xl object-cover"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <img src={downloadImg} alt="downloads" className="h-6 w-6" />
              <span>{app.downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={ratingImg} alt="rating" className="h-6 w-6" />
              <span>{app.ratingAvg}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={reviewImg} alt="reviews" className="h-6 w-6" />
              <span>{app.reviews.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-md text-white font-semibold ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* Review Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
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
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-left">Description</h2>
        <p className="text-gray-700 text-left">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
