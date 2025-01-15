import React from "react";
import { Badge } from "../ui/badge";

function LatestJobCart({key,job}) {
  return (
    <div key={key} className="p-4 border rounded-lg shadow-md border-slate-200 bg-white hover:shadow-lg transition-shadow duration-200">
      {/* Company Info */}
      <div className="mb-3">
        <h2 className="text-lg font-bold">Company Name</h2>
        <p className="text-sm text-gray-600">{job.location}</p>
      </div>

      {/* Job Info */}
      <div className="mb-3">
        <h3 className="text-md font-semibold">Job Title</h3>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          feugiat magna vel sem fermentum euismod.
        </p>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap gap-2">
        <Badge className="text-primary font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-green-500 font-bold" variant="ghost">
          Full-Time
        </Badge>
        <Badge className="text-red-500 font-bold" variant="ghost">
          Remote
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCart;
