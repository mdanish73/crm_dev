import React from "react";
import Loginform from "@/components/Forms/LoginForms";
import axios from "axios";

const Page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <div className="absolute inset-0 h-screen w-screen overflow-hidden bg-[url('/assets/dark1.svg')] bg-no-repeat bg-cover"></div>

      <div className="relative z-50 flex flex-col gap-5 items-center justify-center min-h-screen">
        <div className="bg-[#0608186c] backdrop-blur-md py-8 px-10 rounded-xl shadow-2xl flex flex-col gap-5 items-center justify-center overflow-hidden">
          <div>
            <h1 className=" text-white text-xl font-semibold tracking-widest">
              CRM
            </h1>
          </div>

          <Loginform />
          <div className="relative group text-[10px] text-slate-200">
            FORGOT YOUR PASSWORD?
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-slate-200 group-hover:w-full transform transition-all duration-300 ease-out"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
