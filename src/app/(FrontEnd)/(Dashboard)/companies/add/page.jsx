"use client";
import React, { useState } from "react";
import CompanyForms from "@/components/Forms/CompanyForms";
import axios from "axios";
import { toast } from "sonner";
import CeoForm from "@/components/Forms/CeoForm";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({});
  console.log(form)
  const [steps, setSteps] = useState(1);
  const handleCompanyFormSubmit = async (data) => {
    console.log(data);
    try {
      setForm({ ...form, company: { ...data } });
      setSteps(2);
    } catch (error) {
      console.log(error);
    }
  };

  const CeoSubmit = async (ceo) => {
    console.log(ceo);
    setLoading(true);
    setError(null);
    try {
      const updateForm = { ...form, ceo: { ...ceo } };
      const { data } = await axios.post("/api/creating", updateForm, {
        headers: { "Content-Type": "application/json" },
      });

      if (!data.success) {
        if (data.errors) {
          console.log(data.errors);
          setError(data.errors);
        } else {
          setError({ global: data.message });
        }
        toast.error(data.message, {
          className: "toastError",
        });
      } else {
        toast.success(data.message, {
          className: "toastSuccess",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        const fieldErrors = error.response.data.errors;
        setError(fieldErrors);
      } else {
        setError({ global: "Already Exist" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4  m-auto text-secondaryText">
      {steps == 1 && (
        <CompanyForms
          formdata={form}
          onSubmit={handleCompanyFormSubmit}
          errors={error}
        />
      )}
      {steps == 2 && (
        <CeoForm
          onSubmit={CeoSubmit}
          Step={steps}
          setSteps={setSteps}
          loading={loading}
          errors={error}
        />
      )}
    </div>
  );
};

export default Page;
