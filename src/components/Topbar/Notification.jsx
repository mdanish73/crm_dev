import React from 'react'
import {Bell,
    X,} from "lucide-react";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import Image from 'next/image';

const Notification = () => {
  return (
    <>
    <Popover>
        <PopoverTrigger asChild>
            <button className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
                <div className=" size-9 rounded-full flex items-center justify-center">
                    <Bell size={20} strokeWidth={1} />
                </div>
            </button>
        </PopoverTrigger>
        <PopoverContent className="absolute p-0 w-[23rem] top-1 right-1 bg-[#1B2E4B] bg-opacity-80 backdrop-blur-lg rounded outline-none border-none overflow-hidden">

            <div className="flex  p-3">
                <h3 className="flex-1 text-lg text-left text-[#888EA8]">Notification</h3>
                <p className="w-10  h-5 rounded m-auto flex justify-center items-center text-white text-xs bg-[#3B57CD] ">3New</p>
            </div>

            <hr className=" border-[#31415E]" />

            <div className="group flex m-4">
                <div className=" rounded-full size-12 ">
                        <Image
                        src={"/team-1.jpg"}
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                        />
                </div>
                <div className=" flex-1  my-1 mx-4  text-left">
                    <h2 className="text-[#C4CCD6] text-sm"><strong>John Doe</strong> invite you to <strong>Prototyping</strong> </h2>
                    <p className="text-xs text-[#686F7E]">45 min ago</p>
                </div>
                <button className="border rounded-full text-white size-4 hidden justify-center items-center m-auto group-hover:flex">
                    <X size={13} strokeWidth={1} />
                </button>
            </div>
            <hr className=" border-[#31415E]" />

            <div className="group flex m-4">
                <div className="rounded-full size-12 ">
                        <Image
                        src={"/team-1.jpg"}
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                        />
                </div>
                <div className=" flex-1  my-1 mx-4  text-left">
                    <h2 className="text-[#C4CCD6] text-sm"><strong>Adam Nolan</strong> mentioned you to <strong>UX Basics</strong></h2>
                    <p className="text-xs text-[#686F7E]">9h ago</p>
                </div>
                <button className="border rounded-full text-white size-4 hidden justify-center items-center m-auto group-hover:flex">
                    <X size={13} strokeWidth={1} />
                </button>
            </div>

            <hr className=" border-[#31415E]" />

            <div className="group flex m-4">
                <div className=" rounded-full size-12 ">
                        <Image
                        src={"/team-1.jpg"}
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                        />
                </div>
                <div className=" flex-1  my-1 mx-4  text-left">
                    <h2 className="text-[#C4CCD6] text-sm"><strong>Anna Morgan</strong>Upload a file</h2>
                    <p className="text-xs text-[#686F7E]">9h ago</p>
                </div>
                <button className="border rounded-full text-white size-4 hidden justify-center items-center m-auto group-hover:flex">
                    <X size={13} strokeWidth={1} />
                </button>
            </div>

            <hr className=" border-[#31415E]" />
             <button className='w-auto mx-6 my-4 shadow-sm shadow-[#7c8edb] hover:shadow-none px-20 py-3 rounded-md bg-[#4361EE] text-white'>
                Read All Notifications
             </button>
            </PopoverContent>

    </Popover>
    </>
  )
}

export default Notification
