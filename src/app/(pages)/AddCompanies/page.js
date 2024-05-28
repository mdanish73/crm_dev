import React from "react";
import CompanyForms from "@/components/Forms/CompanyForms";
import CeoForm from "@/components/Forms/CeoForm";


const page = () => {
  
  return (
    <div className="w-full h-screen py-10 px-20 overflow-hidden text-primaryText bg-primary_bg">
      {/* <CompanyForms /> */}
      <CeoForm/>
    </div>
  );
};

export default page;
