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
      const request = await fetch("/api/superadmin/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
          Authorization: process.env.AUTHORIZATION_KEY,
        },
      });
      if (request.ok) {
        const response = await request.json();
        setData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (Object?.keys(data).length === 0) {
      fetchData();
    }
  }, [pathname]);
  return (
    <SuperadminContext.Provider value={{ data, setData }}>
      {children}
    </SuperadminContext.Provider>
  );
};

export { Superadmin, SuperadminContext };
