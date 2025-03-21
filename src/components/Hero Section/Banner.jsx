import React from "react";
import Button from "../CommonComponents/Button";
// import Poster from "../../assets/banner-bg.png";

const Banner = () => {
  return (
    <div
      className={
        "bg-[url(./assets/banner-bg2.png)] h-[500px] bg-cover bg-no-repeat bg-center w-full"
      }
    >
      <div className="container mx-auto px-6 py-4">
        <div className="w-1/2 bg-red-600">
          <h1>
            Get Business
            <span className="block">Solutions with TheFirm.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
