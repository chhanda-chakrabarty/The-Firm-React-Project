import React from "react";

const Button = ({ content, style }) => {
  return (
    <div>
      <button
        className={`px-5 font-nunito py-2.5 rounded-2 text-white text-[18px] font-bold border-0 p-3 rounded cursor-pointer ${style}`}
      >
        {/* {content || "Button"} */}
        {content ? content : "Button"}
      </button>
    </div>
  );
};

export default Button;
