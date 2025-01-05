import React from "react";
import { Button } from "../ui/Button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Bookmark } from "lucide-react";
import { Badge } from "../ui/badge";

function JobCard({ job }) {
  return (
    <div className="bg-white border-gray-100 shadow-lg rounded-md p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-400 mb-2">2 days ago</p>
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
          <h1>Company Name</h1>
          <p>kerala</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">title</h1>
        <p className="text-sm text-gray-600">leio ewnhe wejk as sdlkd</p>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Badge className="text-primary font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-green-500 font-bold" variant="ghost">
          Full-Time
        </Badge>
        <Badge className="text-red-500 font-bold" variant="ghost">
          Remote
        </Badge>
      </div>
      <div className="flex text-white mt-2 justify-between">
        <Button className="bg-transparent border-black text-black border">
          Details
        </Button>
        <Button>Save For Later</Button>
      </div>
    </div>
  );
}

export default JobCard;
