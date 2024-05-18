import dbConnection from "@/backend/db/dbconnection";
import countries from "@/backend/models/countries/countries";
import { NextResponse } from 'next/server';

dbConnection();

export async function GET (req) {
  try {
    const country = await countries.get();
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
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    });   
  }
}