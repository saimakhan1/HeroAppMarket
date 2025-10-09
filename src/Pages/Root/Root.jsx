import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      {/* Loading Spinner */}
      {navigation.state === "loading" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="loading loading-spinner text-primary text-4xl">
            <span className="loading loading-spinner text-secondary"></span>
          </div>
        </div>
      )}

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
