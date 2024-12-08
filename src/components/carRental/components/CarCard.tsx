import * as React from "react";
import { CarCardProps } from "../types";

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuel,
  transmission,
  capacity,
  price,
  originalPrice,
  isFavorite,
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[317px] max-md:px-5">
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
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/7cc867dde34466daad40faa01ae7a09c95ce38ededf44e27385ad5eb333c53a5?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/c9d8067ea0fcc5b0224f89c39112265049ae65cb120726ab4c59fa833b6ae98e?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
          }
          alt={isFavorite ? "Favorited" : "Add to favorites"}
          className="object-contain shrink-0 self-start w-6 aspect-square"
        />
      </div>
      <img
        loading="lazy"
        src={image}
        alt={`${name} ${type}`}
        className="object-contain mt-14 mr-5 ml-5 aspect-[3.16] w-[228px] max-md:mx-2.5 max-md:mt-10"
      />
      <div className="flex gap-4 items-start mt-14 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:mt-10">
        <div className="flex gap-2 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb9f5fa088a33a8329469c11ed8f42f7df3e0fd11b9aa0921af94d8d3307f051?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-7">{fuel}</div>
        </div>
        <div className="flex gap-2 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/563fd9367e8be9e271233fa362e88c8b2205c920475aad51a787f2599d87477e?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[52px]">{transmission}</div>
        </div>
        <div className="flex gap-2 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6076b2ac2aa0f31ca0cb91749137299d2ef6510d93de9e6c30bc3ddcb48b83d?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 w-full">
        <div className="flex flex-col font-bold text-slate-400">
          <div className="text-xl">
            ${price.toFixed(2)}/{" "}
            <span className="text-sm text-slate-400">day</span>
          </div>
          {originalPrice && (
            <div className="mt-1 text-sm">${originalPrice.toFixed(2)}</div>
          )}
        </div>
        <button
          className="gap-2 self-start px-5 mt-1 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] w-[76px]"
          aria-label={`Rent ${name}`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};
