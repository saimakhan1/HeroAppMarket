// import React from "react";
// import downloadImg from "../../assets/icon-downloads.png";
// import ratingImg from "../../assets/icon-ratings.png";
// import { Link } from "react-router";
// //import { Link } from "react-router-dom";

// const App1 = ({ app }) => {
//   return (
//     <Link to={`/appDetails/${app.id}`}>
//       <div className="card1 w-[270px] h-[300px] text-center bg-blue-100 m-3 p-3 rounded-lg shadow-lg">
//         <div className="cardImage1 mb-3">
//           <img
//             src={app.image}
//             className="rounded-2xl h-[180px] w-[210px] mx-auto"
//             alt=""
//           />
//         </div>
//         <div className="cardTitle mb-3">{app.title}</div>
//         <div className="cartButtons flex justify-around">
//           <button className="btn bg-[#F1F5E8] text-green-400">
//             <img className="h-[20px]" src={downloadImg} alt="" />
//             {app.downloads}
//           </button>
//           <button className="btn text-[#FF8811] bg-[#F1F5E8]">
//             <img className="h-[20px]" src={ratingImg} alt="" />
//             {app.ratingAvg}
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default App1;

import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const App1 = ({ app, installed, onInstall }) => {
  return (
    <div className="card1 w-[270px] h-[300px] text-center bg-blue-100 m-3 p-3 rounded-lg shadow-lg">
      <Link to={`/appDetails/${app.id}`}>
        <div className="cardImage1 mb-3">
          <img
            src={app.image}
            className="rounded-2xl h-[180px] w-[210px] mx-auto"
            alt=""
          />
        </div>
      </Link>
      <div className="cardTitle mb-3">{app.title}</div>
      <div className="cartButtons flex justify-around mb-3">
        <button className="btn bg-[#F1F5E8] text-green-400">
          <img className="h-[20px]" src={downloadImg} alt="" />
          {app.downloads}
        </button>
        <button className="btn text-[#FF8811] bg-[#F1F5E8]">
          <img className="h-[20px]" src={ratingImg} alt="" />
          {app.ratingAvg}
        </button>
      </div>
      {/* <button
        onClick={onInstall}
        disabled={installed}
        className={`w-full px-4 py-2 rounded-md font-semibold text-white ${
          installed
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {installed ? "Installed" : "Install"}
      </button> */}
    </div>
  );
};

export default App1;
