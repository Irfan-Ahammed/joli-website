import { Button } from "@/components/ui/button";
import playstore from "../assets/playstore.png";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import AppStore from "../assets/App-Store.svg";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { box, imageVariants, textVariants } from "@/styles/framerMotion";

import AuthDialog from "@/components/AuthDialog";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const transitionImage = [
    screen1,
    screen2,
    screen1,
    screen2,
    screen1,
    screen2,
    screen1,
    screen2,
    screen1,
    screen2,
  ];
  const transitionTexts = [
    "Chat to the Business Owner",
    "Find Local Jobs Easily",
    "Apply with One Tap",
    "Connect with Employers",
    "Stand Out with Your Profile",
    "Find Jobs Quickly",
    "Explore Local Opportunities",
    "Start Your Career Today",
    "Get Hired Instantly",
    "Simplify Your Job Search",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transitionTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [transitionTexts.length]);

  return (
    <div className="bg-black  text-primary-foreground h-[800px] md:h-screen font-poppins md:px-5 px-4">
      {/* Navbar */}
      <div className="flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-3xl">
          JOLI
        </Link>

        <div className="flex items-center space-x-3">
          <Button className="flex items-center border border-slate-700 hover:border-white hover:bg-black bg-black rounded px-4">
            <span>Get the app:</span>
            <div className="flex items-center ml-2">
              <img src={AppStore} className="w-8 h-9" alt="App Store" />
              <img
                src={playstore}
                className="w-6 h-6 ml-2 "
                alt="Google Play Store"
              />
            </div>
          </Button>
         <AuthDialog />
        </div>
      </div>

      {/* Main Content */}
      <div
        onClick={() => navigate("/jobs")}
        className="flex flex-col md:flex-row items-center justify-between w-full h-full relative"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <AnimatePresence>
            <motion.div
              key={transitionTexts[currentIndex]}
              className="absolute top-9 md:-top-36 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {transitionTexts[currentIndex]}
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="absolute top-32 md:-top-7 px-7  py-3 md:text-xl font-semibold flex items-center justify-center select-none"
            onClick={() => navigate("/jobs")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          >
            Get started
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center absolute md:relative top-24 md:-top-8">
          <AnimatePresence>
            {transitionImage.map(
              (image, index) =>
                index === currentIndex && (
                  <motion.img
                    key={image}
                    src={image}
                    alt={`Screen ${index + 1}`}
                    className="md:w-1/2 w-72 absolute top-10 mt-20 md:-top-[350px]"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Home;
