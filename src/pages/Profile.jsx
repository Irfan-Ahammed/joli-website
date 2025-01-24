import React from "react";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import AppliedJobTable from "@/components/jobs/AppliedJobTable";
import CreatedJobTable from "@/components/jobs/CreatedJobTable";
import UpdateProfileDialog from "@/components/UpdateProfileDialog";
import CreateJob from "@/components/jobs/CreateJob";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="my-8 max-w-4xl mx-auto">
      {/* User Information Section */}
      <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profileImage || "https://via.placeholder.com/150"}
                alt="User Avatar"
              />
              <AvatarFallback>{user?.fullname?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-medium text-2xl text-gray-800">
                {user?.fullname || "Full Name"}
              </h1>
              <p className="text-gray-500">{user?.profile?.bio || "Bio not provided"}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="text-red-500">
                  Create a Job
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm rounded-lg">
                <CreateJob />
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-primary/60 text-primary">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm rounded-lg">
                <UpdateProfileDialog />
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">📧 Email:</span>
            <span className="text-gray-600">{user?.email || "Not Provided"}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">📞 Contact:</span>
            <span className="text-gray-600">{user?.phoneNumber || "Not Provided"}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">📍 Location:</span>
            <span className="text-gray-600">{user?.profile?.location || "Not Provided"}</span>
          </div>
        </div>
      </div>

      {/* Jobs Sections */}
      <div className="border border-gray-200 mt-5 rounded-2xl p-8 bg-white shadow-sm">
        <h1 className="text-xl font-medium mb-4">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      <div className="border border-gray-200 mt-5 rounded-2xl p-8 bg-white shadow-sm">
        <h1 className="text-xl font-medium mb-4">Created Jobs</h1>
        <CreatedJobTable />
      </div>
    </div>
  );
};

export default Profile;
