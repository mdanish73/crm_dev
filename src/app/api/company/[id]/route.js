import dbConnection from "@/backend/db/dbconnection";
import companyModel from "@/backend/models/company/company";
import { NextResponse } from "next/server";

 dbConnection();
// Get single company
const GET = async (req, { params }) => {
  try {
    const { id } = params;
    console.log(id);
    const company = await companyModel.findById(id);
    return NextResponse.json(
      {
        message: "Company Found",
        success: true,
        data: company,
      },
      { status: 200 }
    );
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
// Delete The Company
const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    console.log(id);
    const updateDate = await companyModel.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Company Deleted",
        success: true,
        data: updateDate,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error, "From DELETE API");
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};

// Update The Company
const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const updateDate = await companyModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    return NextResponse.json(
      {
        message: "User Updated",
        success: true,
        data: updateDate,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error, "From PUT API");
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};

export { GET, PUT, DELETE };