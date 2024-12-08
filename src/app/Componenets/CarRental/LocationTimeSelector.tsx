import * as React from "react";
import { LocationTimeProps } from "./types";

export const LocationTimeSelector: React.FC<LocationTimeProps> = ({
  label,
  placeholder,
  iconSrc,
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-base font-bold tracking-tight text-gray-900">
        {label}
      </div>
      <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
        <div className="self-stretch my-auto w-[104px]">{placeholder}</div>
        <img
          loading="lazy"
          src={iconSrc}
          className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          alt={`Select ${label.toLowerCase()}`}
        />
      </div>
    </div>
  );
};
