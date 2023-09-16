import React from "react";
import nameImg from "../assets/deepak-name1.png";

const Loader = () => {
  return (
    <div className="flex animate-page-up w-full  h-[calc(100%-3.5rem)] text-white z-50 bg-white absolute top-0 left-0 justify-center items-center">
      <div className="w-[800px] h-[100px]  overflow-hidden">
        <div className=" animate-text-up-normal px-8 w-full h-full flex items-center justify-center text-3xl font-bold uppercase tracking-[10px]">
          <img src={nameImg} alt="deepak" className="w-7/12" />
        </div>
        <div className=" animate-text-up-slow text-secondary w-full h-full flex items-center justify-center text-3xl font-bold uppercase tracking-[10px]">
          <span className="text-primaryGreen">Web </span>
          <span>Developer</span>
        </div>
        <div className=" animate-text-up-slower text-black  w-full h-full flex items-center justify-center text-lg font-medium">
          Happy To Help Brands & Organisations
        </div>
        <div className=" animate-text-up-slowest w-full h-full flex items-center justify-center text-3xl font-bold uppercase tracking-[10px]">
          <img src={nameImg} alt="deepak" className="w-7/12 animate-scale-up" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
