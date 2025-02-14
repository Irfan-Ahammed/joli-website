import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Bookmark } from "lucide-react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function JobCard({ job }) {
  const navigate = useNavigate();
  const jobId = job._id;

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="bg-white border-gray-100 shadow-lg rounded-md p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-400 mb-2">{daysAgoFunction(job?.createdAt)==0 ? "Today":`${daysAgoFunction(job?.createdAt)}`} Day's ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <div className="flex">
          <Button variant="outline" className="p-6" size="icon">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </div>
        <div>
          <h1>{job.userFullname}</h1>
          <p>{job.location}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job.title}</h1>
        <p className="text-sm text-gray-600">{job.description}</p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Badge className="text-primary font-bold" variant="ghost">
          {job.jobType}
        </Badge>
        <Badge className="text-green-500 font-bold" variant="ghost">
          {job.wage}
        </Badge>
        {/* <Badge className="text-red-500 font-bold" variant="ghost">
       
        </Badge> */}
      </div>
      <div className="flex text-white mt-2 justify-between">
        <Button
          onClick={() => navigate(`/discription/${jobId}`)}
          className="bg-transparent border-black text-black border"
        >
          Details
        </Button>
        <Button>Save For Later</Button>
      </div>
    </div>
  );
}

export default JobCard;
