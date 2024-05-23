'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Links from './Links';

const SideBarDropMenu = () => {
  const pathname = usePathname();

  const navlinks = Links();

  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <>
      {
        navlinks.map((v, i) => {
          if (v.children) {
            return (
              <>
                {/* <button onClick={() => toggleMenu(i)} key={i} className='text-[#506690] hover:text-[#888EA8] flex justify-between items-center w-full mb-3 hover:bg-[#181F32] px-2 py-2 rounded-[7px] text-sm'> */}
                <button onClick={() => toggleMenu(i)} key={i} className='text-slate-400 hover:text-[#888EA8] flex justify-between items-center w-full mb-3 hover:bg-[#181F32] px-2 py-2 rounded-[7px] text-sm'>
                  <span className='flex items-center gap-3'>
                    {v.icon}
                    {v.title}
                  </span>
                  <ChevronRight size={20} />
                </button>
                <div className={`${openMenuIndex === i ? 'max-h-[1000px]' : 'max-h-0'} transition-max-height duration-700 overflow-hidden pl-3`}>
                  {
                    v.children.map((v, i) => {
                      return (
                        // <Link key={i} href={v.path} className={`text-[#506690] flex items-center gap-4 w-full mb-3 hover:bg-[#111827] px-2 py-2 rounded-[7px] text-sm hover:text-[#2053EE] relative group ${ pathname == v.path ? 'text-[#2053EE]' : '' }`}>
                        <Link key={i} href={v.path} className={`text-slate-400 flex items-center gap-4 w-full mb-3 hover:bg-[#111827] px-2 py-2 rounded-[7px] text-sm hover:text-[#2053EE] relative group ${ pathname == v.path ? 'text-[#2053EE]' : '' }`}>
                          <div className='bg-[#506690] group-hover:bg-[#2053eea5] w-1 h-1 rounded-full flex items-center justify-center'>
                            <div className='bg-[#2053EE] w-1 h-1 hidden group-hover:block rounded-full group-hover:animate-ping'></div>
                          </div>
                          {v.title}
                        </Link>
                      )
                    })
                  }
                </div>
              </>
            )
          } else {
            return (
              <>
                {/* <Link key={i} href={v.path} className={`text-[#506690] flex items-center gap-3 w-full mb-3 hover:bg-[#181F32] px-2 py-2 rounded-[7px] text-sm ${ pathname == v.path ? 'text-[#2053EE]' : '' }`}> */}
                <Link key={i} href={v.path} className={`text-slate-400 flex items-center gap-3 w-full mb-3 hover:bg-[#181F32] px-2 py-2 rounded-[7px] text-sm ${ pathname == v.path ? 'text-[#2053EE]' : '' }`}>
                  {v.icon}
                  {v.title}
                </Link>
              </>
            )
          }
        })
      }
    </>
  )
}

export default SideBarDropMenu