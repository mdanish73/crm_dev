import dbConnection from "@/app/backend/db/dbconnection";
import superAdmin from "@/app/backend/models/superadmin";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
const POST = async (req) => {
  await dbConnection();
  try {
    const modelCount = await superAdmin.countDocuments();
    if (modelCount < 2) {
      try {
        const {
          fullname,
          username,
          email,
          phonenumber,
          password,
          otp,
          photo,
          cnic,
          accesslevel,
          dob,
        } = await req.json();
        const saltRound = await bcryptjs.genSalt(
          Number(process.env.SALT_ROUND)
        );
        const hashedPassword = await bcryptjs.hash(password, saltRound);
        const data = await superAdmin.create({
          fullname,
          username,
          email,
          phonenumber,
          password: hashedPassword,
          otp,
          photo,
          cnic,
          accesslevel,
          dob,
        });
        return NextResponse.json({
          message: "User Created SuccessFully",
          success: true,
          data: data,
        });
      } catch (error) {
        return NextResponse.json({
          message: "Internal Server Error",
          success: false,
        });
      }
    } else {
      return NextResponse.json({
        message: "Superadmin no more then 2!",
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const GET = async () => {
  dbConnection();

  try {
    const allUsers = await superAdmin.find();
    const singleUser = await superAdmin.findOne();
    return NextResponse.json({
      message: "All User Founds",
      success: true,
      data: allUsers,
      single: singleUser,
    });
  } catch (error) {
    console.log(error, "From GET API");
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
export { POST, GET };
