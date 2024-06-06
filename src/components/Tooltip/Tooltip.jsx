import React from "react";

const Tooltip = ({ title }) => {
  return (
    <>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-[50px] border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out text-black group-hover:scale-100">
        {title}
      </span>
    </>
  );
};

export default Tooltip;
