import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
// import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const JobDescription = () => {
  // const { singleJob } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.auth);
  const [isApplied, setIsApplied] = useState(false);

  const params = useParams();
  const jobId = params.id;
  // const dispatch = useDispatch();

  // Check if the user has already applied for the job
  // useEffect(() => {
  //   if (singleJob?.applications) {
  //     setIsApplied(
  //       singleJob.applications.some((app) => app.applicant === user?._id)
  //     );
  //   }
  // }, [singleJob, user]);

  // Fetch single job details
  // useEffect(() => {
  //   const fetchJobDetails = async () => {
  //     try {
  //       const response = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
  //         withCredentials: true,
  //       });
  //       if (response.data.success) {
  //         // dispatch(setSingleJob(response.data.job));
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Failed to fetch job details.");
  //     }
  //   };
  //   fetchJobDetails();
  // }, [jobId, dispatch]);

  // Handle job application
  // const handleApplyJob = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${APPLICATION_API_END_POINT}/apply/${jobId}`,
  //       { withCredentials: true }
  //     );
  //     if (response.data.success) {
  //       setIsApplied(true);
  //       const updatedJob = {
  //         ...singleJob,
  //         applications: [...singleJob.applications, { applicant: user?._id }],
  //       };
  //       // dispatch(setSingleJob(updatedJob));
  //       toast.success(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(
  //       error.response?.data?.message || "Failed to apply for the job."
  //     );
  //   }
  // };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Job Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              0 Positions
            </Badge>
            <Badge className="text-red-700 font-bold" variant="ghost">
              Full-Time
            </Badge>
            <Badge className="text-purple-700 font-bold" variant="ghost">
              LPA
            </Badge>
          </div>
        </div>
        <Button
          // onClick={isApplied ? null : handleApplyJob}
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-800"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.title || "N/A"} */}csdx
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.location || "N/A"} */}na
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.description || "No description available"} */}
            No description available
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.experience || 0} yrs */}0
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.salary || "N/A"} */}LPA
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.applications?.length || 0} */}0
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.createdAt ? singleJob.createdAt.split("T")[0] : "N/A"} */}
            0 na
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
