import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const App1 = ({ app }) => {
  return (
    <div className="card1 w-[270px] h-[280px] text-center bg-green-100 m-3 p-3">
      <div className="cardImage1">
        <img src={app.image} className="h-[200px] w-[200px] mx-auto" alt="" />
      </div>
      <div className="cardTitle">{app.title}</div>
      <div className="cartButtons flex justify-around">
        <button>
          <img src={downloadImg} alt="" />
          {app.downloads}
        </button>
        <button>
          <img src={ratingImg} alt="" />
          {app.ratingAvg}
        </button>
      </div>
    </div>
    // <div>
    //   <div className="card bg-green-100 w-[270px]  m-5 h-[300px] ">
    //     <figure className="">
    //       <img src={app.image} className="h-full w-[180px]" alt="Apps" />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">{app.title}</h2>

    //       <div className="buttonGroup flex gap-4 justify-around px-0">
    //         <button className="btn bg-gray-200 w-[60px] px-4">
    //           <img src={downloadImg} className="h-[20px] w-[20px]" alt="" />
    //           {app.downloads}
    //         </button>
    //         <button className="btn bg-purple-200 px-4">
    //           <img src={ratingImg} className="h-[20px] w-[20px]" alt="" />
    //           {app.ratingAvg}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <div key={app.id}>
    //     <h3>{app.title}</h3>
    //     <p>{app.companyName}</p>
    //     <p>{app.description}</p>
    //   </div> */}
    // </div>
  );
};

export default App1;
