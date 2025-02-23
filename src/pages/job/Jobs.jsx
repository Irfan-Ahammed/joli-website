import CategorySeaction from "@/components/CategorySeaction";
import Footer from "@/components/Footer";
import JobList from "@/components/jobs/JobList";
import LatestJobs from "@/components/jobs/LatestJobs";
import Navbar from "@/components/Navbar";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import React from "react";

function Jobs() {
  useGetAllJobs()
  return (
    <div className="">
      <Navbar />
      <hr className="text-black/20"/>
      <CategorySeaction />
      <LatestJobs />
      <JobList />
      <Footer />
    </div>
  );
}

export default Jobs;
