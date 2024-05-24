import React from "react";

const page = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("api/employee", {
        method: "GET",
      });
      const res = await response.json();
      console.log(res);
      // const data= res.json
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

fetchData();

  return (
    <div className="bg-[#202D36] min-h-screen">
      <div></div>

      <div key={res_id} className="bg-gray-800 p-4 rounded-md">
        <p className="text-gray-400">{res.email}</p>
        <p className="text-gray-400">{res.phoneNumber}</p>
        <p className="text-gray-400">{res.jobTitle}</p>
        <p className="text-gray-400">{res.hireDate}</p>
        <p className="text-gray-400">{res.dob}</p>
        <p className="text-gray-400">
          {res.address.house}, {res.address.street},{" "}
          {res.address.area}, {res.address.postalCode}
        </p>
      </div>
    </div>
  );
};

export default page;
