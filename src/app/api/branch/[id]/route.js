import dbConnection from "@/backend/db/dbconnection";
import { Branch } from "@/backend/models/branches/branch";
import { NextResponse } from "next/server";

//GET By Id
export async function GET(req,{params}){
    await dbConnection();
   try {
    const {id}=params;
    const Branches  = await Branch.findById(id);
    return NextResponse.json( {
        message: "Branch Found",
        sucess: true,
        data: Branches ,
      },
      { status: 200 });
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

// DELETE

export async function DELETE(req,{params}) {
    try {
      const { id } = params;
      console.log(id);
      const updateDate = await Branch.findByIdAndDelete(id);
      return NextResponse.json(
        {
          message: "Branch Deleted",
          success: true,
          data: updateDate,
        },
        { status: 200 }
      );
    } catch (error) {
      console.log(error, "From DELETE API");
      return NextResponse.json(
        {
          message: "Internal Server Error",
          success: false,
        },
        { status: 500 }
      );
    }
  };

  //UPDATE
  export async function PUT(req,{params}) {
    try {
      const { id } = params;
      const body = await req.json();
      const updateDate = await Branch.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      return NextResponse.json(
        {
          message: "Branch Updated",
          success: true,
          data: updateDate,
        },
        { status: 200 }
      );
    } catch (error) {
      console.log(error, "From PUT API");
      return NextResponse.json(
        {
          message: "Internal Server Error",
          success: false,
        },
        { status: 500 }
      );
    }
  };