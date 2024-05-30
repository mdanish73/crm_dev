"use client";
import React, { useState } from "react";
import CompanyForms from "@/components/Forms/CompanyForms";
import CeoForm from "@/components/Forms/CeoForm";
import axios from "axios";
import { toast } from "sonner";

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
  async function CeoSubmit(ceo) {
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

  return (
    <div className="px-4  text-secondaryText">
      {steps == 1 && <CompanyForms onSubmit={handleCompanyFormSubmit} />}
      {steps == 2 && (
        <CeoForm onSubmit={CeoSubmit} Step={steps} setSteps={setSteps} />
      )}
    </div>
  );
};

export default Page;
