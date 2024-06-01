"use client";
import React from "react";
import ImageUploader from "@/components/Profile/ImageUploader";
import Data from "@/components/Profile/Data";
import { useParams } from "next/navigation";

const Page = () => {
  return (
    <div className="gap-10 flex flex-col md:flex-row justify-center items-center overflow-hidden">
      <div className="w-full md:w-auto">
        <ImageUploader />
      </div>
      <div className="">
        <Data/>
      </div>
    </div>
  );
};

export default Page;
