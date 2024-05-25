"use client";
import React, { useState } from "react";

const ProfileCover = () => {
  const [imageSrc1, setImageSrc1] = useState(null);
  const [imageSrc2, setImageSrc2] = useState(null);

  const handleImageChange1 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc1(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc2(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleRemovePhoto1 = () => {
    console.log("click")
    setImageSrc1(null);
  };

  const handleRemovePhoto2 = () => {
    setImageSrc2(null);
  };

  return (
    <div className=" flex flex-col  ">
     <div className="relative justify-center items-center h-[150px] lg:w-8/12 bg-gray-700 lg:rounded-2xl md:rounded-2xl sm:rounded-none border-none">
     
          <img
            id="displayedImage1"
            src={imageSrc1}
            alt="image"
            className="w-full h-full object-cover lg:rounded-2xl md:rounded-2xl"
          />
        

        <input
          type="file"
          id="imageInput1"
          accept="image/*"
          onChange={handleImageChange1}
          className="hidden"
        />
        {!imageSrc1 ? (
          <button
            className="absolute bottom-1 p-2 right-1 text-xs bg-black text-white rounded-[12px] shadow-lg cursor-pointer hover:bg-gray-500 z-30"
            onClick={handleRemovePhoto1}
          >
            Remove image
          </button>
        ) : (
          <button
            htmlFor="imageInput1"
            className="absolute bottom-1 p-2 right-1 text-xs bg-black text-white rounded-[10px] shadow-md cursor-pointer hover:bg-gray-500"
          >
            Upload image
          </button>
        )}
      </div>
        <div>
        <div className="relative flex bottom-12 left-14">
        <div className="w-[110px] h-[130px] bg-gray-700 rounded-2xl ">
          <img
            id="displayedImage2"
            src={imageSrc2}
            alt="image"
            className="w-full h-full object-cover rounded-2xl "
          />
          <div className="flex mt-2 space-x-2">
            <input
              type="file"
              id="imageInput2"
              accept="image/*"
              onChange={handleImageChange2}
              className="hidden"
            />
            <label htmlFor="imageInput2">
              <span className="text-xs items-center text-green-600 cursor-pointer">
                Change
              </span>
            </label>
            <button
              className="text-xs text-blue-500 cursor-pointer"
              onClick={handleRemovePhoto2}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="ml-4 mt-10 flex flex-col justify-center">
          <h1 className="text-blue-500 text-lg">example name</h1>
          <div className="text-green-500 text-xs cursor-pointer">edit name</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileCover;
