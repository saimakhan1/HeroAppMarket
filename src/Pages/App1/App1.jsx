import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const App1 = ({ app }) => {
  return (
    <div className="card1 w-[270px] h-[300px] text-center bg-blue-100 m-3 p-3 rounded-lg shadow-lg">
      <div className="cardImage1 mb-3">
        <img
          src={app.image}
          className="rounded-2xl h-[180px] w-[210px] mx-auto"
          alt=""
        />
      </div>
      <div className="cardTitle mb-3">{app.title}</div>
      <div className="cartButtons flex justify-around">
        <button className="btn bg-green-100">
          <img className="h-[20px]" src={downloadImg} alt="" />
          {app.downloads}
        </button>
        <button className="btn bg-purple-100">
          <img className="h-[20px]" src={ratingImg} alt="" />
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
