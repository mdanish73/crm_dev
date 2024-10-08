"use client";
import React, { useState, useContext, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Links from "./Links";
import { SideContext } from "@/Context/sidebar/SideBarContext";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

const sideBarVariants = {
  hidden: { width: 0, opacity: 1 },
  visible: { width: 270, opacity: 1 },
};

const navItemVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function SideBar() {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(SideContext);
  const data = Links();
  useLayoutEffect(() => {
    setIsSidebarVisible(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isSidebarVisible && (
          <motion.section
            className="bg-primary_bg overflow-hidden absolute z-50 lg:static h-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sideBarVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="flex items-center justify-between p-2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navItemVariants}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/logow.png"}
                alt="logo"
                width={150}
                height={0}
                sizes="100"
                className={`${isSidebarVisible ? "opacity-100" : "opacity-0"}`}
              />
              <button
                className="bg-slate-800 w-5 h-5 p-[2px] rounded-full flex items-center justify-center"
                onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              >
                <ChevronLeft />
              </button>
            </motion.span>
            <nav className="p-2">
              {data?.map((section, index) => (
                <NavItem key={index} section={section} index={index} />
              ))}
            </nav>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ section, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  async function Logout () {
    alert("Logout button clicked");
    // try {
    //   const { data } = await axios.delete("/api/auth/logout");
    //   console.log(data);
    //   if (data.success) {
    //     toast.success("LoggedOut Successfully", { className: "toastSuccess" });
    //     router.push("/");
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  if (section.children) {
    return (
      <motion.div
        className="my-2 overflow-auto"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navItemVariants}
        transition={{ duration: 0.2, delay: index * 0.1 }}
      >
        <button
          className="flex items-center whitespace-nowrap justify-between w-full text-left text-sm hover:bg-slate-800 rounded-md text-slate-400 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-3">
            {section.icon}
            {section.title}
          </span>
          <ChevronRight
            size={20}
            className={`transition-transform ${isOpen && "-rotate-90"}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pl-2"
            >
              {section.children.map((link, linkIndex) => (
                <motion.a
                  key={linkIndex}
                  href={link.path}
                  className="flex items-center gap-3 text-slate-400 text-sm py-2 my-2 pl-3 hover:bg-slate-700 group rounded-md w-full"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={navItemVariants}
                  transition={{ duration: 0.3, delay: linkIndex * 0.1 }}
                >
                  <div className="bg-[#506690] group-hover:bg-[#2053eea5] w-1 h-1 rounded-full flex items-center justify-center">
                    <div className="bg-[#2053EE] w-1 h-1 hidden group-hover:block rounded-full group-hover:animate-ping"></div>
                  </div>
                  <span className="">{link.title}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
  
  return (
    <motion.a
      href={section.path}
      className="flex items-center gap-3 whitespace-nowrap cursor-pointer hover:bg-slate-800 rounded-md text-slate-400 text-sm p-2 mb-2"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={navItemVariants}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {section.icon}
      {section.title}
    </motion.a>
  );
}