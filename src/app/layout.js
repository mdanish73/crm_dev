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
      <body className={`${poppins.variable}`} suppressHydrationWarning={true}>
        <Superadmin>
          <SideBarContext>
            {children}
            <Toaster
              // toastOptions={{
              //   style: {
              //     padding: "30px",
              //     fontSize: "1.2rem",
              //     width: "80%",
              //     height: "100%",
              //   },
              // }}
              position="bottom-right"
            />
          </SideBarContext>
        </Superadmin>
      </body>
    </html>
  );
}
