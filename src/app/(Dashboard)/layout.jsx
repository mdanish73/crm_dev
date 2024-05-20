import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideBar className="w-56" />
          <div className="flex-1">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
