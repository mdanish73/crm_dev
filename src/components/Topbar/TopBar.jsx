'use client'
import React, { useContext } from "react";
import Image from "next/image";
import {
  Bell,
  Flag,
  Menu
} from "lucide-react";
import { Calendar } from "lucide-react";
import { SquarePen } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import SearchBar from "./Search";
import Notification from "./Notification";
import { SideContext } from "@/Context/sidebar/SideBarContext";
import Message from "./Message";
import Profile from "./Profile";

const TopBar = () => {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(SideContext);

  return (
    <div className="w-full flex bg-primary_bg z-20 sticky lg:px-4 text-white items-center">
      <Image src={"/logow.png"} alt="logo" width={150} height={0} className={`${ !isSidebarVisible ? 'hidden lg:block' : 'hidden' }`} />
      
      <button onClick={() => setIsSidebarVisible(!isSidebarVisible)} className={`bg-gray-700/60 rounded-full size-8 lg:size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9] ${ !isSidebarVisible ? 'block' : 'hidden' }`}>
        <div className="size-8 lg:size-9 rounded-full flex items-center justify-center">
          <Menu size={20} strokeWidth={1} />
        </div>
      </button>
      
      <Link
        href="/"
        className="bg-gray-700/60 hidden lg:block rounded-full size-8 lg:size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]"
      >
        <div className="size-8 lg:size-9 rounded-full flex items-center justify-center">
          <Calendar size={20} strokeWidth={1} />
        </div>
      </Link>
      
      <Link
        href="/"
        className="bg-gray-700/60 hidden lg:block rounded-full size-8 lg:size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]"
      >
        <div className="size-8 lg:size-9 rounded-full flex items-center justify-center">
          <SquarePen size={20} strokeWidth={1} />
        </div>
      </Link>
      
      <Link
        href="/"
        className="bg-gray-700/60 hidden lg:block rounded-full size-8 lg:size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]"
      >
        <div className="size-8 lg:size-9 rounded-full flex items-center justify-center">
          <MessageCircleMore size={20} strokeWidth={1} />
        </div>
      </Link>
      
      <SearchBar />
      
      <button className="bg-gray-700/90 rounded-full size-8 lg:size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
        <div className="size-8 lg:size-9 rounded-full flex items-center justify-center">
          <Flag size={20} strokeWidth={1} />
        </div>
      </button>

      <Message />
      <Notification />
      <Profile />
    </div>
  );
};

export default TopBar;
