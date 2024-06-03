import { usePathname } from "next/navigation";
import {
  Building2,
  Home,
  LogOut,
  NotebookText,
  Settings,
  UserCog,
  Users,
} from "lucide-react";

const Links = () => {
  const pathname = usePathname();
  const superAdmin = [
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/dashboard",
    },
    {
      title: "Companies",
      icon: <Building2 size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Forms",
      icon: <NotebookText size={18} />,
      children: [
        { title: "Companies", path: "/companies/add" },
        { title: "Industries", path: "/industries/add" },
        { title: "Departments", path: "/" },
      ],
    },
    {
      title: "CEOs",
      icon: <Users size={18} />,
      path: "/ceo",
    },
    {
      title: "Profile",
      icon: <UserCog size={18} />,
      path: `/profile`,
    },
    {
      title: "Settings",
      icon: <Settings size={18} />,
      path: "/dashboard",
    },
    {
      title: "Log Out",
      icon: <LogOut size={18} />,
      path: "#",
      isLogOut: true
    },
  ];

  const companyAdmin = [
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Branches",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/",
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/",
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/",
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/dashboard",
    },
    {
      title: "Branches",
      icon: <Home size={18} />,
      path: "/branches",
    },
  ];

  const branchAdmin = [
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Industries",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      children: [
        { title: "Sales", path: "/" },
        { title: "Analytics", path: "/" },
        { title: "Finance", path: "/" },
        { title: "Crypto", path: "/" },
      ],
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/",
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/",
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/",
    },
    {
      title: "Dashboard",
      icon: <Home size={18} />,
      path: "/dashboard",
    },
    {
      title: "Employees",
      icon: <Home size={18} />,
      path: "/employees",
    },
  ];

  if (pathname && pathname.startsWith("/dashboard") || pathname.startsWith("/profile")) {
    return superAdmin;
  } else if (pathname && pathname.startsWith("/companies")) {
    return companyAdmin;
  } else if (pathname && pathname.startsWith("/branches")) {
    return branchAdmin;
  } else {
    return null;
  }
};

export default Links;
