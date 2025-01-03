import React, { useState } from "react";
import JobCard from "./JobCard";

function JobList() {
  const [jobs] = useState([
    {
      _id: "1",
      title: "Food Delivery Driver",
      location: "Kochi",
      description: "Deliver food to customers quickly and efficiently.",
      jobType: "Part-Time",
      wage: 12000,
      requirements: ["Driver's license", "Smartphone", "Own vehicle"],
    },
    {
      _id: "2",
      title: "Construction Worker",
      location: "Calicut",
      description:
        "Assist in various construction tasks including lifting, carrying, and operating tools.",
      jobType: "Contract",
      wage: 15000,
      requirements: [
        "Physical fitness",
        "Experience with tools",
        "Safety awareness",
      ],
    },
    {
      _id: "3",
      title: "Office Assistant",
      location: "Trivandrum",
      description: "Help manage office operations and clerical tasks.",
      jobType: "Full-Time",
      wage: 18000,
      requirements: [
        "Computer skills",
        "Organizational skills",
        "Attention to detail",
      ],
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p className="text-center col-span-full">
            No jobs available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default JobList;
