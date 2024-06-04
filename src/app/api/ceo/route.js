import dbConnection from "@/backend/db/dbconnection";
import companyceoModel from "@/backend/models/companies/companyceo";
import { NextResponse } from "next/server";

dbConnection();

export const GET = async (req) => {
  console.log(req)
  try {
    const company_ceo = await companyceoModel.find();
    return NextResponse.json({
      success: true,
      message: company_ceo
    }, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    });
  }
};

export const POST = async (req) => {
  try {
    const request = await req.json();
    const ceo = await companyCEO.create(request);
    return NextResponse.json({
      success: true,
      message: ceo
    }, {
      status: 201
    }); 
  } catch (error) {
    if (error.code === 11000) {
      const keyValue = error.keyValue ? error.keyValue : 'Unknown Key';
      const key = JSON.stringify(keyValue);
      console.log(`Duplicate key error: ${key}`);
      
      return NextResponse.json({
        success: false,
        message: `${key} already exists...`
      }, {
        status: 403
      });
    }

    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    })
  }
};