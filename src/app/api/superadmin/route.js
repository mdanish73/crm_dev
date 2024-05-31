import dbConnection from "@/backend/db/dbconnection";
import superAdmin from "@/backend/models/admins/superadmin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

dbConnection();

export const POST = async (req) => {
  try {
    const documentsCount = await superAdmin.countDocuments();
    if (documentsCount >= 2) {
      return NextResponse.json(
        {
          message: "Superadmin Limit Reached Only 2 Allowed",
          success: false,
        },
        { status: 403 }
      );
    }

    const body = await req.json();

    // Check for required fields
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        {
          message: "Please fill all required fields",
          success: false,
        },
        { status: 400 }
      );
    }

    const saltRound = await bcrypt.genSalt(Number(process.env.SALT_ROUND));
    const hashedPassword = await bcrypt.hash(body.password, saltRound);

    const response = await superAdmin.create({
      ...body,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "SuperAdmin created",
        success: true,
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return NextResponse.json(
        {
          message: `${field} already exists`,
          success: false,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const Data = await superAdmin.find();
    if (Object.keys(Data).length === 0) {
      return NextResponse.json({
        message: "Data not found",
        success: false,
      });
    }
    return NextResponse.json({
      message: "All Superadmins found",
      success: true,
      data: Data,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
