import React, { useContext } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { LockKeyhole, LogOut, Mail, User } from 'lucide-react';
import { SuperadminContext } from "@/Context/superadmin/Superadmin";


const Profile = () => {
  const {data}=useContext(SuperadminContext)
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className=" rounded-full size-10 mx-1 my-2 cursor-pointer grayscale hover:grayscale-0">
            <Image
              src={"/team-1.jpg"}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="absolute p-0 w-60 top-1 right-1 bg-[#1B2E4B] bg-opacity-80 backdrop-blur-lg rounded outline-none border-none overflow-hidden">

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
                <div className=" flex-1   mx-4  text-left">
                    <h2 className="text-[#888EA8] text-sm">{data.fullname}</h2>
                    <Link href='/' className="text-xs text-[#616b82] hover:underline">{data.email}</Link>
                </div>
            </div>
            <Link href='/' className="w-full h-10 px-4 py-2 gap-3 text-sm flex text-[#888EA8] hover:bg-[#1F335B]">
                <User size={20} strokeWidth={1}/>
                <p className="font-thin">Profile</p>
            </Link>
            <Link href='/' className="w-full h-10 px-4 py-2 gap-3 text-sm flex text-[#888EA8] hover:bg-[#1F335B]">
                <Mail  size={20} strokeWidth={1}/>
                <p className="font-thin">Inbox</p>
            </Link>
            <Link href='/' className="w-full h-10 px-4 py-2 gap-3 text-sm flex text-[#888EA8] hover:bg-[#1F335B]">
                <LockKeyhole size={20} strokeWidth={1}/>
                <p className="font-thin">Lock Screen</p>
            </Link>

            <hr className=" border-[#31415E]" />
            <Link href='/' className="w-full h-12 px-4 py-3 gap-3 text-sm flex text-[#d64a4a] hover:bg-[#1F335B] hover:text-[#4361EE]">
                <LogOut size={20} strokeWidth={1}/>
                <p className="font-thin">Sign Out</p>
            </Link>

        </PopoverContent>
      </Popover>
    </>
  );
};

export default Profile;
