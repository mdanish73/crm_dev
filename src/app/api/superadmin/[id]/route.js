import dbConnection from "@/backend/db/dbconnection";
import superAdmin from "@/backend/models/admins/superadmin";
import { NextResponse } from "next/server";
const GET = async (req, { params }) => {
  await dbConnection();
  try {
    const { id } = params;
    const admin = await superAdmin.findById(id);
    return NextResponse.json(
      {
        message: "Super Admin Found",
        sucess: true,
        data: admin,
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
const PUT = async (req, { params }) => {
  await dbConnection();
  try {
    const { id } = params;
    const body = await req.json();
    const updateDate = await superAdmin.findByIdAndUpdate(id, body, {
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

const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const deleteAdmin = await superAdmin.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Admin Deleted",
      success: true,
      data: deleteAdmin,
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
export { GET, PUT, DELETE };
