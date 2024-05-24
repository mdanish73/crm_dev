"use client";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
// Create the context and save into the variable
 const SuperadminContext = createContext();
const Superadmin = ({ children }) => {
  // make the State and store the data
  const [data, setData] = useState({});
  // This Function fetch the superAdmin when admin login the we get the ID from the token and give the ID to mongodb to fetch user
  async function fetchSuperadmin () {
    try {
      const response = await fetch("/api/superadmin/profile", {
        method: "GET",
      });
      if (response) {
        const res = await response.json();
        setData(res.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
    useEffect(() => {
      fetchSuperadmin();
    }, []);
  return (
    <>
      <SuperadminContext.Provider value={{ data }}>
        {children}
      </SuperadminContext.Provider>
    </>
  );
};

export { Superadmin, SuperadminContext};
