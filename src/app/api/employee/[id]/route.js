import dbConnection from "@/backend/db/dbconnection";
import employeeModel from "@/backend/models/employees/employee";
import { NextResponse } from "next/server";

dbConnection();


//  Api of the  Delete Function

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    const deletedEmp = await employeeModel.findByIdAndDelete(id);
    return NextResponse.json(
      {
        success: true,
        message: "Employee Deleted Successfully",
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
}


//  Api of the PUT Function


export async function PUT(req, { params }) {
  try {
    const request = await req.json();
    const { id } = params;
    const updatedEmp = await employeeModel.findByIdAndUpdate(id, request, {
      new: true ,
      runValidators: true
    });
    return NextResponse.json(
      {
        success: true,
        message: updatedEmp,
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
}


// Api of the GETONE funtion

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const employee = await employeeModel.findOne( {_id :id});
    return NextResponse.json(
      {
        success: true,
        message: "User found",
        data: employee,
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
}

