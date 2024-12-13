import React from "react";
import TextInput from "./TextInput";
import LocationSection from "./LocationSection";
import Confirmation from "./Confirmation";

export default function BillingInfo() {
  return (
    <div className="w-full h-[2240px] mt-[124px] pt-[32px] bg-[#F6F7F9]">
      
      <div className="w-[852px] h-[336px] bg-[#FFFFFF] rounded-[10px] mx-7">
        <div className="flex justify-between items-center px-[24px] pt-[24px]">
          <div>
            <p className="text-[20px] font-bold text-[#1A202C] leading-[30px]">Billing Info</p>
            <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px] mt-[4px]">
              Please enter your billing info
            </p>
          </div>
          <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px]">Step 1 of 4</p>
        </div>

        <div className="grid grid-cols-2 gap-[32px] px-[24px] pt-[32px]">
          <TextInput label="Name" placeholder="Your name" />
          <TextInput label="Phone Number" placeholder="Phone number" />
          <TextInput label="Address" placeholder="Address" />
          <TextInput label="Town / City" placeholder="Town or city" />
        </div>
      </div>

      <div className="w-[852px] h-[664px] rounded-[10px] bg-[#FFFFFF] mx-7 mt-7">
        <div className="flex justify-between items-center px-[24px] pt-[24px]">
          <div>
            <p className="text-[20px] font-bold leading-[30px] text-[#1A202C]">Rental Info</p>
            <p className="text-[14px] font-medium leading-[21px] text-[#90A3BF] mt-[4px]">
              Please select your rental date
            </p>
          </div>
          <p className="text-[14px] font-medium leading-[21px] text-[#90A3BF]">Step 2 of 4</p>
        </div>
        <div className="px-[24px] pt-[32px] space-y-[40px] ">
          <LocationSection title="Pick-Up" />
          <LocationSection title="Drop-Off" />
        </div>
      </div>
    </div>
  );
}
