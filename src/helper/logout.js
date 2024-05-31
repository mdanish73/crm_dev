"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Logout The User
const logout = async () => {
  const router = useRouter();
  try {
    const request = await axios.options("/api/auth/logout");
    if (request.data.success) {
      toast.success("LoggedOut Successfully");
      router.push("/");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export default logout;
