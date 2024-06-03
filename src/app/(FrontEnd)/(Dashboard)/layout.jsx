import TopBar from "@/components/Topbar/TopBar";
import SideBar from "@/components/Aside/SideBar";

export default function RootLayout({ children }) {
  return (
    <div className="bodyBG h-screen">
      <div className="flex h-full">
        <div>
        </div>
        <div className="flex-1 flex flex-col">
          <TopBar />
          <div className="p-2 h-full overflow-auto">
            <div className="backdrop-blur-xl h-full overflow-auto mainContent rounded-sm  bg-[#0E1726]/40 p-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
