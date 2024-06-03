import dbConnection from "@/backend/db/dbconnection";
import companyCEO from "@/backend/models/company/companyCEO";
import { NextResponse } from "next/server";

dbConnection();

export const GET = async (req) => {
  try {
    const company_ceo = await companyCEO.find();
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