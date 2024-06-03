import dbConnection from "@/backend/db/dbconnection";
import countries from "@/backend/models/country/countries";
import { NextResponse } from 'next/server';

dbConnection();

export async function GET (req) {
  try {
    const country = await countries.find();
    return NextResponse.json({
      success: true,
      message: country
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
}

export async function POST (req) {
  try {
    const request = await req.json();
    const country = await countries.create(request);
    return NextResponse.json({
      success: true,
      message: country
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
    });   
  }
}