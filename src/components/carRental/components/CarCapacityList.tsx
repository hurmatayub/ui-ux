import * as React from "react";
import { CarCapacity } from "../types";

interface CarCapacityListProps {
  capacities: CarCapacity[];
  selectedCapacity?: string;
  onSelect?: (capacity: string) => void;
}

export const CarCapacityList: React.FC<CarCapacityListProps> = ({
  capacities,
}) => {
  return (
    <div className="flex flex-col font-semibold text-slate-400">
      <div className="text-xs tracking-tight">C A P A C I T Y</div>
      <div className="flex flex-col mt-7 text-xl tracking-tight text-justify">
        {capacities.map((capacity) => (
          <div
            key={capacity.id}
            className="flex gap-2 items-start mt-8 first:mt-0"
          >
            <img
              loading="lazy"
              src={capacity.icon}
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <div className="w-36">
              <span className="text-slate-500">{capacity.capacity}</span> (
              {capacity.count})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
