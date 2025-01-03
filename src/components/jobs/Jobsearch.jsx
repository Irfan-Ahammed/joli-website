import React, { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandList
} from "../ui/command";
import { motion } from "framer-motion";

function JobSearch() {
  const [openLocation, setOpenLocation] = useState(false);

  return (
    <div className="relative">
      {/* Search Box with Icon */}
      <motion.div
        className="flex items-center border border-gray-300 rounded-lg text-sm text-slate-400 h-12 max-w-44 pl-3 pr-3 relative cursor-pointer hover:border-primary focus-within:border-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpenLocation(!openLocation)}
      >
        {/* Icon */}
        <MapPin className="size-4 bottom-4 left-2 absolute text-slate-400" />
        {/* Input */}
        <input
          type="text"
          placeholder="Location"
          className="flex-1 bg-transparent border-none ml-4 focus:outline-none focus:ring-0"
        />
      </motion.div>

      {/* Dropdown List */}
      {openLocation ? (
        <Command className="rounded-lg border shadow-md md:max-w-[200px] absolute top-12 w-44">
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup></CommandGroup>
          </CommandList>
        </Command>
      ) : null}
    </div>
  );
}

export default JobSearch;
