"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Menu } from "lucide-react";
import Ceoupdate from "@/components/Dialog/Ceoupdateform";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Ceodelete from "@/components/Dialog/Ceodelete";
import { useRouter } from "next/navigation";

export default function CeoTable({ CeoData }) {
  const router = useRouter();
  const TableHeaders = [
    "FullName",
    "Image",
    "CEO-Contact",
    "Identification-Number",
    "DateOfBirth",
    "Username",
    "Actions",
  ];

  return (
    <section className="bg-[rgb(24,24,27)]/40 backdrop-blur-lg py-5 px-3 rounded-2xl">
      <Table>
        <TableHeader className="bg-[rgb(38,38,38)]/50">
          <TableRow className="uppercase text-[rgb(161,161,170)] rounded-[15px] overflow-hidden">
            {TableHeaders.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {CeoData.length > 0 ? (
            CeoData.map((item) => (
              <TableRow
                className="text-secondaryText hover:bg-[#35374B] transition-colors"
                key={item._id}
              >
                <TableCell>{item.fullName}</TableCell>
                <TableCell>
                  <div className="w-8 h-8 rounded-full flex items-center gap-1 cursor-pointer">
                    <img
                      className="w-full h-full rounded-full"
                      src={
                        item?.companyCeo?.CeoImage
                          ? item?.companyCeo?.CeoImage
                          : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg"
                      }
                      alt="image"
                    />
                  </div>
                </TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.identification_number}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Menu className="hover:cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-slate-800 text-white">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => {
                            router.push(`/companies/ceo/${item._id}`);
                          }}
                          className="flex gap-1 hover:cursor-pointer hover:bg-[#83B4FF]"
                        >
                          <Eye size={18} />
                          <span className="text-sm font-medium">View</span>
                        </DropdownMenuItem>
                        <Ceoupdate data={item} />
                        <Ceodelete Ceoid={item._id} />
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={TableHeaders.length}
                className="text-center text-secondaryText"
              >
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
}
