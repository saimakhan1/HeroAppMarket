import React from "react";
import errorImage from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="justify-items-center">
      <img src={errorImage} alt=" errorImage" />
      <h1 className="text-3xl font-bold mb-5">Oops, page not found!</h1>
      <p className="text-gray-600 mb-5">
        The page you are looking for is not available.
      </p>
      <button className="btn bg-purple-400">Go Back</button>
    </div>
  );
};

export default ErrorPage;
