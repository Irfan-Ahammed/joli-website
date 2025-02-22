import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bookmark, IndianRupee } from "lucide-react";

function JobCard({ job }) {
  return (
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 w-full max-w-sm mx-auto ">
      {/* Job Title */}
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{job.title}</h2>

      {/* Job Description */}
      <div className="space-y-2 mb-6">
        <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
      </div>

      {/* User Info Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-slate-300">
            <AvatarImage
              src={job.userImage || "https://via.placeholder.com/150"}
              alt={job.userFullname}
            />
            <AvatarFallback className="bg-slate-100 text-slate-700">
              {job.userFullname?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <span className="text-sm font-medium text-slate-700 block">
              {job.userFullname}
            </span>
            <span className="text-xs text-slate-500">{job.location}</span>
          </div>
        </div>

        {/* Bookmark Icon */}
        <button className="text-gray-500 hover:text-gray-700 hover:bg-slate-100 rounded-full p-2 transition-colors duration-200 active:scale-95">
          <Bookmark size={20} />
        </button>
      </div>

      {/* Additional Details (e.g., Job Type, Wage) */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {job.jobType}
        </span>
        <span className="flex items-center justify-center bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
        <IndianRupee size={13}/> {job.wage}
        </span>
      </div>

      {/* Call-to-Action Button */}
      <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;