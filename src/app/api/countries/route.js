import dbConnection from "@/backend/db/dbconnection";
import countries from "@/backend/models/countries/countries";
import { NextResponse } from 'next/server';

dbConnection();

export async function GET (req) {
  try {
    const country = await countries.get();
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    });
  }
}