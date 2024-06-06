"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBarContext from "@/Context/sidebar/SideBarContext";
import { Superadmin } from "@/Context/superadmin/Superadmin";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${poppins.variable} m-0 p-0 bg-secondary_bg`} suppressHydrationWarning={true}>
        <Superadmin>
            <SideBarContext>
              {children}
              <Toaster position="bottom-right" />
            </SideBarContext>
        </Superadmin>
      </body>
    </html>
  );
}
