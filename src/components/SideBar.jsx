"use client";
import { ChevronRight, Home, Minus } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const navlinks = [
    {
      title: "Dashboard",
      icon: <Home />,
      children: [
        { title: "Sales", path: "/", icon: <Minus /> },
        { title: "Analytics", path: "/", icon: <Minus /> },
        { title: "Finance", path: "/", icon: <Minus /> },
        { title: "Crypto", path: "/", icon: <Minus /> },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home />,
      children: [
        { title: "Sales", path: "/", icon: <Minus /> },
        { title: "Analytics", path: "/", icon: <Minus /> },
        { title: "Finance", path: "/", icon: <Minus /> },
        { title: "Crypto", path: "/", icon: <Minus /> },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home />,
      children: [
        { title: "Sales", path: "/", icon: <Minus /> },
        { title: "Analytics", path: "/", icon: <Minus /> },
        { title: "Finance", path: "/", icon: <Minus /> },
        { title: "Crypto", path: "/", icon: <Minus /> },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home />,
      path: "/",
    },
  ];

  return (
    <>
      {/* <h1>hey</h1> */}
    </>
  );
};

export default SideBar;
