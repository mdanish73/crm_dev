import dbConnection from "@/backend/db/dbconnection";
import { NextResponse } from "next/server";
import industries from "@/backend/models/industry/industry";

dbConnection();

export async function POST (req) {
  try {
    const request = await req.json();
    const industry = await industries.create(request);
    return NextResponse.json({
      success: true,
      message: industry
    }, {
      status: 201
    })
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
}

export async function GET (req) {
  try {
    const fetchedIndustries = await industries.find();
    return NextResponse.json({
      success: true,
      message: fetchedIndustries
    }, {
      status: 200
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    })
  }
}