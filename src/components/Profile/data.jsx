"use client";
import React, { useContext, useState } from 'react';
import { SuperadminContext } from '@/Context/superadmin/Superadmin';

const Data = () => {
  const { data, setData } = useContext(SuperadminContext);
  const [editMode, setEditMode] = useState({});
  const [tempData, setTempData] = useState({ ...data });

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleInputChange = (e, field) => {
    setTempData({ ...tempData, [field]: e.target.value });
  };

  const handleOkClick = (field) => {
    setEditMode({ ...editMode, [field]: false });
  };

  const handleSaveChanges = () => {
    setData({ ...tempData });
  };

  return (
    <div className="">
      <div className="flex gap-6">
        <div className="w-1/2 pr-4">
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Full Name:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.fullname ? (
                <>
                  <input
                    type="text"
                    value={tempData.fullname}
                    onChange={(e) => handleInputChange(e, 'fullname')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('fullname')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.fullname}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('fullname')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Username:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.username ? (
                <>
                  <input
                    type="text"
                    value={tempData.username}
                    onChange={(e) => handleInputChange(e, 'username')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('username')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.username}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('username')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Password:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.password ? (
                <>
                  <input
                    type="password"
                    value={tempData.password}
                    onChange={(e) => handleInputChange(e, 'password')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('password')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">••••••••</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('password')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Email:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.email ? (
                <>
                  <input
                    type="text"
                    value={tempData.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('email')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.email}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('email')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Phone Number:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.phonenumber ? (
                <>
                  <input
                    type="text"
                    value={tempData.phonenumber}
                    onChange={(e) => handleInputChange(e, 'phonenumber')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('phonenumber')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.phonenumber}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('phonenumber')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Admin Type:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.AdminType ? (
                <>
                  <input
                    type="text"
                    value={tempData.AdminType}
                    onChange={(e) => handleInputChange(e, 'AdminType')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('AdminType')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.AdminType}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('AdminType')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Date of Birth:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.dob ? (
                <>
                  <input
                    type="text"
                    value={tempData.dob}
                    onChange={(e) => handleInputChange(e, 'dob')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('dob')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.dob}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('dob')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">CNIC:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.cnic ? (
                <>
                  <input
                    type="text"
                    value={tempData.cnic}
                    onChange={(e) => handleInputChange(e, 'cnic')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('cnic')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.cnic}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('cnic')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <h3 className="text-white w-32">Access Level:</h3>
            <div className="flex-1 flex justify-between items-center space-x-2">
              {editMode.accesslevel ? (
                <>
                  <input
                    type="text"
                    value={tempData.accesslevel}
                    onChange={(e) => handleInputChange(e, 'accesslevel')}
                    className="text-blue-400 bg-gray-700 rounded p-1"
                  />
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleOkClick('accesslevel')}
                  >
                    OK
                  </button>
                </>
              ) : (
                <>
                  <p className="text-blue-400">{data.accesslevel}</p>
                  <button
                    className="text-green-500 text-xs"
                    onClick={() => handleEditClick('accesslevel')}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-red-600 text-white px-4 py-2 rounded mr-4">
          Deactivate Account
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Data;








