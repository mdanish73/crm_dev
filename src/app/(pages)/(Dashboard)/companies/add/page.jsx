"use client";
import React, { useState } from "react";
import CompanyForms from "@/components/Forms/CompanyForms";
import CeoForm from "@/components/Forms/CeoForm";
import axios from "axios";

const Page = () => {
  const [form, setForm] = useState({});
  const [steps, setSteps] = useState(1);

  const handleCompanyFormSubmit = async (data) => {
    try {
      setForm({ ...form, company: { ...data } });
      setSteps(2);
    } catch (error) {
      console.log(error);
    }
  };
  async function CeoSubmit(data) {
    try {
      setForm({ ...form, ceo: { ...data } });
      const final = form
      console.log(final)
      const req = await axios.post("/api/creatingcompanyandceo",final)
      console.log(req.data)
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(form);
  return (
    <div className="px-5  text-secondaryText">
      {steps == 1 && <CompanyForms onSubmit={handleCompanyFormSubmit} />}
      {steps == 2 && (
        <CeoForm onSubmit={CeoSubmit} Step={steps} setSteps={setSteps} />
      )}
    </div>
  );
};

export default Page;
