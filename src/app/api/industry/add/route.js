import dbConnection from "@/backend/db/dbconnection";
import industries from "@/backend/models/industry/industry";
import subIndustries from "@/backend/models/subIndustries/subIndustries";
import { NextResponse } from "next/server";

dbConnection();

const POST = async (req) => {
  try {
    const body = await req.json();
    const { industry, subindustry } = body;
    const subIndustry = await subIndustries.create(subindustry);
    const Industry = await industries.create({
      ...industry,
      options: subIndustry._id,
    });
    return NextResponse.json(
      {
        message: "Subindustry and industry created",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
};
export { POST };
