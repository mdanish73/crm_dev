import { NextResponse } from 'next/server';
import dbConnection from '@/backend/db/dbconnection'
import { BranchAdmin } from '@/backend/models/branches/branchadmin';


export async function POST(req) {
  await dbConnection();

  try {
    const body = await req.json();
    const branch = await BranchAdmin.create(body)
    return NextResponse.json({ success: true, data: branch }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  await dbConnection();
  try {
    const branches = await BranchAdmin.find();
    return NextResponse.json({
      message: "All BranchAdmin found Found",
      success: true,
      data: getAllbranches,
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


