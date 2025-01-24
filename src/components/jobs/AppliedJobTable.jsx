import React from "react";
import {
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  Table,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const appliedJobs = useSelector((state) => state.job?.appliedJobs);
  //  console.log("applied",appliedJobs);

  const getStatusClass = (status) => {
    switch (status) {
      case "Selected":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="applied-job-table overflow-x-auto">
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
              <TableCell>
                {new Date(job.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.wage}</TableCell>
              <TableCell className="text-right">
                <Badge className={getStatusClass(job.status)}>
                  {job.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
