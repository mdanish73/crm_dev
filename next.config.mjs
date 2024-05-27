/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET_KEY:
      "nadkclnsdlkcnkn546t874ndcjnkw223221@2mfmklwdcmsndscksdklcf0954u8945u8",
    SALT_ROUND: "10",
    DB_URI:
      "mongodb+srv://info:Y8gORoh2XZzPKufo@edify-college.ajku8l8.mongodb.net/crm?retryWrites=true&w=majority",
    LOCAL_HOST: "http://localhost:3000/",
  },
  images: {
    domains: ["img.freepik.com"], //Domain of image host
  },
};

export default nextConfig;
