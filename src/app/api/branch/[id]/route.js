import dbConnection from "@/backend/db/dbconnection";
import { BranchAdmin } from "@/backend/models/branches/branchadmin";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    await dbConnection();
   try {
    const {id}=params;
    const branchadmin = await BranchAdmin.findById (id);
    return NextResponse.json( {
        message: "Branch Admin Found",
        sucess: true,
        data: branchadmin,
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