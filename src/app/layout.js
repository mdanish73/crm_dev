"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBarContext from "@/Context/SideBarContext";
import { Superadmin } from "@/Context/superadmin/Superadmin";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${poppins.variable}`} suppressHydrationWarning={true}>
        <Toaster position="top-center" reverseOrder={false} />
        <Superadmin>
          <SideBarContext>{children}</SideBarContext>
        </Superadmin>
      </body>
    </html>
  );
}
