import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { filters } from "@/config";

function FilterCard() {
 
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-center md:text-start">Filters</h2>
      <RadioGroup>
        <div className="grid grid-cols-2 md:grid-cols-1 place-items-center md:place-items-start">

        {filters.map(({ label, options }) => (
          <div key={label} className="mb-4 ">
            <h3 className="text-md font-bold mb-2">{label}</h3>
            {options.map((option) => (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={option} />
                <Label>{option}</Label>
              </div>
            ))}
          </div>
        ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
