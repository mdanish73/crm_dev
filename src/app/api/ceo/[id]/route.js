import dbConnection from "@/backend/db/dbconnection";
import companyCeomodel from "@/backend/models/companies/companyceo";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

dbConnection();

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    console.log(id);
    const ceo = await companyCeomodel.findById(id);
    return NextResponse.json(
      {
        success: true,
        message: ceo,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    const ceo = await companyCeomodel.findByIdAndDelete(id);
    return NextResponse.json(
      {
        success: true,
        message: "CEO successfully deleted...",
        data: ceo,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const idChecked = await mongoose.Types.ObjectId.isValid(id);
    if (!idChecked) {
      return NextResponse.json({
        message: "ID is invalid",
        success: false,
      });
    }
    const data = await req.json();
    if (!data) {
      return NextResponse.json({
        message: "Please Fill All Required Fields",
        success: false,
      });
    }
    const updatedCeo = await companyCeomodel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!updatedCeo) {
      return NextResponse.json({
        message: "Data not Created",
        success: false,
      });
    }
    return NextResponse.json({
      message: "CEO updated",
      success: true,
      data: updatedCeo,
    });
  } catch (error) {
    if (error.code === 11000) {
      const fields = Object.keys(error.keyValues)[0];
      return NextResponse.json({
        message: `${fields} already Exisits`,
        success: false,
        field: fields,
      });
    }
    return NextResponse.json({
      message: "Internal server Error",
      success: false,
    });
  }
}
