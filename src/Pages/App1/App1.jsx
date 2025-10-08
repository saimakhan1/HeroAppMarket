import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const App1 = ({ app }) => {
  return (
    <div>
      <div className="card bg-gray-200 w-[200px] shadow-sm p-1 m-2 h-[300px] ">
        <figure>
          <img src={app.image} alt="Apps" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{app.title}</h2>

          <div className="flex justify-around">
            <button className="btn bg-gray-200">
              <img src={downloadImg} className="h-[20px] w-[20px]" alt="" />
              {app.downloads}
            </button>
            <button className="btn bg-purple-200">
              <img src={ratingImg} className="h-[20px] w-[20px]" alt="" />
              {app.ratingAvg}
            </button>
          </div>
        </div>
      </div>
      {/* <div key={app.id}>
        <h3>{app.title}</h3>
        <p>{app.companyName}</p>
        <p>{app.description}</p>
      </div> */}
    </div>
  );
};

export default App1;
