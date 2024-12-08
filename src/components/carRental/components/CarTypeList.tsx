import React from "react";
import { CarType } from "../types";

interface CarTypeListProps {
  types: CarType[];
}

export const CarTypeList: React.FC<CarTypeListProps> = ({ types }) => {
  return (
    <div className="flex flex-col font-semibold text-slate-400">
      <div className="text-xs tracking-tight">T Y P E</div>
      <div className="flex flex-col items-start mt-7 text-xl tracking-tight text-justify">
        {types.map((type) => (
          <div key={type.id} className="flex gap-2 items-start mt-8 first:mt-0">
            <img
              loading="lazy"
              src={type.icon}
              className="object-contain shrink-0 w-6 aspect-square"
              alt={`${type.name} icon`}
            />
            <div className="w-36">
              <span className="text-slate-500">{type.name}</span> ({type.count})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
