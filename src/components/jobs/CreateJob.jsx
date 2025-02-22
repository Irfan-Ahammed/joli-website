import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { CreatingJob } from "@/redux/jobSlice";

const CreateJob = () => {
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    wage: "",
    location: "",
    jobType: "",
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${JOB_API_END_POINT}/post`,
        { ...input },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      
      dispatch(CreatingJob(response.data.job));
      toast.success(response.data.message);
      setInput({
        title: "",
        description: "",
        requirements: "",
        wage: "",
        location: "",
        jobType: "",
      });
    } catch (error) {
      console.error("Error creating job:", error);
      toast.error(error.response?.data?.message || "Failed to create job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="max-w-md mx-auto">
      <div className="grid gap-4 py-4">
        {[
          { label: "Title", name: "title", type: "text" },
          { label: "Description", name: "description", type: "text" },
          { label: "Requirements (comma-separated)", name: "requirements", type: "text" },
          { label: "Wage", name: "wage", type: "number" },
          { label: "Location", name: "location", type: "text" },
          { label: "Job Type", name: "jobType", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={name} className="text-right">
              {label}
            </Label>
            <Input
              id={name}
              name={name}
              type={type}
              value={input[name]}
              onChange={changeEventHandler}
              className="col-span-3"
              required
            />
          </div>
        ))}
        <Button
          disabled={
            loading ||
            !input.title ||
            !input.description ||
            !input.requirements ||
            !input.wage ||
            !input.location ||
            !input.jobType
          }
          type="submit"
          className="mt-6 w-full"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Create Job"}
        </Button>
      </div>
    </form>
  );
};

export default CreateJob;
