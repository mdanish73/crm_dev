'use client'
import React from 'react'
import Image from 'next/image';

const SideBarLogo = () => {
  return (
    <Image src={'/logo w.png'} width={0} height={0} sizes='10vw' className='w-40 h-auto' priority alt='company logo' />
  )
}

export default SideBarLogo