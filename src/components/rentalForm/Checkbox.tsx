import * as React from "react";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({ text }) => {
  return (
    <div className="flex flex-col w-full rounded-none max-w-[804px]">
      <label className="flex flex-wrap gap-5 px-8 py-4 rounded-xl bg-neutral-100 cursor-pointer">
        <input type="checkbox" className="sr-only" aria-label={text} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/18a600e71ff09d7249b756731fb51eaa0f2a718e938c6f0902e445cbf45503b4?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="flex-auto text-base font-semibold tracking-tight text-slate-800">
          {text}
        </div>
      </label>
    </div>
  );
};
