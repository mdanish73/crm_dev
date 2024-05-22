import SideBar from "@/components/SideBar";
import TopBar from "@/components/Topbar/TopBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#060818]">
        <div className="flex h-screen overflow-hidden">
          <div>
            <SideBar className="shadow-white shadow-2xl" />
          </div>
          <div className="flex-1 overflow-y-auto">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}