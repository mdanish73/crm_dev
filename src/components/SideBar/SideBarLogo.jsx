'use client'
import React, { useContext } from 'react'
import Image from 'next/image';
import { SideContext } from '@/Context/sidebar/SideBarContext';

const SideBarLogo = () => {
  const { isOpened } = useContext(SideContext);

  return (
    <Image src={'/logo w.png'} width={0} height={0} sizes='100vw' className={`w-40 h-auto transition-opacity ${ isOpened ? 'opacity-0' : 'opacity-100' }`} priority alt='company logo' />
  )
}

export default SideBarLogo