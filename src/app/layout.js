"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBarContext from "@/Context/SideBarContext";
import { Superadmin, } from "@/Context/superadmin/Superadmin";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Superadmin>
          <SideBarContext>{children}</SideBarContext>
        </Superadmin>
      </body>
    </html>
  );
}
