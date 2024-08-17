'use client'
import React, { createContext, useEffect, useState } from 'react'

export const SideContext = createContext();

const SideBarContext = ({ children }) => {
  // function getWindowDimensions() {
  //   const { innerWidth: width } = window;
  //   return {
  //     width
  //   };
  // }
 
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // function useWindowDimensions() {
  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }
        
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);
  //   return windowDimensions.width;
  // }
  
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  return (
    <SideContext.Provider value={{ isSidebarVisible, setIsSidebarVisible }}>
      {children}
    </SideContext.Provider>
  )
}

export default SideBarContext