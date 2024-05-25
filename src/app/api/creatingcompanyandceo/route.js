import dbConnection from "@/backend/db/dbconnection";
import companyCEO from "@/backend/models/company/companyCEO";
import companies from "@/backend/models/company/company";
import { NextResponse } from "next/server";

dbConnection();
const POST = async (req) => {
  try {
    const body = await req.json();
    const { ceo, company } = body;
    const ceoCreated = await companyCEO.create(ceo);
    const companyCreated = await companies.create({
      ...company,
      companyCeo: ceoCreated._id,
    });
    return NextResponse.json({
      message: "CEO and Company Created",
      success: true,
      dataOne: ceoCreated,
      dataTwo: companyCreated,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
export { POST };
