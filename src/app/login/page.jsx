
import React from 'react';
import Loginform from '@/components/Forms/LoginForms';

const Page = () => {
  return (
    <div className="relative min-h-screen">
        <div className="absolute inset-0 h-screen w-screen overflow-hidden bg-[url('/assets/dark1.svg')] bg-no-repeat bg-cover"></div>
    
      <div className="relative z-50 flex flex-col gap-5 items-center justify-center min-h-screen">
        <div>
          <h1 className=' text-white text-3xl font-bold {poppins.className}'>CRM</h1>
        </div>
        <div className="bg-[#191947] w-[300px] h-[180px]  rounded-xl shadow-2xl flex items-center justify-center">
          <Loginform />
        </div>
        <div className=' text-[10px] text-slate-400 underline'>FORGOT YOUR PASSWORD?</div>
      </div>
    </div>
  );
};

export default Page;

