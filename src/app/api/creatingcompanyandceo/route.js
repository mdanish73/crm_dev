import dbConnection from "@/backend/db/dbconnection";
import companyCEO from "@/backend/models/company/companyCEO";
import companies from "@/backend/models/company/company";
import { NextResponse } from "next/server";


dbConnection();
const POST = async (req) => {
  try {
    const body = await req.json();
    const { ceo, company } = body;
    console.log(ceo)
    console.log(company)
    const ceoCreated = await companyCEO.create(ceo);
    const companyCreated = await companies.create({
      ...company,
      companyCeo: ceoCreated._id,
    });
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
      if (error.code === 11000) {
        const key = Object.keys(error.keyValue)[0];
        return NextResponse.json({
            message: `${key} : already exists`,
            success: false,
        }, {
            status: 403
        });
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
export { POST };
