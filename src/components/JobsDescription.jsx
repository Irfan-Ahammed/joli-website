import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAppliedJob, setSingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const params = useParams();
  const jobId = params.id;

  const applications = singleJob?.applications || [];
  const isIntiallyApplied = applications.some(
    (application) => application.applicant === user?._id
  );
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);
  const applyJobHandle = async () => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {}, // Send data payload here if needed
        { withCredentials: true }
      );
      console.log(res.data);

      if (res.data.success) {
        setIsApplied(true); //update the local state
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob)); //help us to real time UI updated
        dispatch(setAppliedJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          // setIsApplied(res.data.job.applications.some(application.application.applicant==user?._id)) // <--Ensure the state is in sync fetched data
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch]);

  if (!singleJob) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob.location}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob.positions || "1"} Positions
            </Badge>
            <Badge className="text-red-700 font-bold" variant="ghost">
              {singleJob.jobType}
            </Badge>
            <Badge className="text-purple-700 font-bold" variant="ghost">
              ${singleJob.wage.toLocaleString()} per year
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandle}
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
            {singleJob.title || "N/A"}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.location || "N/A"}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.description || "No description available"}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">
            ${singleJob.wage.toLocaleString()}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {applications.length || 0}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.createdAt.split("T")[0]}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted By:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.userFullname || "Unknown"}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Requirements:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.requirements?.join(", ") || "N/A"}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Active:{" "}
          <span
            className={`pl-4 font-bold ${
              singleJob.isActive ? "text-green-600" : "text-red-600"
            }`}
          >
            {singleJob.isActive ? "Yes" : "No"}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
