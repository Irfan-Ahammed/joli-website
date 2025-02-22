import React, { useEffect } from "react";
import {
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  Table
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { setAppliedJob } from "@/redux/jobSlice";
import { timeAgo } from "@/utils/timeAgo";

const AppliedJobTable = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user._id);
  const appliedJobs = useSelector((state) => state.job?.appliedJobs);
  console.log(appliedJobs);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/appliedJobsProfile/${userId}`,
          {
            withCredentials: true // Ensure cookies are sent
          }
        );
        console.log("API Response:", res.data); // Debug the API response
        if (Array.isArray(res.data.appliedJobs)) {
          dispatch(setAppliedJob(res.data.appliedJobs));
        } else {
          console.error("Expected an array but got:", res.data.appliedJobs);
          dispatch(setAppliedJob([])); // Set to empty array if not an array
        }
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      }
    };
    fetchAppliedJobs();
  }, [dispatch, userId]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Accepted":
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
            <TableHead>Salary</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(appliedJobs) && appliedJobs.length > 0 ? (
            appliedJobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{timeAgo(job.createdAt)}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.wage}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${getStatusClass(
                      job.applications[0].status
                    )} hover:bg-transparent`}
                  >
                    {job.applications.length > 0
                      ? job.applications[0].status
                      : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                No jobs applied yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
