import CeoTable from "@/components/Table/Ceo/CeoTable";
import React from "react";

async function fetchCeo() {
  try {
    const request = await fetch(`${process.env.LOCAL_HOST}api/ceo`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: process.env.AUTHORIZATION_KEY,
      },
    });
    const response = await request.json();
    const data = response.message;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
const page = async () => {
  const data = await fetchCeo();
  return (
    <>
      <CeoTable CeoData={data} />
    </>
  );
};

export default page;
