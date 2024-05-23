import dbConnection from "@/backend/db/dbconnection";
import cityNames from "@/backend/models/cities/cityNames";
import { NextResponse } from "next/server";
// Call the dbfunction for Database Connection
dbConnection();
// Get The ID From The Params argument and search the cityname on idBase
const GET = async (req, { params }) => {
  try {
    const { id } = params;
    const findedName = await cityNames.findById(id);
    return NextResponse.json({
      message: "Citynames ",
      success: true,
      data: findedName,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
// Get The ID From The Params argument and Delete the cityname on idBase
const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const deletedName = await cityNames.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Name Deleted",
      success: true,
      data: deletedName,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
// Get The ID From The Params argument and Update the cityname on idBase
const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    const data = await req.json();
    const updatedName = await cityNames.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return NextResponse.json({
      message: "Name Updated",
      success: true,
      data: updatedName,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export { GET, DELETE, PUT };
