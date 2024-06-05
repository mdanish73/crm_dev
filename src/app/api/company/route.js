import dbConnection from "@/backend/db/dbconnection";
import companyModel from "@/backend/models/companies/company";
import { NextResponse } from "next/server";

// Get all Companies
dbConnection();
export async function GET(req) {
  try {
    const getAllcompanies = await companyModel.find().populate("companyCeo");
    return NextResponse.json({
      message: getAllcompanies,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (Object.keys(body).length === 0 || !body) {
      return NextResponse.json(
        {
          message: "Please Fill All Required Feilds",
          success: false,
        },
        {
          status: 404,
        }
      );
    }
    const data = await companyModel.create(body);
    if (Object.keys(data).length === 0 || !data) {
      return NextResponse.json(
        {
          message: "Data Not Created!!",
          success: false,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        id : data._id,
        message: "Data Created!!",
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      const fields = Object.keys(error.keyValue)[0];
      return NextResponse.json(
        {
          message: `${fields} already Exists`,
          success: false,
          field: fields,
        },
        {
          status: 409,
        }
      );
    }
    console.log(error.message);
    return NextResponse.json(
      {
        message: "Inetrnal server Error",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
