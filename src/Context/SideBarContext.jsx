'use client'
import React, { createContext, useState } from 'react'

export const SideContext = createContext();

const SideBarContext = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <SideContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </SideContext.Provider>
  )
}

export default SideBarContext