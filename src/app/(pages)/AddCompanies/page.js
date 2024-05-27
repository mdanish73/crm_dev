import CeoForm from "@/components/Forms/CeoForm";
import CompanyForms from "@/components/Forms/CompanyForms";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[100vh] bg-black/80">
      {/* <CompanyForms /> */}
      <CeoForm />
    </div>
  );
};

export default page;
