import companyCEO from "@/backend/models/company/companyCEO";
import dbConnection from "@/backend/db/dbconnection";
import { NextResponse } from "next/server";

dbConnection();

export const GET = async (req, {params}) => {
  try {
    const { id } = params;
    console.log(id)
    const ceo = await companyCEO.findById(id);
    return NextResponse.json({
      success: true,
      message: ceo
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
};

export const DELETE = async (req, {params}) => {
  try {
    const { id } = params;
    const ceo = await companyCEO.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      message: "CEO successfully deleted...",
      data: ceo
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
};

export const PUT = async (req, {params}) => {
  try {
    const request = req.json();
    const { id } = params;
    const ceo = await companyCEO.findByIdAndUpdate(id, request, { new: true, runValidators: true });
    return NextResponse.json({
      success: true,
      message: "CEO updated successfully...",
      data: ceo
    }, {
      status: 200
    });
  } catch (error) {
    if (error.code === 11000) {
      const keyValue = error.keyValue ? error.keyValue : 'Unknown Key';
      console.log(`Duplicate key error: ${JSON.stringify(keyValue)}`);
      
      return NextResponse.json({
        success: false,
        message: `Duplicate key error: ${JSON.stringify(keyValue)}`
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
};