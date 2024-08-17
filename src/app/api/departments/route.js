import dbConnection from "@/backend/db/dbconnection";
import departmentModel from "@/backend/models/department/department";
import { NextResponse } from "next/server";


export async function POST(req){
    await dbConnection();
    try {
        const data = await req.json();
        const createdUser = await departmentModel.create(data)

        return NextResponse.json({
            success: true,
            message: "User Created",
            data : createdUser
        },{
            status : 201
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "User Not Found",
            data : error. message
        },{
            status:500
        })
    }
}


export async function GET(req){
    dbConnection();
    try {
        const alluser = await departmentModel.find();
        return NextResponse.json({
            success: true,
            message:"Found data",
            data : alluser
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message : "Error in GET request",
        },{
            status : 500
        })
    }
}