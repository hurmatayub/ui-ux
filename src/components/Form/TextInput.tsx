import React from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder }) => (
  <div className="h-[92px]">
    <p className="text-[16px] font-semibold text-[#1A202C] leading-[24px]">{label}</p>
    <input
      type="text"
      placeholder={placeholder}
      className="w-[386px] h-[56px] mt-[8px] px-4 border rounded-[10px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
    />
  </div>
);

export default TextInput;
