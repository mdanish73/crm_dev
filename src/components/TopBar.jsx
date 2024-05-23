'use client'
import React , {useState  }from "react";
import Image from "next/image";
import { Bell, Flag, Mail, Menu, Moon, Search} from 'lucide-react';
import { Calendar } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { SideContext } from "@/Context/SideBarContext";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";


const TopBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { isOpened, setIsOpened } = useContext(SideContext);
  const handleFocus = () => {
    setIsFocused(true);
  };
  return (
    <>
      <div className="w-full flex bg-[#0E1726]/40 backdrop-blur-md z-20 sticky top-0 px-2 gap-1 text-white items-center">
        <Image src={'/logo w.png'} alt='logo' width={150} height={0} className={`${ isOpened ? 'block' : 'hidden' }`} />
        <button onClick={() => setIsOpened(!isOpened)} className={`bg-[#292F46]/70 backdrop-blur-sm rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9] ${ isOpened ? 'block' : 'hidden' }`}>
          <div className=" size-9 rounded-full flex items-center justify-center">
          <Menu size={20} strokeWidth={1} />
          </div>
        </button>
        <Link href='/' className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
          <Calendar size={20} strokeWidth={1}/>
          </div>
        </Link>
        <Link href='/' className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
          <SquarePen size={20} strokeWidth={1} />
          </div>
        </Link>
        <Link href='/' className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
            <MessageCircleMore size={20} strokeWidth={1} />
          </div>
        </Link>
        <div className='flex-1 relative'>
          <Search size={20} strokeWidth={0.5} color={isFocused?'#3B51B9':'gray'} className="absolute z-30 top-1/2 left-4 -translate-x-1/2 -translate-y-1/2" />
          <Input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} type='search' placeholder='Search...' className={`w-max pl-8 py-4 bg-[#121E32]/50 text-[#6B7280] rounded-[10px] outline-none border ${ isFocused ? 'border-[#3B51B9]' : 'border-none' }`} />
        </div>
        <Link href='/' className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
          <Moon size={20} strokeWidth={1} />
          </div>
        </Link>
        <button className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
            <Flag size={20} strokeWidth={1} />
          </div>
        </button>
        <button className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
            <Mail size={20} strokeWidth={1} />
          </div>
        </button>
        <button className="bg-[#292F46] rounded-full size-9 mx-1 my-2 hover:bg-[3b82f680] hover:text-[#3B51B9]">
          <div className=" size-9 rounded-full flex items-center justify-center">
            <Bell size={20} strokeWidth={1} />
          </div>
        </button>
        <div className="bg-[#292F46] rounded-full size-10 mx-1 my-2 cursor-pointer grayscale hover:grayscale-0">
          <Image src={'/team-1.jpg'} alt="profile" width={50} height={50} className="rounded-full"/>
        </div>
      </div>
    </>
  );
};

export default TopBar;