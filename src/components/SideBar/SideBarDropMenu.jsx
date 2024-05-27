'use client'
import Link from 'next/link';
import React, { useState, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Links from './Links';

const SideBarDropMenu = ({ isOpened }) => {
  const pathname = usePathname();
  const navlinks = Links();
  console.log(navlinks)
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    if (isOpened) {
      setOpenMenuIndex(null);
    }
  }, [isOpened]);

  return (
    <>
      {navlinks.map((v, i) => {
        const linkClassNames = `text-slate-400 flex items-center gap-3 w-full mb-3 px-2 py-2 rounded-[7px] text-sm ${
          !isOpened ? 'slide-right' : ''
        } ${
          pathname === v.path ? 'text-[#2053EE]' : ''
        }`;

        return (
          <div key={i}>
            <Link
              href={v.children ? '#' : v.path}
              onClick={v.children ? () => toggleMenu(i) : undefined}
              style={{ animationDelay: `${i * 0.1}s` }}
              className={`hover:text-[#888EA8] flex justify-between items-center w-full mb-3 ${linkClassNames} ${
                openMenuIndex === i ? 'bg-[#4a62a6]/40' : v.children ? 'hover:bg-blue-500/30' : 'hover:bg-blue-500/30'
              }`}
            >
              <span className='flex items-center gap-3'>
                {v.icon}
                {v.title}
              </span>
              {v.children && <ChevronRight size={20} />}
            </Link>
            {v.children && (
              <div className={`${openMenuIndex === i ? 'max-h-[1000px]' : 'max-h-0'} transition-max-height duration-700 overflow-hidden pl-3`}>
                {v.children.map((child, j) => (
                  <Link
                    key={j}
                    href={child.path}
                    className={`text-slate-400 flex items-center gap-4 w-full mb-3 hover:bg-[#111827] px-2 py-2 rounded-[7px] text-sm hover:text-[#2053EE] relative group ${
                      pathname === child.path ? 'text-[#2053EE]' : ''
                    } ${
                      v.children ? 'hover:bg-blue-500/10' : 'hover:bg-[#181F32]'
                    }`}
                  >
                    <div className='bg-[#506690] group-hover:bg-[#2053eea5] w-1 h-1 rounded-full flex items-center justify-center'>
                      <div className='bg-[#2053EE] w-1 h-1 hidden group-hover:block rounded-full group-hover:animate-ping'></div>
                    </div>
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default SideBarDropMenu;