import dbConnection from "@/backend/db/dbconnection";
import { NextResponse } from "next/server";
import employeeModel from "@/backend/models/employees/employee";

export async function POST(req){
    await dbConnection();
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
            // Extract the duplicated key information from the error message
            const keyValue = error.keyValue ? error.keyValue : 'Unknown key';
            console.log(`Duplicate key error: ${JSON.stringify(keyValue)}`);
            return NextResponse.json({
                message: `${JSON.stringify(keyValue)} already exists`,
                success: false,
            },{
                status: 403
            }) 
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
    dbConnection();
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