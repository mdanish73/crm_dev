import TopBar from "@/components/Topbar/TopBar";
import SideBar from "@/components/Aside/SideBar";

export default function RootLayout({ children }) {
  return (
    <div className="bodyBG h-screen w-screen box-border">
      <div className="flex h-full w-full">
        <div>
          <SideBar />
        </div>
        <div className="flex-1 flex flex-col w-full overflow-x-hidden">
          <TopBar />
          <div className="p-2 h-full overflow-auto">
            <div className="backdrop-blur-xl h-full overflow-y-auto w-full mainContent rounded-sm bg-primary_bg/40 p-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
