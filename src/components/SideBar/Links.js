import React from 'react'
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Links = () => {
  const pathname = usePathname();

  const superAdmin = [
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Companies', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
  ];
  
  const companyAdmin = [
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Branches', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
  ];
  
  const branchAdmin = [
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Industries', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, children: [
        { title: 'Sales', path: '/' },
        { title: 'Analytics', path: '/' },
        { title: 'Finance', path: '/' },
        { title: 'Crypto', path: '/' }
      ]
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
    {
      title: 'Dashboard', icon: <Home size={18} />, path: '/'
    },
  ];

  if (pathname === '/dashboard') {
    return superAdmin;
  } else if (pathname === '/companies') {
    return companyAdmin;
  } else if (pathname === '/branches') {
    return branchAdmin;
  }
}

export default Links

