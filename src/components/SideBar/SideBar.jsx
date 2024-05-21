import React from 'react'
import SideBarLogo from './SideBarLogo';
import { ChevronsLeft } from 'lucide-react'
import SideBarDropMenu from './SideBarDropMenu';

const SideBar = () => {
  return (
    <div className='bg-[#0E1726] min-w-[263px] w-full py-1 px-2 h-full shadow-xl shadow-[#ffffff2f] relative'>
      <div className='flex items-center w-full justify-between pr-2'>
        <SideBarLogo />
        <div className='hover:bg-[#252D3A] rounded-full p-1 cursor-pointer'>
          <ChevronsLeft size={20} color='#fff' />
        </div>
      </div>

      <div className='p-1 sidebarNavs h-full overflow-y-scroll'>
        <SideBarDropMenu />
      </div>
    </div>
  )
}

export default SideBar