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
  liked,
}) => {
  return (
    <div className="flex flex-wrap gap-[32px] w-[1312px] h-auto">
      <div className="w-[304px] h-[388px] bg-[#FFFFFF] rounded-[10px]">
        <div className="flex gap-5 justify-between font-bold">
          <div className=" mt-[24px] ml-[24px] gap-[4px]  flex flex-col">
            <div className="w-[160px] h-[24px] font-['Plus Jakarta Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
              {name}
            </div>
            <div className="w-[128px] h-[20px] font-['Plus Jakarta Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left  text-[#90A3BF]">
              {type}
            </div>
          </div>
          <img
            loading="lazy"
            src={liked ? "/icons/Heart.png" : "/icons/disLike.png"}
            className="object-contain shrink-0 self-start w-6 mt-[24px] mr-[20px] aspect-square"
            alt={liked ? "Liked car" : "Not liked car"}
          />
        </div>
        <img
          loading="lazy"
          src={image}
          className="object-contain mx-[36px] mt-[90px] w-[232px] h-[72px] aspect-[3.23] max-md:mx-[36px] max-md:mt-[136px]"
          alt={`${name} ${type} car`}
        />
        <div className="flex gap-4 ml-[24px] mt-10 text-sm font-medium text-[#90A3BF] max-md:mt-10">
          <div className="flex gap-1.5 items-start tracking-[0.02em] leading-[21px]">
            <img
              loading="lazy"
              src="/icons/feul.png"
              className="object-contain w-6 aspect-square"
              alt="Fuel capacity icon"
            />
            <div className="w-7">{fuelCapacity}</div>
          </div>
          <div className="flex gap-1.5 items-start tracking-[0.02em] leading-[21px]">
            <img
              loading="lazy"
              src="/icons/manual.png"
              className="object-contain  w-6 aspect-square"
              alt="Transmission type icon"
            />
            <div className="w-12">{transmission}</div>
          </div>
          <div className="flex gap-1.5 items-start">
            <img
              loading="lazy"
              src="/icons/people.png"
              className="object-contain w-6 aspect-square"
              alt="Passenger capacity icon"
            />
            <div className="w-[60px]">{capacity}</div>
          </div>
        </div>

      <div className="flex gap-3 mt-5 ml-[24px] w-full">
  <div className="flex flex-col font-bold">
    <div className="w-[128px] h-[24px] text-[20px] font-[700] leading-[25.2px] text-left">
      ${price}.00/ <span className="text-[14px] font-[700] leading-[17.64px] text-left text-[#90A3BF]">day</span>
    </div>
    {originalPrice && (
      <div className="w-[128px] h-[20px] mt-1 text-[14px] font-[700] leading-[17.64px] text-left line-through text-[#90A3BF]">
        ${originalPrice}.00
      </div>
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
