import dbConnection from "@/backend/db/dbconnection";
import companyCEO from "@/backend/models/company/companyCEO";
import companies from "@/backend/models/company/company";
import { NextResponse } from "next/server";

// Establish database connection
dbConnection();

const POST = async (req) => {
  try {
    // Parse request body
    const body = await req.json();
    const { ceo, company } = body;

    // Basic validation for required fields
    if (!ceo && !company) {
      return NextResponse.json(
        {
          message: "CEO and Company data are required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    // Create CEO and Company
    const ceoCreated = await companyCEO.create(ceo);
    const companyCreated = await companies.create({
      ...company,
      companyCeo: ceoCreated._id,
    });

    // Respond with success message
    return NextResponse.json(
      {
        message: "CEO and Company Created",
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error.message);

    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      console.log(field);
      return NextResponse.json(
        {
          success: false,
          message: `${field} already exists!`,
        },
        {
          status: 409,
        }
      );
    }

    // Handle other errors
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
