'use client'
import React, { useContext } from 'react'
import { ChevronsLeft } from 'lucide-react'
import { SideContext } from '@/Context/sidebar/SideBarContext';

const Arrow = () => {
  const { isOpened, setIsOpened } = useContext(SideContext);
  
  return (
    <div onClick={() => setIsOpened(!isOpened)} className='hover:bg-[#252D3A] rounded-full p-1 cursor-pointer'>
      <ChevronsLeft size={20} color='#fff' />
    </div>
  )
}

export default Arrow