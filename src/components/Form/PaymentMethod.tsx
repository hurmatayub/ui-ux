import React from "react";
import TextInput from "./TextInput";

export default function PaymentMethod() {
  return (
    <div className="w-[852px] h-[664px] rounded-[10px] bg-[#FFFFFF] mx-7 mt-7">
      <div className="w-[852px] h-[596px] bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg font-bold text-[#1A202C]">Payment Method</p>
            <p className="text-sm font-medium text-[#90A3BF]">
              Please enter your payment method
            </p>
          </div>
          <p className="text-sm font-medium text-right text-[#90A3BF]">Step 3 of 4</p>
        </div>

        <div className="w-full h-[270px] bg-[#F6F7F9] rounded-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <img
                src="/icons/mark.png"
                className="w-4 h-4 rounded-full bg-[#3563E94D]"
                alt="Mark Icon"
              />
              <p className="text-base font-semibold text-[#1A202C]">
                Credit Card
              </p>
            </div>
            <div className="flex gap-3">
              <img
                src="/icons/Visa.png"
                alt="Visa Logo"
                className="w-[92px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <TextInput
                label="Card Number"
                placeholder="Enter card number"
              />
              <TextInput
                label="Card Holder"
                placeholder="Enter cardholder name"
              />
            </div>
            <div>
              <TextInput
                label="Expiration Date"
                placeholder="DD / MM / YY"
              />
              <TextInput label="CVC" placeholder="Enter CVC" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-6">
          <div className="w-full h-14 bg-[#F6F7F9] flex items-center gap-4 px-6 rounded">
            <img
              src="/icons/iactions-select .png"
              alt="Select Icon"
              className="w-6 h-6"
            />
            <p className="text-sm font-semibold text-[#1A202C]">PayPal</p>
            <img
              src="/icons/PayPal.png"
              alt="PayPal Icon"
              className="w-[100px] h-[24px]"
            />
          </div>

          <div className="w-full h-14 bg-[#F6F7F9] flex items-center gap-4 px-6 rounded">
            <img
              src="/icons/iactions-select .png"
              alt="Select Icon"
              className="w-6 h-6"
            />
            <p className="text-sm font-semibold text-[#1A202C]">Bitcoin</p>
            <img
              src="/icons/Bitcoin (1).png"
              alt="Bitcoin Icon"
              className="w-[94px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
