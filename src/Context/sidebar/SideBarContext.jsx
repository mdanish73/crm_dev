'use client'
import React, { createContext, useState } from 'react'

export const SideContext = createContext();

const SideBarContext = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  return (
    <SideContext.Provider value={{ isSidebarVisible, setIsSidebarVisible }}>
      {children}
    </SideContext.Provider>
  )
}

export default SideBarContext