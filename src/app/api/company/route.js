import dbConnection from "@/backend/db/dbconnection";
import companyModel from "@/backend/models/companies/company";
import { NextResponse } from "next/server";

// Create The Company
const POST = async (req) => {
  await dbConnection();
  try {
    const body = await req.json();
    const data = await companyModel.create(body);
    return NextResponse.json({
      message: "Company Created!",
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error, "Error From POST API");
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 201 }
    );
  }
};

// Get all Companies
const GET = async () => {
  try {
    const getAllcompanies = await companyModel.find();
    return NextResponse.json({
      message: "All Companies Found",
      success: true,
      data: getAllcompanies,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};
export { POST, GET };
