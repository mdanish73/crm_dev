"use client";
import { Menu, User } from "lucide-react";
import Ceoupdate from "@/components/Dialog/Ceoupdateform";
import Ceodelete from "@/components/Dialog/Ceodelete";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CeoTable({ CeoData }) {
  const TableHeaders = [
    "Name",
    "Image",
    "Contact",
    "Identification Number",
    "Email",
    "Username",
    "Actions",
  ];

  return (
    <section className="w-full bg-primary_bg p-3 rounded-md">
      <div>
        <table className="w-full">
          <thead className="uppercase sticky top-0 text-[15px] bg-secondary_bg h-10">
            <tr className="text-primaryText text-left">
              {TableHeaders.map((v, i) => (
                <th
                  className="text-left font-medium tracking-wide px-2"
                  key={i}
                >
                  {v}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CeoData.map((v) => (
              <tr key={v._id} className="text-secondaryText text-sm h-14">
                <td className="px-2">{v.fullName}</td>
                <td className="px-2">
                  <div className="w-9 h-9">
                    {v.CeoImage ? (
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={v.CeoImage}
                        alt="image"
                      />
                    ) : (
                      <User size={30} />
                    )}
                  </div>
                </td>
                <td className="px-2">{v.phone}</td>
                <td className="px-2">{v.identification_number}</td>
                <td className="px-2">{v.email}</td>
                <td className="px-2">{v.username}</td>
                <td className="px-2">
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Menu />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <Ceoupdate data={v} />
                          <Ceodelete Ceoid={v._id} />
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
