import React from "react";
import LatestJobCart from "./LatestJobCart";
import { useSelector } from "react-redux";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

function LatestJobs() {
  const {allJobs}=useSelector(store=>store.job)
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-28 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">Latest & Top </span> Job Openings
        </h1>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allJobs.length<0 ? <span>No Job Available</span> : allJobs.slice(0, 6).map((item) => (
          <LatestJobCart key={item._id} job={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
