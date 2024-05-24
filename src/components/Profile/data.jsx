"use client"
import { SuperadminContext } from '@/Context/superadmin/Superadmin';
import React, { useContext } from 'react';

const Data = () => {
  const { data } = useContext(SuperadminContext);
  console.log(data)

  return (
    <div>
     
     <div className="mt-8 p-4 bg-gray-800 rounded-md">
      <h2 className="text-xl text-white">{data.fullname}</h2>
      <p className="text-gray-400">{data.username}</p>
      <p className="text-gray-400">{data.password}</p>
      <p className="text-gray-400">{data.email}</p>
      <p className="text-gray-400">{data.phonenumber}</p>
      <p className="text-gray-400">{data.AdminType}</p>
      <p className="text-gray-400">{data.dob}</p>
      <p className="text-gray-400">{data.cnic}</p>
      <p className="text-gray-400">{data.accesslevel}</p>
     
    </div>
    </div>
  );
};

export default Data;


