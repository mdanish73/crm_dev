import dbConnection from "@/backend/db/dbconnection";
import companyModel from "@/backend/models/company";
import { NextResponse } from "next/server";

const GET = async ({ params }) => {
  await dbConnection();
  try {
    console.log(params);
    // const company = await companyModel.findById(id);
    return NextResponse.json({
      messaage: "Hello",
    });
  } catch (error) {
    return NextResponse.json({
      messaage: "Error",
    });
  }
};
export { GET };
