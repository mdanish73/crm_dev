// "use client";
// import React, { useEffect, useState } from "react";
// import CompanyForms from "@/components/Forms/CompanyForms";
// import axios from "axios";
// import { toast } from "sonner";
// import CeoForm from "@/components/Forms/CeoForm";

// const Page = () => {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({});
//   const [steps, setSteps] = useState(1);
//   const [duplicate, setDuplicate] = useState(null);



//   const handleCompanyFormSubmit = async (data) => {
//     try {
//       setForm({ ...form, company: { ...data } });
//       setSteps(2);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const CeoSubmit = async (ceo) => {
//     setLoading(true);

//     try {
//       const updateForm = { ...form, ceo: { ...ceo } };
//       const { data } = await axios.post("/api/creating", updateForm);
//       if (!data.success) {
//         if (data.field) {
//           console.log(`Duplication error in field: ${data.field}`);
//           const field = data.field;
//           setDuplicate(field)
//         }
//         toast.error(data.message, {
//           className: "toastError",
//         });
//       } else {
//         toast.success(data.message, {
//           className: "toastSuccess",
//         });
//       }
//     } catch (error) {
//       console.log(error)
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="px-4  m-auto text-secondaryText">
//       {steps == 1 && (
//         <CompanyForms
//           formdata={form}
//           onSubmit={handleCompanyFormSubmit}
//           errors={duplicate}
//         />
//       )}
//       {steps == 2 && (
//         <CeoForm
//           onSubmit={CeoSubmit}
//           Step={steps}
//           setSteps={setSteps}
//           loading={loading}
//           errors={duplicate}
//         />
//       )}
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import CompanyForms from "@/components/Forms/CompanyForms";
import axios from "axios";
import { toast } from "sonner";
import CeoForm from "@/components/Forms/CeoForm";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [steps, setSteps] = useState(1);
  const [duplicate, setDuplicate] = useState(null);


  const handleCompanyFormSubmit = async (data) => {
    try {
      const updatedForm = { ...form, company: { ...data } };
      setForm(updatedForm);
      setSteps(2);

      // Retrieve data from local storage
      const CeoData = JSON.parse(localStorage.getItem("ceoForm"));
        console.log(storedCeoData);
    } 
    catch (error) {
      console.log(error);
    }
  };

  const CeoSubmit = async (ceo) => {
    setLoading(true);

    try {
      const updateForm = { ...form, ceo: { ...ceo } };
      const { data } = await axios.post("/api/creating", updateForm);

      // Store the CEO data in local storage
      localStorage.setItem("ceoForm", JSON.stringify(ceo));

      if (!data.success) {
        if (data.field) {
          const field = data.field;
          setDuplicate(field);
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    // Retrieve the CEO data from local storage
    // const storedCeoData = localStorage.getItem("ceoForm");
    // if (storedCeoData) {
    //   const ceoData = JSON.parse(storedCeoData);
    //   setForm((prevForm) => ({ ...prevForm, ceo: ceoData }));
    // }
    const CeoData = JSON.parse(localStorage.getItem("ceoForm"));
        console.log(storedCeoData);
        if (CeoData) {
            // const ceoData = JSON.parse(storedCeoData);
            setForm((prevForm) => ({ ...prevForm, ceo: ceoData }));
          }
    setSteps(1);
  };

  return (
    <div className="px-4 m-auto text-secondaryText">
      {steps === 1 && (
        <CompanyForms
          formdata={form}
          onSubmit={handleCompanyFormSubmit}
          errors={duplicate}
        />
      )}
      {steps === 2 && (
        <CeoForm
          onSubmit={CeoSubmit}
          Step={steps}
          setSteps={setSteps}
          loading={loading}
          errors={duplicate}
        />
      )}
      {steps === 2 && (
        <Button
          type="button"
          className="py-5 w-[12%]"
          onClick={handlePrevious}
        >
          Previous
        </Button>
      )}
    </div>
  );
};

export default Page;


