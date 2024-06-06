import CeoTable from "@/components/Table/Ceo/CeoTable";
import React from "react";

async function getCompany() {
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
    return ceosResponse;
  } catch (error) {
    console.log(error.message);
  }
}

async function getCeo() {
  try {
    const request = await fetch("http://localhost:3000/api/ceo", {
      method: "GET",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        ContentType: "application/json",
        Authorization: process.env.AUTHORIZATION_KEY,
      },
    });
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

const page = async () => {
  const data = await getCompany();
  const ceoData = await getCeo();
  return (
    <>
      <CeoTable CeoData={ceoData.message} />
    </>
  );
};

export default page;
