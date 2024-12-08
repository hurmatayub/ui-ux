import * as React from "react";
import { RentalSummaryProps } from "./types";

export const RentalSummary: React.FC<RentalSummaryProps> = ({
  carName,
  carImage,
  rating,
  reviews,
  subtotal,
  tax,
  total,
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-6 mx-auto w-full bg-white rounded-xl">
      <div className="flex flex-col max-md:max-w-full">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Rental Summary
        </h2>
        <p className="mt-1 text-sm font-medium tracking-tight leading-5 text-slate-400">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>

      <div className="flex gap-4 self-start mt-8">
        <img
          src={carImage}
          alt={carName}
          className="object-contain shrink-0 max-w-full aspect-[1.22] w-[132px]"
        />
        <div className="flex overflow-hidden flex-col my-auto">
          <h3 className="text-3xl font-bold tracking-tighter text-gray-900">
            {carName}
          </h3>
          <div className="flex gap-2 items-center mt-2">
            <div className="flex gap-0.5">
              {[...Array(rating)].map((_, i) => (
                <img
                  key={i}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ebdf0a9037f1174a30d4f7f946fa91e31d6a5e45c39bfd5857f94bfc3441be?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                  alt=""
                  className="w-5 h-5"
                />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <img
                  key={i}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a7d48be641b19f45acc48abcaa1fc1b00b69af2d182f38d7d26c93f73e4e39e?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                  alt=""
                  className="w-5 h-5"
                />
              ))}
            </div>
            <span className="text-sm font-medium tracking-tight text-slate-500">
              {reviews}+ Reviewer
            </span>
          </div>
        </div>
      </div>

      <hr className="mt-8 border-slate-300 border-opacity-40" />

      <div className="flex flex-col gap-6 mt-8">
        <div className="flex justify-between text-base tracking-tight">
          <span className="font-medium text-slate-400">Subtotal</span>
          <span className="font-semibold text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-base tracking-tight">
          <span className="font-medium text-slate-400">Tax</span>
          <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div>
          <h4 className="text-xl font-bold tracking-tight text-gray-900">
            Total Rental Price
          </h4>
          <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
            Overall price and includes rental discount
          </p>
        </div>
        <span className="text-3xl font-bold text-gray-900">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
