"use client"
import React, { useContext } from 'react';
import { SuperadminContext } from '@/Context/superadmin/Superadmin';

const Data = () => {
  const { data } = useContext(SuperadminContext);

  return (
    <div className=" p-4">
     
     <div className="flex">
  <div className="w-1/2 pr-4">
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Full Name:</h3>
      <p className="text-blue-400 ml-auto">{data.fullname}</p>
    </div>
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Username:</h3>
      <p className="text-blue-400 ml-auto">{data.username}</p>
    </div>
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Password:</h3>
      <p className="text-blue-400 ml-auto ">{data.password}</p>
    </div>
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Email:</h3>
      <p className="text-blue-400 ml-auto">{data.email}</p>
    </div>
  </div>
  <div className="w-1/2 pl-4">
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Phone Number:</h3>
      <p className="text-blue-400 ml-auto">{data.phonenumber}</p>
    </div>
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Admin Type:</h3>
      <p className="text-blue-400 ml-auto">{data.AdminType}</p>
    </div>
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Date of Birth:</h3>
      <p className="text-blue-400 ml-auto">{data.dob}</p>
    </div>
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">CNIC:</h3>
      <p className="text-blue-400 ml-auto">{data.cnic}</p>
    </div>
    <div className="mb-4 flex items-start">
      <h3 className="text-white w-32">Access Level:</h3>
      <p className="text-blue-400 ml-auto">{data.accesslevel}</p>
    </div>
  </div>
</div>
</div>
  );
};

export default Data;



