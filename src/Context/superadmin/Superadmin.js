"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

// Create the context and save into the variable
const SuperadminContext = createContext();
const Superadmin = ({ children }) => {
  const pathname = usePathname();
  // make the State and store the data
  const [data, setData] = useState({});
  console.log(data);
  // This Function fetch the superAdmin when admin login the we get the ID from the token and give the ID to mongodb to fetch user
  async function fetchSuperadmin() {
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
  }
  useEffect(() => {
    if (Object.keys(data).length === 0) {
      fetchSuperadmin();
    }
  }, [pathname]);
  return (
    <>
      <SuperadminContext.Provider value={{ data }}>
        {children}
      </SuperadminContext.Provider>
    </>
  );
};

export { Superadmin, SuperadminContext };
