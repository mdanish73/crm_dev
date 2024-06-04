import dbConnection from "@/backend/db/dbconnection";
import superAdminmodel from "@/backend/models/admins/superadmin";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

dbConnection();

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    // Validate id
    const idCheck = mongoose.Types.ObjectId.isValid(id);
    if (!idCheck) {
      return NextResponse.json(
        {
          message: "ID is invalid",
          success: false,
        },
        { status: 400 }
      );
    }

    const admin = await superAdminmodel.findById(id);

    if (!admin) {
      return NextResponse.json(
        {
          message: "Super Admin not found",
          success: false,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Super Admin found",
        success: true,
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

export const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    const idCheck = mongoose.Types.ObjectId.isValid(id);
    // Validate MongoDB ObjectId
    if (!idCheck) {
      return NextResponse.json(
        {
          message: "ID is invalid",
          success: false,
        },
        { status: 400 }
      );
    }

    const body = await req.json();

    // Check if request body is empty
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        {
          message: "Please fill all required fields",
          success: false,
        },
        { status: 400 }
      );
    }

    // Update the document
    const admin = await superAdminmodel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    // Check if the update was successful
    if (Object.keys(updatedData).length === 0) {
      return NextResponse.json(
        {
          message: "User not found or no data to update",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "User updated successfully",
        success: true,
        data: admin,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return NextResponse.json({
        message: `${field} is Already Exists`,
        success: false,
      });
    }
    console.error(error, "From PUT API");
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    if (!mongoose.Schema.Types.ObjectId(id)) {
      return NextResponse.json({
        message: "ID is inValid ",
        success: false,
      });
    }
    const admin = await superAdminmodel.findByIdAndDelete(id);
    if (Object.keys(deleteAdmin).length === 0) {
      return NextResponse.json(
        {
          message: "User not found or no data to delete",
          success: false,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json({
      message: "Admin Deleted",
      success: true,
      data: admin,
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
