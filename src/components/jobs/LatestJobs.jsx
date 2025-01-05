import React from "react";
import LatestJobCart from "./LatestJobCart";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

function LatestJobs() {
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
        {randomJobs.slice(0, 6).map((item, i) => (
          <LatestJobCart key={i} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
