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
import Industries from "@/components/Dialog/industries";
import Countries from "@/components/Dialog/Countries";

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

const CompanyTable = ({finaldata,Name}) => {
  return (
    <>
      <section className="px-4  m-auto text-secondaryText text-center">
        <div className="flex">
          <h1 className="text-2xl  flex-1 text-left mb-4 gap-2">
            <span className="text-secondaryHeading">Company</span> Data
          </h1>
           <div className="gap-6 flex">
              <Countries/>
              <Industries/>
            </div> 
        </div>
        <Table key={finaldata._id}>
          <TableHeader>
            <TableRow className="bg-primary_bg uppercase rounded-2xl ">
              {input.map((v, i) => (
                <TableHead key={i} className="text-center">{v.value}</TableHead>
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
                  <TableCell>{v.companyCeo.fullName}</TableCell>
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
