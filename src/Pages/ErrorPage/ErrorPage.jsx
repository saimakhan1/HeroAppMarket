import React from "react";
import errorImage from "../../assets/error-404.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
  return (
    <div className="fullErrorPage">
      <Navbar></Navbar>
      <div className="justify-items-center my-10 bg-gray-50">
        <img src={errorImage} alt=" errorImage" />
        <h1 className="text-3xl font-bold mb-5">Oops, page not found!</h1>
        <p className="text-gray-600 mb-5">
          The page you are looking for is not available.
        </p>
        <button className="btn bg-purple-400">Go Back</button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
