// import React from "react";

// import appError from "../../assets/App-Error.png";

// const AppNotFound = () => {
//   return (
//     <div className=" text-center mx-auto">
//       <h1>App Not Found</h1>
//       <img src={appError} alt="appNotFound" />
//     </div>
//   );
// };

// export default AppNotFound;

import React from "react";
import appError from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="text-center mx-auto">
      <h1 className="text-3xl font-bold mb-4">App Not Found</h1>
      <img src={appError} alt="appNotFound" className="mx-auto block" />
    </div>
  );
};

export default AppNotFound;
