import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useNavigate } from "react-router-dom";

const CreatedJobTable = () => {
  const createdJobs = useSelector((state) => state.job?.createdJob);
  // console.log(createdJobs);
  const navigate = useNavigate();

  if (!Array.isArray(createdJobs) || createdJobs.length === 0) {
    return <p className="text-gray-500">You have not created any jobs yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2 font-medium text-gray-700">
              Job Title
            </th>
            <th className="text-left px-4 py-2 font-medium text-gray-700">
              Category
            </th>
            <th className="text-left px-4 py-2 font-medium text-gray-700">
              Date Created
            </th>
            <th className="text-left px-4 py-2 font-medium text-gray-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {createdJobs.map((job, index) => (
            <tr key={job.id || index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 text-gray-800">{job.title}</td>
              <td className="px-4 py-2 text-gray-600">
                {job.category || "N/A"}
              </td>
              <td className="px-4 py-2 text-gray-600">
                {new Date(job.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 text-gray-600">
                <Popover>
                  <PopoverTrigger>
                    <Ellipsis />
                  </PopoverTrigger>
                  <PopoverContent className="bg-white flex flex-col max-w-40">
                    <Button className="bg-white flex items-center justify-between w-full  hover:bg-gray-100 rounded">
                      <span>Edit</span>
                      <Pencil />
                    </Button>
                    <Button
                      onClick={() => navigate(`/profile/${job._id}/applicants`)}
                      className="bg-white flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      <span>Applicants</span>
                      <Eye />
                    </Button>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatedJobTable;
