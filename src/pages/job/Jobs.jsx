import Footer from "@/components/Footer";
import JobList from "@/components/jobs/JobList";
import Navbar from "@/components/Navbar";
import React from "react";

function Jobs() {
  return (
    <>
      <Navbar />
      <JobList/>
      <Footer/>
    </>
  );
}

export default Jobs;
