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
      const updateForm = { ...form, ceo: { ...ceo } };
      const { data } = await axios.post(
        "/api/creatingcompanyandceo",
        updateForm
      );
      if (data.success) {
        toast.success(data.message, {
          className: "toastSuccess",
        });
      } else {
        toast.error(data.message, {
          className: "toastError",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="px-4  m-auto text-secondaryText">
      {steps == 1 && <CompanyForms onSubmit={handleCompanyFormSubmit} />}
      {steps == 2 && (
        <CeoForm onSubmit={CeoSubmit} Step={steps} setSteps={setSteps} />
      )}
    </div>
  );
};

export default Page;