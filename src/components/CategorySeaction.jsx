import { joliCategories } from "@/config";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CategorySection() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const categoriesToShow = showMore
    ? joliCategories
    : joliCategories.slice(0, 13);

  return (
    <div className="container mx-auto px-4 lg:px-28 py-8">
      <h2 className="text-2xl font-bold text-center mb-5">
        Explore Categories
      </h2>
      <div className={`flex overflow-hidden showMore ${!showMore ? `md:flex-wrap`:`flex-wrap`} gap-3 py-2`} >
        {categoriesToShow.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center w-auto md:px-3 px-1 py-1 md:min-w-20 bg-[#f7faff] border rounded-lg shadow-md cursor-pointer"
            onClick={() => navigate("/jobs")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <p className="md:text-lg text-sm mr-1">{item.icon}</p>
            <p className="text-xs md:text-sm">{item.name}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-500 hover:underline"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default CategorySection;
