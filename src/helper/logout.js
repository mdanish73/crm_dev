import axios from "axios";

// Logout The User
const logout = async () => {
  try {
    const request = await axios.options("/api/auth/logout");
    if (request.data.success) {
      toast.success("LoggedOut Successfully");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export default logout;
