import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <span className="loading loading-spinner loading-lg text-[#9F62F2]"></span>
    </div>
  );
};

export default Loading;
