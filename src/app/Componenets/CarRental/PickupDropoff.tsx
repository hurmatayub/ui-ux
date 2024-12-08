import * as React from "react";
import { PickupDropoffProps } from "./types";
import { LocationTimeSelector } from "./LocationTimeSelector";

export const PickupDropoff: React.FC<PickupDropoffProps> = ({
  type,
  dotColor,
}) => {
  return (
    <div className="flex flex-col px-12 py-6 bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center self-start">
        <div
          className={`flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-${dotColor} bg-opacity-30 rounded-[70px]`}
        >
          <div
            className={`flex self-stretch my-auto w-2 h-2 bg-${dotColor} rounded-full fill-${dotColor} min-h-[8px]`}
          />
        </div>
        <div className="self-stretch my-auto text-base font-semibold tracking-tight text-gray-900">
          {type === "pickup" ? "Pick - Up" : "Drop - Off"}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-start mt-4">
        <LocationTimeSelector
          label="Locations"
          placeholder="Select your city"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f9690106296c8e68bccaea4ffe9ea7f1c25e6bf0cbe95bba9d3172614f2de3f1?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
        />
        <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
        <LocationTimeSelector
          label="Date"
          placeholder="Select your date"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f9690106296c8e68bccaea4ffe9ea7f1c25e6bf0cbe95bba9d3172614f2de3f1?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
        />
        <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
        <LocationTimeSelector
          label="Time"
          placeholder="Select your time"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f9690106296c8e68bccaea4ffe9ea7f1c25e6bf0cbe95bba9d3172614f2de3f1?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
        />
      </div>
    </div>
  );
};
