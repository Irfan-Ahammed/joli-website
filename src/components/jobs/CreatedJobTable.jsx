import { Ellipsis, Eye, Pencil } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setAllAdminJob } from "@/redux/adminJobSlice";
import { timeAgo } from "@/utils/timeAgo";

const CreatedJobTable = () => {
  const dispatch = useDispatch();
  const createdJobs = useSelector((state) => state.adminJob?.createdJob);

  const userId = useSelector((state) => state.auth.user._id);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}/getadminjobs/${userId}`,
          {
            withCredentials: true // Ensure cookies are sent
          }
        );
        dispatch(setAllAdminJob(res.data.jobs));
      } catch (error) {
        console.error("Error fetching admin jobs:", error);
      }
    };
    fetchJobs();
  }, [userId, dispatch]);

  if (!Array.isArray(createdJobs) || createdJobs.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-4">
        You have not created any jobs yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-left uppercase text-sm">
            <tr>
              <th className="px-6 py-3 font-medium">Job Title</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Date Created</th>
              <th className="px-6 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {createdJobs.map((job, index) => (
              <tr key={job._id || index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {job.title}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {job.category || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {timeAgo(job.createdAt)}
                </td>
                <td className="px-6 py-4 text-center">
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-gray-200 rounded-full"
                      >
                        <Ellipsis className="h-5 w-5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg border-slate-300 rounded-md p-1 w-32">
                      <Button
                        className="flex items-center w-full px-3 py-2 border-b border-slate-200 hover:bg-gray-100 rounded bg-transparent justify-between"
                        onClick={() =>
                          navigate(`/profile/update/${job._id}`)
                        }
                      >
                        <Pencil className="h-4 w-4 " />
                        Edit
                      </Button>

                      <Button
                        variant="ghost"
                        onClick={() =>
                          navigate(`/profile/${job._id}/applicants`)
                        }
                        className="flex justify-between items-center w-full px-3 py-2 hover:bg-gray-100 rounded"
                      >
                        <Eye className="h-4 w-4" />
                        Applicants
                      </Button>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatedJobTable;
