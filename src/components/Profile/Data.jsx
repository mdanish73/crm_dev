"use client";
import React, { useContext, useState } from "react";
import { SuperadminContext } from "@/Context/superadmin/Superadmin";

const Data = () => {
  const { data } = useContext(SuperadminContext);
  console.log(data)
  const [editMode, setEditMode] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...data });
  const id = data._id;
  const fields = [
    { label: "Full Name", field: "fullname", type: "text" },
    { label: "Username", field: "username", type: "text" },
    { label: "Email", field: "email", type: "text" },
    { label: "Phone Number", field: "phonenumber", type: "text" },
    { label: "Admin Type", field: "AdminType", type: "text" },
    { label: "Date of Birth", field: "dob", type: "text" },
    { label: "CNIC", field: "cnic", type: "text" },
    { label: "Access Level", field: "accesslevel", type: "text" },
  ];

  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsEditing(true);
    setEditMode(
      fields.reduce((acc, field) => ({ ...acc, [field.field]: true }), {})
    );
  };

  const handleSaveClick = async () => {
    console.log("Save button clicked");
    setIsEditing(false);
    setEditMode(
      fields.reduce((acc, field) => ({ ...acc, [field.field]: false }), {})
    );

    console.log("Data before posting:", tempData);

    try {
      const result = await updateSuperadminData(tempData);
      console.log("Data saved successfully:", result);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const updateSuperadminData = async (data) => {
    const response = await fetch(`/api/superadmin/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  };

  const handleInputChange = (e, field) => {
    setTempData({ ...tempData, [field]: e.target.value });
  };

  return (
    <div className="bg-[#212B35] p-9 px-32 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {fields.slice(0, 3).map(({ label, field, type }) => (
            <div key={field} className="mb-4">
              <h3 className="text-slate-400 w-32">{label}:</h3>
              <div className="flex justify-between items-center mt-2 space-x-2">
                {editMode[field] ? (
                  <input
                    type={type}
                    value={tempData[field]}
                    onChange={(e) => handleInputChange(e, field)}
                    className="text-[#eeeeeec8] bg-gray-700 rounded p-1 flex-1"
                  />
                ) : (
                  <p className="text-blue-400 flex-1 mr-10">
                    {tempData[field]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {fields.slice(3).map(({ label, field, type }) => (
            <div key={field} className="mb-4">
              <h3 className="text-white w-32">{label}:</h3>
              <div className="flex justify-between items-center mt-2 space-x-2">
                {editMode[field] ? (
                  <input
                    type={type}
                    value={tempData[field]}
                    onChange={(e) => handleInputChange(e, field)}
                    className="text-blue-400 bg-gray-700 rounded p-1 flex-1"
                  />
                ) : (
                  <p className="text-blue-400 flex-1 mr-10">
                    {tempData[field]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-end text-sm mt-6">
        <button className="bg-red-600 text-white px-3 py-2 rounded">
          Change Password
        </button>
        <button
          onClick={isEditing ? handleSaveClick : handleEditClick}
          className="bg-green-600 text-sm text-white px-3 py-2 rounded"
        >
          {isEditing ? "Save Data" : "Edit Data"}
        </button>
      </div>
    </div>
  );
};

export default Data;
