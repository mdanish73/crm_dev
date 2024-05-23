import React from "react";
import Image from "next/image";
import {
  Bell,
  Flag,
  Menu,
  Moon,
} from "lucide-react";
import { Calendar } from "lucide-react";
import { SquarePen } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import SearchBar from "./Search";
import Notification from "./Notification";
import Message from "./Message";

const TopBar = () => {
  
  return (
    <>
      <div className="w-full flex bg-[#0E1726] z-20 sticky px-4 text-white items-center">
        <Image src={"/logo w.png"} alt="logo" width={150} height={0} />
        <button className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
            <Menu size={20} strokeWidth={1} />
          </div>
        </button>
        <Link
          href="/"
          className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]"
        >
          <div className=" size-9 rounded-full flex items-center justify-center">
            <Calendar size={20} strokeWidth={1} />
          </div>
        </Link>
        <Link
          href="/"
          className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]"
        >
          <div className=" size-9 rounded-full flex items-center justify-center">
            <SquarePen size={20} strokeWidth={1} />
          </div>
        </Link>
        <Link
          href="/"
          className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]"
        >
          <div className=" size-9 rounded-full flex items-center justify-center">
            <MessageCircleMore size={20} strokeWidth={1} />
          </div>
        </Link>
        <SearchBar/>
        <Link
          href="/"
          className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]"
        >
          <div className=" size-9 rounded-full flex items-center justify-center">
            <Moon size={20} strokeWidth={1} />
          </div>
        </Link>
        <button className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
            <Flag size={20} strokeWidth={1} />
          </div>
        </button>

        <Message/>
        <Notification/>
        
        <div className="bg-[#292F46] rounded-full size-10 mx-1 my-2 cursor-pointer grayscale hover:grayscale-0">
          <Image
            src={"/team-1.jpg"}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
