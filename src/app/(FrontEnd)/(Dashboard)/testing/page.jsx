import React from "react";

async function getData() {
  try {
    const req = await fetch("http://localhost:3000/api/superadmin/profile", {
      method: "GET",
      headers: {
        Accept: "application/json",
        ContentType: "application/json",
        Authorization: process.env.AUTHORIZATION_KEY,
      },
    });
    const res = await req.json();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}
const page = async () => {
  const data = await getData();
  console.log(data);
  return <div>page</div>;
};

export default page;
