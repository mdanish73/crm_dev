import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const OPTIONS = async () => {
  try {
    cookies().delete("AccessToken");
    return NextResponse.json({
      message: "LoggedOut!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export { OPTIONS };
