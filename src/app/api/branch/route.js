import { NextResponse } from 'next/server';
import dbConnection from '@/app/backend/db/dbconnection';
import { Branch } from '@/app/backend/models/branches';
dbConnection();

export async function POST(req) {

  try {
    const body = await req.json();
    const branch = await Branch.create(body)
    return NextResponse.json({ success: true, data: branch }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
