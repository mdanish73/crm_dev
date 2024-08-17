import dbConnection from "@/backend/db/dbconnection";
import industriesModel from "@/backend/models/industry/industry";
import { NextResponse } from "next/server";
dbConnection();

export const POST = async (req) => {
  try {
    const body = await req.json();
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        {
          message: "Please Fill Required Feilds",
          success: false,
        },
        {
          status: 400,
        }
      );
    }
    const request = await industriesModel.create(body);
    if (Object.keys(request).length === 0) {
      return NextResponse.json(
        {
          message: "Industry and Subindustry not Created ",
          success: false,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        message: "Industry and Subindustry created",
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      const Feilds = Object.keys(error.keyValues)[0];
      return NextResponse.json(
        {
          message: `${Feilds} is Already Exists`,
          success: false,
        },
        {
          status: 409,
        }
      );
    }
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

export const GET = async (req) => {
  try {
    const fetchedIndustries = await industries.find();
    return NextResponse.json(
      {
        success: true,
        message: fetchedIndustries,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
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
