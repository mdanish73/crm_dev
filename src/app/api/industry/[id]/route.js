import dbConnection from "@/backend/db/dbconnection";
import { NextResponse } from "next/server";
import industries from "@/backend/models/industry/industry";

dbConnection();

export async function GET (req, { params }) {
  try {
    const { id } = params;
    const industry = await industries.findById(id);
    return NextResponse.json({
      success: true,
      message: industry
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

export async function PUT (req, { params }) {
  try {
    const { id } = params;
    const request = await req.json();
    const industry = await industries.findByIdAndUpdate(id, request, { new: true, runValidators: true });
    return NextResponse.json({
      success: true,
      message: industry
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

export async function DELETE (req, { params }) {
  try {
    const { id } = params;
    const industry = await industries.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      message: industry
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