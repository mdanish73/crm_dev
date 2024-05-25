/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET_KEY:
      "nadkclnsdlkcnkn546t874ndcjnkw223221@2mfmklwdcmsndscksdklcf0954u8945u8",
    SALT_ROUND: 10,
  },
  images: {
    domains: ["img.freepik.com"], //Domain of image host
  },
};

export default nextConfig;
