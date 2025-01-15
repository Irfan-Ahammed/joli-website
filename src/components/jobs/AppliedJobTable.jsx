import React from "react";
import {  TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell, Table } from "../ui/table"; // Ensure this is your custom component or library import
import { Badge } from "../ui/badge"; // Badge for displaying the status

const AppliedJobTable = () => {
  const appliedJobs = [
    {
      date: "17-07-2024",
      role: "Frontend Developer",
      company: "Google",
      status: "Selected",
    },
    {
      date: "25-07-2024",
      role: "Backend Developer",
      company: "Amazon",
      status: "Pending",
    },
    {
      date: "30-07-2024",
      role: "Fullstack Developer",
      company: "Facebook",
      status: "Rejected",
    },
    {
      date: "05-08-2024",
      role: "UI/UX Designer",
      company: "Apple",
      status: "Selected",
    },
  ];

  return (
    <div className="applied-job-table">
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right">
                <Badge>{job.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
