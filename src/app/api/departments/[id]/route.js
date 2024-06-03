import dbConnection from "@/backend/db/dbconnection";
import departmentModel from "@/backend/models/department/department";
import { NextResponse } from "next/server";

await dbConnection();
export async function PUT( req , { params}){
    try {
        const request = await req.json();
        const { id} = params;
        const update = await departmentModel.findByIdAndUpdate(id, request,{
            new :true,
            runValidators : true,
        });
        return NextResponse.json({
            success : true,
            message: "Updated department",
            data : update
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            succes: false,
            message: "Error in put api"
        },{
            status : 500
        })
    }
}

export async function DELETE(req, {params}){
    try {
        const {id}= params;
        const deletedepartment = await departmentModel.findByIdAndDelete(id);
        return NextResponse.json({
            success:true,
            message : "Data is Deleted in Department"
        },{
            status : 200
        })
    } catch (error) {
        return NextResponse.json({
            success:false,
            message : error.message
        },{
            status : 500
        })
    }
}


export async function GET(req, {params}) {
    try {
        const {id } = params;
        const department = await departmentModel.findOne( {_id :id})
        return NextResponse.json(
            {
              success: true,
              message: "User found",
              data: department,
            },
            {
              status: 200,
            }
          );
    } catch (error) {
        return NextResponse.json({
            success:false,
            message : " Cannot get Specific User"
        },{
            status : 500
        })
    }
}