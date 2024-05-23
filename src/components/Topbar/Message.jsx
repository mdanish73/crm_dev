import React from 'react'
import {
    Info,
    Mail,
    MoveRight,
    Shield,
    X,
  } from "lucide-react"; 
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
  const Message = () => {
  
    return (
        <>   
            <Popover className='relative'>
            <PopoverTrigger asChild>
            <button className="bg-[#292F46] rounded-full w-9 h-9 mx-1 my-2 relative">
                <div className="absolute inset-0 flex items-center justify-center rounded-full hover:text-[#3B51B9] ">
                    <Mail size={20} strokeWidth={1} />
                </div>
            </button>
            </PopoverTrigger>
            <PopoverContent className="absolute p-0 w-96 top-1 right-1 bg-[#1B2E4B]  rounded outline-none border-none overflow-hidden">

                <div className="bg-[url('/menu-heade.jpg')] w-full bg-cover text-white p-5">
                    <h3 className="text-lg text-left">Messages</h3>
                </div>
    
                {/* Congratulation */}
                <div className="flex m-4">
                <div className=" size-9 bg-[#00AB55] rounded-full flex items-center justify-center">
                    <Shield size={20} strokeWidth={1} />
                </div>
                <div className=" flex-1  ml-4 text-sm text-left">
                    <h2 className="text-[#C4CCD6] ">Congratulation</h2>
                    <p className="text-xs text-[#686F7E]">Your OS has been updated.</p>
                </div>
                <div className="flex gap-3 m-2">
                    <p className="bg-[#31415E] text-[#888EA8]  rounded text-xs">1hrs</p>
                    <button className="border rounded-full text-white size-4 flex justify-center ">
                    <X size={13} strokeWidth={1} />
                    </button>
                </div>
                </div>
    
                {/* Switch */}
                <div className="flex m-4">
                <div className=" size-9 bg-[#2196F3] rounded-full flex items-center justify-center">
                    <Info size={20} strokeWidth={1} />
                </div>
                <div className=" flex-1  ml-4 text-sm text-left">
                    <h2 className="text-[#C4CCD6] ">Did you know?</h2>
                    <p className="text-xs text-[#686F7E]">You can switch between artboards.</p>
                </div>
                <div className="flex gap-3 m-2">
                    <p className="bg-[#31415E] text-[#888EA8]  rounded text-xs">2hrs</p>
                    <button className="border rounded-full text-white size-4 flex justify-center ">
                    <X size={13} strokeWidth={1} />
                    </button>
                </div>
                </div>
    
                {/* Report */}
                <div className="flex m-4">
                <div className=" size-9 bg-[#E7515A] rounded-full flex items-center justify-center">
                    <X size={20} strokeWidth={1} />
                </div>
                <div className=" flex-1  ml-4 text-sm text-left">
                    <h2 className="text-[#C4CCD6] ">Something went wrong!</h2>
                    <p className="text-xs text-[#686F7E]">Send Report.</p>
                </div>
                <div className="flex gap-3 m-2">
                    <p className="bg-[#31415E] text-[#888EA8]  rounded text-xs">2days</p>
                    <button className="border rounded-full text-white size-4 flex justify-center ">
                    <X size={13} strokeWidth={1} />
                    </button>
                </div>
                </div>
    
                {/* Warning */}
                <div className="flex m-4">
                <div className=" size-9 bg-[#E2A03F] rounded-full flex items-center justify-center">
                    <Info size={20} strokeWidth={1} />
                </div>
                <div className=" flex-1  ml-4 text-sm text-left">
                    <h2 className="text-[#C4CCD6] ">Warning</h2>
                    <p className="text-xs text-[#686F7E]">Your password strength is low.</p>
                </div>
                <div className="flex gap-3 m-2">
                    <p className="bg-[#31415E] text-[#888EA8]  rounded text-xs">5days</p>
                    <button className="border rounded-full text-white  size-4 flex justify-center ">
                    <X size={13} strokeWidth={1} />
                    </button>
                </div>
                </div>
    
                <hr className=" border-[#31415E]" />
                <div className="group flex justify-center gap-3 p-4 text-sm text-[#888EA8] cursor-pointer">
                <p className="transition-all duration-300 group-hover:underline">VIEW ALL ACTIVITIES</p>
                <MoveRight size={15} strokeWidth={2} className="mt-1 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
            
            </PopoverContent>
            </Popover>
        </>  
        );
    };
  
  export default Message;
  