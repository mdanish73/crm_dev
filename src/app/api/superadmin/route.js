import dbConnection from "@/backend/db/dbconnection";
import superAdmin from "@/backend/models/admins/superadmin";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
dbConnection();
const POST = async (req) => {
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
        console.log(process.env.SALT_ROUND);
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
        return NextResponse.json(
          {
            message: "SuperAdmin Created SuccessFully",
            success: true,
            data: data,
          },
          {
            status: 200,
          }
        );
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          {
            message: "Internal Server Error",
            success: false,
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json({
        message: "Superadmin no more then 2!",
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};

const GET = async () => {
  try {
    const allUsers = await superAdmin.find();
    const singleUser = await superAdmin.findOne();
    return NextResponse.json(
      {
        message: "All User Founds",
        success: true,
        data: allUsers,
        single: singleUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error, "From GET API");
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
};
export { POST, GET };
