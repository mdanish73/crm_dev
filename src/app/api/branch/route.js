import { NextResponse } from 'next/server';
import dbConnection from '@/backend/db/dbconnection';
import { Branch } from '@/backend/models/branches/branch';


export async function POST(req) {
  await dbConnection();

  try {
    const body = await req.json();
    const branch = await Branch.create(body)
    return NextResponse.json({
      message: "Branch Created!",
      success: true,
      data: branch,
    });
    } catch (error) {
      console.log(error)
      return NextResponse.json(
        {
          message: "Internal Server Error",
          success: false,
        },
        { status: 201 }
      );
      }
}

export async function GET(req) {
  await dbConnection();
  try {
    const branches = await Branch.find();
    return NextResponse.json({
      message: "All Branches Found",
      success: true,
      data: branches,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}



