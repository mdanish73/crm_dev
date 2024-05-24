import { SignJWT, jwtVerify } from "jose";
import nextConfig from "../../next.config.mjs";

// Generate The Token
async function tokenGenerator(data) {
  try {
    const token = await new SignJWT(data)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("10m")
      .setIssuedAt()
      .sign(new TextEncoder().encode(nextConfig.env.SECRET_KEY));
    return token;
  } catch (error) {
    console.log(error, "from tokenGenerator");
  }
}
// Check Token Verification
async function tokenVerification(token) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(nextConfig.env.SECRET_KEY)
    );
    return payload;
  } catch (error) {
    console.log(error, "from tokenVerification");
  }
}

export { tokenGenerator, tokenVerification };
