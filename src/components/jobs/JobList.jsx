import React from "react";
import JobCard from "./JobCard";
import FilterCard from "./FilterCard";
import FilterCardMobail from "./FilterCardMobail";

function JobList() {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="container  mx-auto px-4 md:px-8 lg:px-28 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Available Jobs
      </h1>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/5">
        <div className="hidden md:block">
            <FilterCard />
          </div>
          <div className="block md:hidden">
            <FilterCardMobail />
          </div>
        </div>

        <div className="flex-1 h-[88vh] bg-secondary p-2 overflow-y-auto pb-5">
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {jobs.map((job, i) => (
                <JobCard key={i} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No jobs available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobList;
