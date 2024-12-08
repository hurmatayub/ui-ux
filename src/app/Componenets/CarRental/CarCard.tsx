import * as React from "react";
import { CarCardProps } from "./types";

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  originalPrice,
  isFavorite,
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5">
      <div className="flex gap-5 justify-between font-bold">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">
            {type}
          </div>
        </div>
        <img
          loading="lazy"
          src={
            isFavorite
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/c9d8067ea0fcc5b0224f89c39112265049ae65cb120726ab4c59fa833b6ae98e?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/7cc867dde34466daad40faa01ae7a09c95ce38ededf44e27385ad5eb333c53a5?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
          }
          className="object-contain shrink-0 self-start w-6 aspect-square"
          alt={isFavorite ? "Favorite car" : "Not favorite car"}
        />
      </div>
      <div className="flex relative flex-col items-start pt-12 mt-12 aspect-[2.444] max-md:mt-10">
        <img
          loading="lazy"
          src={image}
          className="object-cover absolute inset-0 size-full"
          alt={`${name} ${type} car`}
        />
        <div className="flex relative z-10 shrink-0 mb-0 h-[68px] max-md:-mr-4" />
      </div>
      <div className="flex gap-4 items-start mt-12 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:mt-10">
        <div className="flex gap-1.5 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb9f5fa088a33a8329469c11ed8f42f7df3e0fd11b9aa0921af94d8d3307f051?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Fuel capacity icon"
          />
          <div className="w-7">{fuelCapacity}</div>
        </div>
        <div className="flex gap-1 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/563fd9367e8be9e271233fa362e88c8b2205c920475aad51a787f2599d87477e?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Transmission type icon"
          />
          <div className="w-12">{transmission}</div>
        </div>
        <div className="flex gap-1.5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/208da64848e62ec29a2752e20bf61795bc1d287972e3ba2b4662ede01ca316b3?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Passenger capacity icon"
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-6 w-full">
        <div className="flex flex-col font-bold text-slate-400">
          <div className="text-xl">
            ${price}.00/ <span className="text-sm text-slate-400">day</span>
          </div>
          {originalPrice && (
            <div className="mt-1 text-sm">${originalPrice}.00</div>
          )}
        </div>
        <button
          className="gap-2 self-stretch px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] w-[76px]"
          aria-label={`Rent ${name} now`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};
