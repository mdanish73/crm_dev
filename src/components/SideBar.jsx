'use client'
import { ChevronRight, Home, Minus } from 'lucide-react';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
  const navlinks = [
    { 
      title: 'Dashboard', icon: <Home />, children: [
        { title: 'Sales', path: '/', icon: <Minus /> },
        { title: 'Analytics', path: '/', icon: <Minus /> },
        { title: 'Finance', path: '/', icon: <Minus /> },
        { title: 'Crypto', path: '/', icon: <Minus /> }
      ] 
    },
    { 
      title: 'Dashboard', icon: <Home />, children: [
        { title: 'Sales', path: '/', icon: <Minus /> },
        { title: 'Analytics', path: '/', icon: <Minus /> },
        { title: 'Finance', path: '/', icon: <Minus /> },
        { title: 'Crypto', path: '/', icon: <Minus /> }
      ] 
    },
    { 
      title: 'Dashboard', icon: <Home />, children: [
        { title: 'Sales', path: '/', icon: <Minus /> },
        { title: 'Analytics', path: '/', icon: <Minus /> },
        { title: 'Finance', path: '/', icon: <Minus /> },
        { title: 'Crypto', path: '/', icon: <Minus /> }
      ] 
    },
    { 
      title: 'Dashboard', icon: <Home />, path: '/' 
    },
  ];

  return (
    <div className='bg-[#0E1726] min-w-[263px] py-1 px-2'>
      <div>
        <Image src={'/logo w.png'} width={150} height={200} />
      </div>

      <div>
        {
          navlinks.map((v, i) => {
            if (v.children) {
              return (
                
              )
            } else {

            }
          })
        }
      </div>
    </div>
  )
}

export default SideBar