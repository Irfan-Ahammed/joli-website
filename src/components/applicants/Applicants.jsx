import React, { useEffect } from "react";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";

function Applicants() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
          { withCredentials: true }
        );

        if (res.data.success && res.data.applications) {
          dispatch(setAllApplicants(res.data.applications));
          console.log("Applicants fetched:", res.data.applications);
        } else {
          console.log("No applicants found.");
        }
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchAllApplicants();
  }, [params.id, dispatch]); // Add dependencies

  return (
    <div>
      <h1 className="font-bold text-xl my-5"> Applicants </h1>
      <ApplicantsTable params={params}/>
    </div>
  );
}

export default Applicants;
