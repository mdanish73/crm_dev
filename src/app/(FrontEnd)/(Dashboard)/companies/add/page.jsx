// "use client";
// import React, { useEffect, useState } from "react";
// import CompanyForms from "@/components/Forms/CompanyForms";
// // import axios from "axios";
// // import { toast } from "sonner";
// // import CeoForm from "@/components/Forms/CeoForm";

// const Page = () => {
//   // const [loading, setLoading] = useState(false);
//   // const [form, setForm] = useState({});
//   // const [steps, setSteps] = useState(1);
//   // const [duplicate, setDuplicate] = useState(null);



//   // const handleCompanyFormSubmit = async (data) => {
//   //   try {
//   //     setForm({ ...form, company: { ...data } });
//   //     setSteps(2);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const CeoSubmit = async (ceo) => {
//   //   setLoading(true);

//   //   try {
//   //     const updateForm = { ...form, ceo: { ...ceo } };
//   //     const { data } = await axios.post("/api/creating", updateForm);
//   //     if (!data.success) {
//   //       if (data.field) {
//   //         console.log(`Duplication error in field: ${data.field}`);
//   //         const field = data.field;
//   //         setDuplicate(field)
//   //       }
//   //       toast.error(data.message, {
//   //         className: "toastError",
//   //       });
//   //     } else {
//   //       toast.success(data.message, {
//   //         className: "toastSuccess",
//   //       });
//   //     }
//   //   } catch (error) {
//   //     console.log(error)
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <div className="px-4  m-auto text-secondaryText">
//       <CompanyForms/>
//       {/* {steps == 1 && ( */}
//           {/* // formdata={form}
//           // onSubmit={handleCompanyFormSubmit}
//           // errors={duplicate} */}
//       {/* // )}
//       {steps == 2 && (
//         <CeoForm
//           onSubmit={CeoSubmit}
//           Step={steps}
//           setSteps={setSteps}
//           loading={loading}
//           errors={duplicate}
//         />
//       )} */}
//     </div>
//   );
// };

// export default Page;
 import CompanyForms from '@/components/Forms/CompanyForms'
import React from 'react'
 
 const page = () => {
   return (
     <div className="px-4  m-auto text-secondaryText">
        <CompanyForms/>
     </div>
   )
 }
 
 export default page