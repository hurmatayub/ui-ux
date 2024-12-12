import * as React from "react";
import { CarCardProps } from "./Types";

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  originalPrice,
  liked
}) => {
  return (
    <div className="flex flex-wrap gap-[32px] w-[1312px] h-auto">
    <div className="w-[304px] h-[388px] bg-[#F6F7F9] rounded-[10px]">
      <div className="flex gap-5 justify-between font-bold">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">{type}</div>
        </div>
        <img
          loading="lazy"
          src={liked ? "/icons/Heart.png" : "/icons/disLike.png"}
          className="object-contain shrink-0 self-start w-6 aspect-square"
          alt={liked ? "Liked car" : "Not liked car"}
        />
      </div>
      <img
        loading="lazy"
        src={image}
        className="object-contain mx-3 mt-16 aspect-[3.23] w-[232px] max-md:mx-2.5 max-md:mt-10"
        alt={`${name} ${type} car`}
      />
      <div className="flex gap-4 items-start mt-16 text-sm font-medium text-slate-400 max-md:mt-10">
        <div className="flex gap-1.5 items-start tracking-tight leading-5 whitespace-nowrap">
          <img
            loading="lazy"
            src="/icons/feul.png"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Fuel capacity icon"
          />
          <div className="w-7">{fuelCapacity}</div>
        </div>
        <div className="flex gap-1 items-start whitespace-nowrap">
          <img
            loading="lazy"
            src="/icons/manual.png"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Transmission type icon"
          />
          <div className="w-12">{transmission}</div>
        </div>
        <div className="flex gap-1.5 items-start">
          <img
            loading="lazy"
            src="/icons/people.png"
            className="object-contain shrink-0 w-6 aspect-square"
            alt="Passenger capacity icon"
          />
          <div className="w-[60px]">{capacity}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-5 w-full">
        <div className="flex flex-col font-bold text-slate-400">
          <div className="text-xl">
            ${price}.00/ <span className="text-sm text-slate-400">day</span>
          </div>
          {originalPrice && (
            <div className="mt-1 text-sm">${originalPrice}.00</div>
          )}
        </div>
        <div className="relative">
  <div className=" top-[320px] left-[164px]">
    <button className="w-[116px] h-[44px] px-5  bg-[#3563E9] text-white font-semibold rounded-[4px] flex items-center justify-center gap-2">
      <div className="w-[76px] h-[24px]  flex items-center justify-center">
        <p className="font-['Plus Jakarta Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-underline-position-from-font text-decoration-skip-ink-none">
          Rent Now
        </p>
      </div>
    </button>
  </div>
</div>
      </div>
    </div>
    </div>
  );
};