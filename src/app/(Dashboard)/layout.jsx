import SideBar from "@/components/SideBar/SideBar";
import TopBar from "@/components/TopBar";

export default function RootLayout({ children }) {
  return (
    // <div className="bg-[#060818]">
    <div className="bg-[url('/assets/images/bgImg3.jpg')] bg-cover bg-no-repeat h-screen brightness-75">
      <div className="flex h-screen overflow-hidden">
        <div>
          <SideBar className="shadow-white shadow-2xl" />
        </div>
        <div className="flex-1">
          <TopBar />
          <div className="p-4 max-h-[92vh] h-full overflow-auto">
            <div className="backdrop-blur-xl h-full overflow-auto mainContent rounded-[10px] bg-[#0E1726]/40 p-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}