import dbConnection from "@/backend/db/dbconnection";
import countries from "@/backend/models/countries/countries";
import { NextResponse } from 'next/server';

dbConnection();

export async function GET(req, {params}) {
  try {
    const { id } = params;
    const country = await countries.findById(id);
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