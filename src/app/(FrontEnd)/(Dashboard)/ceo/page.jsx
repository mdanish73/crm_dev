import CeoTable from "@/components/Table/Ceo/CeoTable";
import { cookies, headers } from "next/headers";
import React from "react";

async function getCEO() {
  try {
    const request = await fetch("http://localhost:3000/api/company", {
      method: "GET",
      headers: {
        Accept: "application/json",
        ContentType: "application/json",
        Authorization: process.env.AUTHORIZATION_KEY,
      },
    });
    const ceosResponse = await request.json();
    // console.log(ceosResponse)
    return ceosResponse;
  } catch (error) {
    console.log(error.message);
  }
}

const page = async () => {
  const data = await getCEO();
  return <>{
    /* <CeoTable Data={data.message} /> */
    <h2>hey</h2>
    }</>;
};

export default page;
