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
