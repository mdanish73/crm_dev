import dbConnection from "@/backend/db/dbconnection";
import companyModel from "@/backend/models/companies/company";
import companyceoModel from "@/backend/models/companies/companyceo";
import { NextResponse } from "next/server";

// Establish database connection
dbConnection();

export const POST = async (req) => {
  try {
    // Parse request body
    const body = await req.json();
    const { ceo, company } = body;

    if (
      !ceo ||
      !company ||
      Object.keys(ceo).length === 0 ||
      Object.keys(company).length === 0
    ) {
      return NextResponse.json(
        {
          message: "Please Fill All Required Fields",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    const ceoCreated = await companyceoModel.create(ceo);
    const companyCreated = await companyModel.create({
      ...company,
      companyCeo: ceoCreated._id,
    });

    if (Object.keys(ceoCreated || companyCreated).length === 0) {
      return NextResponse.json({
        message: "CEO And Company Not Created",
        success: false,
      });
    }

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
    console.error(error);
    if (error.code === 11000) {
      const fields = Object.keys(error.keyValue)[0];
      return NextResponse.json(
        {
          message: `${fields} Already Exists`,
          success: false,
          fieldError: fields,
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
