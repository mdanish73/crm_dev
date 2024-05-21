import dbConnection from "@/backend/db/dbconnection";
import cities from "@/backend/models/cities/cities";
import { NextResponse } from "next/server";

dbConnection();
const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const city = await cities.findById(id);
    return NextResponse.json({
      message: "City Found",
      success: true,
      data: city,
    });
  } catch (error) {
    console.log(typeof error);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const city = await cities.findById(id);
    return NextResponse.json({
      message: "City Deleted",
      success: true,
      data: city,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    const data = await req.json();
    const city = await cities.findById(id, data, {
      new: true,
      runValidators: true,
    });
    return NextResponse.json({
      message: "City Updated",
      success: true,
      data: city,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
export { GET, DELETE };
