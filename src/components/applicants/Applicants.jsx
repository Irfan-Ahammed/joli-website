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
        console.log(res.data);
        
        if (res.data.success) {
          dispatch(setAllApplicants(res.data.applications));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllApplicants
  }, []);
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl my-5"> Applicants (3)</h1>
        <ApplicantsTable />
      </div>
    </div>
  );
}

export default Applicants;
