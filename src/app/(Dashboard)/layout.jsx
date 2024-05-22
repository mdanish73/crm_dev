import SideBar from "@/components/SideBar";
import TopBar from "@/components/Topbar/TopBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div>
            <SideBar className="shadow-white shadow-2xl" />
          </div>
          <div className="flex-1">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}