import React from "react";
import { CarCard } from "./CarCard";
import { CarCardProps } from "../types";

interface CarSectionProps {
  title: string;
  cars: CarCardProps[];
}

export const CarSection: React.FC<CarSectionProps> = ({ title, cars }) => {
  return (
    <div className="flex flex-col mt-8 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start text-base font-semibold tracking-tight text-center max-md:max-w-full">
        <div className="gap-2 self-stretch px-5 rounded min-h-[44px] text-slate-400 w-[196px]">
          {title}
        </div>
        <button
          className="gap-2 self-stretch px-5 w-32 text-blue-600 rounded min-h-[44px]"
          aria-label={`View all ${title}`}
        >
          View All
        </button>
      </div>
      <div className="flex flex-wrap gap-8 items-start mt-4 max-md:max-w-full">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
};
