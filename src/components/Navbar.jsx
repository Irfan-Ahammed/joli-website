import JobSearch from "@/components/jobs/JobSearch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import playstore from "../assets/playstore.png";
import AppStore from "../assets/App-Store.svg";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { textVariants } from "@/styles/framerMotion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import AuthDialog from "./AuthDialog";
import { Search } from "lucide-react";

function Navbar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const transitionTexts = [
    "Search for jobs near you...",
    "What type of work are you looking for?",
    "Enter job title, skills, or location...",
    "Find opportunities in your area today!",
    "Type a job category or city to get started...",
    "Discover your next job opportunity here!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transitionTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [transitionTexts.length]);

  const user = false;
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center px-4 md:py-5 py-3 lg:px-28">
        {/* Logo */}
        <Link to="/" className="font-bold text-3xl">
          JOLI
        </Link>

        {/* Search Section */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <Input type="text" placeholder="Search jobs" className="w-64 h-12" />
          <JobSearch />
          <motion.div
            className="flex items-center bg-primary rounded-lg font-bold font-mono text-white h-12 px-8 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Find
          </motion.div>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center space-x-3 lg:space-x-5 h-12">
          <Button className="md:flex items-center hidden border text-black hover:bg-white bg-white px-4 h-12">
            <span>Get the app:</span>
            <div className="flex items-center ml-2">
              <img src={AppStore} className="w-7 h-8" alt="App Store" />
              <img
                src={playstore}
                className="w-5 ml-2"
                alt="Google Play Store"
              />
            </div>
          </Button>
          {user ? (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="IMG" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <AuthDialog />
          )}
        </div>
      </div>

      {/* Mobile Search Section */}
      <div className="flex md:hidden  mx-4 mb-5">
        <div className="w-full h-12 border-slate-300 shadow-md items-center bg-primary/10 rounded-md relative flex shadow-primary/10">
          <Search className="size-6 ml-2 text-slate-700"/>
          <AnimatePresence>
            <motion.div
              key={transitionTexts[currentIndex]}
              className="absolute top-3 w-full font-normal text-slate-500 text-md"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="border-0 ml-10">{transitionTexts[currentIndex]}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
