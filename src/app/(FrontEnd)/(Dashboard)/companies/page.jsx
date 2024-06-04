import React from "react";

async function fetchedData() {
  try {
    const request = await fetch(
      "http://localhost:3000/api/superadmin/profile",
      { method: "GET" }
    );
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
const page = async () => {
  const data = await fetchedData();
  return <div>page</div>;
};

export default page;
