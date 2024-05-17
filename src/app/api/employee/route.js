import dbConnection from "@/backend/db/dbconnection";
import { NextResponse } from "next/server";
import employeeModel from "@/backend/models/employee";



// export async function GET(req){
//   await dbConnection();
//   try {
//     // const Alluser = await reportModel.find();
//     return NextResponse.json({
//       message: "User Found",
//       success: true,
//       // data: Alluser,
//     });
//   } catch (error) {
//     // console.log("Error From GET Api", error);
//     return NextResponse.json({
//       message: "user not created",
//       success: false,
//     });
//   }

// }
export async function POST(req){
    dbConnection();
    try {
        const data = await req.json();
        const createdUser = await employeeModel.create(data);
        
       return NextResponse.json({
        message: "User Created ",
        success: true,
        data: createdUser,
       })
    } catch (error) {
        if (error.code === 11000) {
            // Extract the duplicated key information from the error message
            const keyValue = error.keyValue ? error.keyValue : 'Unknown key';
            console.log(`Duplicate key error: ${JSON.stringify(keyValue)}`);
            return NextResponse.json({
                message: `${JSON.stringify(keyValue)} already exists`,
                success: false,
            }) 
        } 
        return NextResponse.json({
                message: "Error in POST API",
                success: false,
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
        console.log("Error in finding user",error)
        return NextResponse.json({
            message: "Error From GET Api",
            success: false,
        })
    }
}