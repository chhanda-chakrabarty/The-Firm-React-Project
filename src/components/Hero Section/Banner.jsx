import React from "react";
import Button from "../CommonComponents/Button";
import Poster from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex-col items-center justify-between">
        {/* Heading */}
        <h1 className="bg-red-400 text-black text-2xl font-nunito">
          Get Bussiness Solutions with TheFirm.
        </h1>
        {/* Description */}
        <p className="text-black text-2xl font-nunito">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        {/* Button */}
        <Button />
      </div>
      <div>
        <picture>
          <img src={Poster} alt={Poster} />
        </picture>
      </div>
    </div>
  );
};

export default Banner;
