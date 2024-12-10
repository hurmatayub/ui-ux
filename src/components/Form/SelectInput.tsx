import React from "react";

interface SelectInputProps {
  label: string;
  placeholder: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, placeholder }) => (
  <div className="relative mt-[8px]">
    <p className="text-[16px] font-semibold text-[#1A202C]">{label}</p>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-[56px] border rounded-[10px] px-[16px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
    />
    <img
      src="/icons/Arrow-down.png"
      alt="Arrow"
      className="absolute w-[14px] h-[14px] top-[50%] right-[16px] transform -translate-y-[50%]"
    />
  </div>
);

export default SelectInput;
