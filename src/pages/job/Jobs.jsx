import CategorySeaction from "@/components/CategorySeaction";
import Footer from "@/components/Footer";
import JobList from "@/components/jobs/JobList";
import Navbar from "@/components/Navbar";
import React from "react";

function Jobs() {
  return (
    <>
      <Navbar />
      <hr />
      <CategorySeaction/>
      <JobList/>
      <Footer/>
    </>
  );
}

export default Jobs;
