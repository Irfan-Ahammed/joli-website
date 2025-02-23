import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { UpdatingJob, setSingleJob } from "@/redux/jobSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleJob } = useSelector((state) => state.job);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    wage: "",
    location: "",
    jobType: "Full-Time" // Default value
  });

  const jobTypes = ["Full-Time", "Part-Time", "Contract", "Temporary"];

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/get/${id}`, {
          withCredentials: true
        });
        dispatch(setSingleJob(response.data.job));
        setInput(response.data.job);
      } catch (error) {
        toast.error("Failed to fetch job details.");
      }
    };

    if (!singleJob || singleJob._id !== id) {
      fetchJob();
    } else {
      setInput(singleJob);
    }
  }, [id, singleJob, dispatch]);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(
        `${JOB_API_END_POINT}/update/${id}`,
        { ...input },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );

      dispatch(UpdatingJob(response.data.job));
      toast.success("Job updated successfully.");
      navigate("/profile");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center w-screen bg-slate-500">
      <form onSubmit={submitHandler} className="max-w-md mx-auto bg-white p-5 rounded-xl">
        <div className="grid gap-4 py-4">
          {["title", "description", "requirements", "wage", "location"].map(
            (field) => (
              <div key={field} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={field} className="text-right capitalize">
                  {field}
                </Label>
                <Input
                  id={field}
                  name={field}
                  type={field === "wage" ? "number" : "text"}
                  value={input[field] || ""}
                  onChange={changeEventHandler}
                  className="col-span-3"
                  required
                />
              </div>
            )
          )}

          {/* Dropdown for Job Type */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="jobType" className="text-right">
              Job Type
            </Label>
            <select
              id="jobType"
              name="jobType"
              value={input.jobType}
              onChange={changeEventHandler}
              className="col-span-3 border rounded-md p-2"
              required
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <Button disabled={loading} type="submit" className="mt-6 w-full">
            {loading ? <Loader2 className="animate-spin" /> : "Update Job"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
