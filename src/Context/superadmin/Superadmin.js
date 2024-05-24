"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

const SuperadminContext = createContext();

const Superadmin = ({ children }) => {
  const pathname = usePathname();
  const [data, setData] = useState({});
  async function fetchData() {
    try {
      const request = await fetch("/api/superadmin/profile", { method: "GET" });
      if (request.status === 200) {
        const response = await request.json();
        setData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (Object.keys(data).length === 0) {
      fetchData();
    }
  }, [pathname]);
  return (
    <SuperadminContext.Provider value={{ data }}>
      {children}
    </SuperadminContext.Provider>
  );
};

export { Superadmin, SuperadminContext };
