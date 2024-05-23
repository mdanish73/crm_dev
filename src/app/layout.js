'use client'
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBarContext from "@/Context/SideBarContext";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        <SideBarContext> 
          {children}
        </SideBarContext>
      </body>
    </html>
  );
}