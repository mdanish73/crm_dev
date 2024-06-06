import TopBar from "@/components/Topbar/TopBar";
import SideBar from "@/components/Aside/SideBar";

export default function RootLayout({ children }) {
  return (
    <div className="bodyBG h-screen w-screen box-border">
      <div className="flex h-full w-full">
        <div className="shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] relative z-50">
          <SideBar />
        </div>
        <div className="flex-1 flex flex-col w-full overflow-x-hidden">
          <TopBar />
          <div className="p-2 h-full overflow-auto">
            <div className="h-full overflow-y-auto w-full mainContent">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}