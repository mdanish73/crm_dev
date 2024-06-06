import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  import { EditIcon, Eye, Trash } from "lucide-react";

const json = [
    {
      name: "Details",
      icon: <Eye size={18} />,
    },
    {
      name: "Edit",
      icon: <EditIcon size={18} />,
    },
    {
      name: "Delete",
      icon: <Trash size={18} color="red" />,
    },
  ];

const input = [
  {
    value: "Name",
  },
  {
    value: "Contact",
  },
  {
    value: "Email",
  },
  {
    value: "Identification Number",
  },
  {
    value: "Industry",
  },
  {
    value: "Sub Industry",
  },
  {
    value: "Country",
  },
  {
    value: "CEO",
  },
  {
    value: "Actions",
  },
];

const CompanyTable = ({finaldata}) => {
  return (
    <>
      <section className="px-4  m-auto text-secondaryText text-center">
        <h1 className="text-2xl flex mb-4 gap-2">
          <span className="text-secondaryHeading">Company</span> Data
        </h1>
        <Table key={finaldata._id}>
          <TableHeader>
            <TableRow className="bg-primary_bg uppercase rounded-2xl ">
              {input.map((v, i) => (
                <TableHead key={i}>{v.value}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {finaldata.length > 0 ? (
              finaldata.map((v, index) => (
                <TableRow
                  className="text-secondaryText hover:bg-primaryTextHover transition-colors"
                  key={index}
                >
                  <TableCell>{v.companyname}</TableCell>
                  <TableCell>{v.contact}</TableCell>
                  <TableCell>{v.email} </TableCell>
                  <TableCell>{v.identificationNumber}</TableCell>
                  <TableCell>{v.industry}</TableCell>
                  <TableCell>{v.subIndustry}</TableCell>
                  <TableCell>{v.country}</TableCell>
                  <TableCell>{v.companyceo}</TableCell>
                  <TableCell>

                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={input.length}
                  className="text-center text-secondaryText"
                >
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default CompanyTable;
