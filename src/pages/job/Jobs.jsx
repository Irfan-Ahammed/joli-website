import CategorySeaction from "@/components/CategorySeaction";
import Footer from "@/components/Footer";
import JobList from "@/components/jobs/JobList";
import LatestJobs from "@/components/jobs/LatestJobs";
import Navbar from "@/components/Navbar";
import React from "react";

function Jobs() {
  return (
    <div>
      <Navbar />
      <hr className="text-black/20"/>
      <CategorySeaction />
      <LatestJobs />
      <JobList />
      {/* <Footer /> */}
    </div>
  );
}

export default Jobs;
