import dbConnection from "@/backend/db/dbconnection";
import companyceoModel from "@/backend/models/companies/companyceo";
import companyModel from "@/backend/models/companies/company";
import { NextResponse } from "next/server";

dbConnection();

export async function GET() {
  try {
    const data = await companyceoModel.find();
    if (!data) {
      return NextResponse.json({
        message: "Data is not found!",
        success: false,
      });
    }
    return NextResponse.json({
      message: data,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
}

export const POST = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  try {
    const body = await req.json();
    if (Object.keys(body).length === 0 || !body) {
      return NextResponse.json(
        {
          message: "Please Fill All Required Fields!",
          success: false,
        },
        {
          status: 400,
        }
      );
    }
    const data = await companyceoModel.create(body);
    const data2 = await companyModel.findByIdAndUpdate(
      id,
      { companyCeo: data._id },
      { new: true, runValidators: true }
    );
    if (Object.keys(data).length === 0 || !data) {
      return NextResponse.json({
        message: "Data not Created!!",
        success: false,
      });
    }
    return NextResponse.json(
      {
        success: true,
        message: "Ceo Created!!",
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

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
