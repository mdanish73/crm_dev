'use client'
import React from 'react'
import Image from 'next/image';

const SideBarLogo = () => {
  return (
    <Image src={'/logo w.png'} width={150} height={0} priority alt='company logo' />
  )
}

export default SideBarLogo