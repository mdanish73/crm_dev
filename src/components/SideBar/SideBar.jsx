'use client'
import React, { useContext } from 'react'
import SideBarLogo from './SideBarLogo';
import SideBarDropMenu from './SideBarDropMenu';
import Arrow from './Arrow';
import { SideContext } from '@/Context/SideBarContext';

const SideBar = () => {
  const { isOpened } = useContext(SideContext);

  return (
    <div className={`bg-[#0E1726]/40 backdrop-blur-xl w-[263px] h-full shadow-xl shadow-[#ffffff28] overflow-hidden transition-max-width duration-700 relative z-30 ${ !isOpened ? 'py-1 px-2 max-w-[300px]' : 'max-w-0 p-0' }`}>
      <div className='flex items-center w-full justify-between pr-2'>
        <SideBarLogo />
        <Arrow />
      </div>

      <div className='p-1 sidebarNavs h-full overflow-y-scroll'>
        <SideBarDropMenu />
      </div>
    </div>
  )
}

export default SideBar