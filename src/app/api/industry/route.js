import dbConnection from "@/backend/db/dbconnection";
import { NextResponse } from "next/server";
import industries from "@/backend/models/industry/industry";
import subIndustries from "@/backend/models/subIndustries/subIndustries";

dbConnection();

export async function POST (req) {
  try {
    const request = await req.json();
    const { industry, subIndustry } = request;
    console.log(industry)
    console.log(subIndustry)
    const createdSubIndustry = await subIndustries.create(subIndustry);
    console.log(createdIndustry);
    const createdIndustry = await industries.create({
      ...industry,
      options: createdSubIndustry._id
    })
    return NextResponse.json({
      success: true,
      message: createdIndustry
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