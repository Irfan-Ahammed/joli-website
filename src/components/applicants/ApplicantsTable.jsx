import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { timeAgo } from "@/utils/timeAgo";

const shortListingStatus = ["Accepted", "Rejected"];

function ApplicantsTable() {
  const applicants = useSelector((state) => state.application.applicants) || [];

  const statusHandler = async (status, id) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true } // Added inside request
      );

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>A list of your recent applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.length > 0 ? (
            applicants.map((app, index) => (
              <TableRow key={index} className="odd:bg-white even:bg-gray-100">
                <TableCell>{app.applicant?.fullname || "N/A"}</TableCell>
                <TableCell>{app.applicant?.email || "N/A"}</TableCell>
                <TableCell>{app.applicant?.phoneNumber || "N/A"}</TableCell>
                <TableCell>
                {timeAgo(app.appliedAt)}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortListingStatus.map((status, i) => (
                        <div
                          key={i}
                          onClick={() => statusHandler(status, app._id)}
                          className="flex items-center my-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
                        >
                          <span>{status}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6" className="text-center py-4">
                No applicants found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplicantsTable;
