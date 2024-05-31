'use client'
import Link from 'next/link';
import React, { useState, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Links from './Links';
import axios from 'axios';
import { toast } from 'sonner';

const SideBarDropMenu = ({ isOpened }) => {
  const router = useRouter()
  const pathname = usePathname();
  const navlinks = Links();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [animate, setAnimate] = useState(false);
  const toggleMenu = (index) => {
    setOpenMenuIndex(prevIndex => (prevIndex === index ? null : index));
  };

  useLayoutEffect(() => {
    if (!isOpened) {
      setOpenMenuIndex(null);
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpened, pathname]);

  // logout ===================================================//
  const Logout = async () => {
    try {
      const {data} = await axios.delete("/api/auth/logout");
      console.log(data);
      if (data.success) {
        toast.success("LoggedOut Successfully", { className: "toastSuccess" });
        router.push("/")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // logout ===================================================//

  return (
    <>
      {navlinks?.map((link, index) => {
        const linkClassNames = `text-slate-400 flex items-center gap-3 w-full mb-3 px-2 py-2 rounded-[7px] text-sm ${animate ? 'slide-right' : ''
          } ${pathname === link.path ? 'text-[#2053EE]' : ''}`;

        return (
          <div key={index}>
            <Link
              href={link.children ? '#' : link.path}
              onClick={link.isLogOut ? Logout  : link.children ? () => toggleMenu(index) : undefined}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`hover:text-[#888EA8] flex justify-between items-center w-full mb-3 ${linkClassNames} ${openMenuIndex === index ? 'bg-[#4a62a6]/40' : link.children ? 'hover:bg-blue-500/30' : 'hover:bg-blue-500/30'
              }`}
            >
              <span className='flex items-center gap-3'>
                {link.icon}
                {link.title}
              </span>
              {link.children && <ChevronRight size={20} className={`transition-transform ${openMenuIndex === index && '-rotate-90'}`} />}
            </Link>
            {link.children && (
              <div className={`${openMenuIndex === index ? 'max-h-[1000px]' : 'max-h-0'} transition-max-height duration-700 overflow-hidden pl-3`}>
                {link.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.path}
                    className={`text-slate-400 flex items-center gap-4 w-full mb-3 hover:bg-[#111827] px-2 py-2 rounded-[7px] text-sm hover:text-[#2053EE] relative group ${pathname === child.path && 'text-[#2053EE]'
                      } hover:bg-blue-500/10`}
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