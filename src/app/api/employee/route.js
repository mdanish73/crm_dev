import dbConnection from "@/backend/db/dbconnection";
import { NextResponse } from "next/server";
import employeeModel from "@/backend/models/employees/employee";

await dbConnection();

export async function POST(req){
    try {
        const data = await req.json();
        const createdUser = await employeeModel.create(data)
        
       return NextResponse.json({
        message: "User Created ",
        success: true,
        data: createdUser,
       },{
        status: 201
       })
    } catch (error) {
        if (error.code === 11000) {
            const key = Object.keys(error.keyValue)[0];
            return NextResponse.json({
                message: `${key} : already exists`,
                success: false,
            }, {
                status: 403
            });
        }
        return NextResponse.json({
                message: "Error in POST API",
                data: error.message,
                success: false,
            }, {
                status: 500
            })
        }
        
    }
export async function GET(req){
    try {
        const alluser = await employeeModel.find();
        return NextResponse.json({
            message: "User Found",
            success: true,
            data : alluser,
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error From GET Api",
            success: false,
        },{
            status : 500
        })
    }
}