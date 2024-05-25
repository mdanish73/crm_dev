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
            <button className="bg-gray-700/90 rounded-full w-9 h-9 mx-1 my-2 relative">
                <div className="absolute inset-0 flex items-center justify-center rounded-full hover:text-[#3B51B9] ">
                    <Mail size={20} strokeWidth={1} />
                </div>
            </button>
            </PopoverTrigger>
            <PopoverContent className="absolute p-0 w-96 top-1 right-1 bg-[#1b2e4b22] backdrop-blur-md  rounded outline-none border-none overflow-hidden">

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
                    <p className="bg-[#31415E] text-slate-400 px-1  rounded text-xs">1hrs</p>
                    <button className="border rounded-full text-white size-4 flex justify-center ">
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
  