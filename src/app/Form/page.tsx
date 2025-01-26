

import React from "react";
import Navbar from "../Componenets/Navbarr/Navbar";
import { Footer } from "../Componenets/Footer/footer/Footer";


export default function BillingInfo() {
  return (
    <>
      <Navbar />
      <div className="w-full pt-8 bg-[#F6F7F9]">
        {/* Billing Info */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-lg md:text-xl font-bold text-[#1A202C]">
                Billing Info
              </p>
              <p className="text-sm md:text-base text-[#90A3BF] mt-1">
                Please enter your billing info
              </p>
            </div>
            <p className="text-sm md:text-base text-[#90A3BF]">Step 1 of 4</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
              />
            </div>
            <div>
              <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
              />
            </div>
            <div>
              <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
              />
            </div>
            <div>
              <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                Town / City
              </label>
              <input
                type="text"
                placeholder="Town or city"
                className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
              />
            </div>
          </div>
        </div>

        {/* Rental Info */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-lg md:text-xl font-bold text-[#1A202C]">
                Rental Info
              </p>
              <p className="text-sm md:text-base text-[#90A3BF] mt-1">
                Please select your rental date
              </p>
            </div>
            <p className="text-sm md:text-base text-[#90A3BF]">Step 2 of 4</p>
          </div>

          {/* Pick-Up and Drop-Off */}
          <div className="space-y-10 mt-6">
            {/* Pick-Up */}
            <div>
              <p className="text-base font-semibold text-[#1A202C]">Pick - Up</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div>
                  <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Select your city"
                    className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </div>
                <div>
                  <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                    Date
                  </label>
                  <input
                    type="text"
                    placeholder="Select your date"
                    className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </div>
                <div>
                  <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                    Time
                  </label>
                  <input
                    type="text"
                    placeholder="Select your time"
                    className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </div>
              </div>
            </div>

            {/* Drop-Off */}
            <div>
              <p className="text-base font-semibold text-[#1A202C]">Drop - Off</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div>
                  <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Select your city"
                    className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </div>
                <div>
                  <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                    Date
                  </label>
                  <input
                    type="text"
                    placeholder="Select your date"
                    className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </div>
                <div>
                  <label className="text-sm md:text-base font-semibold text-[#1A202C]">
                    Time
                  </label>
                  <input
                    type="text"
                    placeholder="Select your time"
                    className="w-full h-14 mt-2 px-4 border rounded-lg text-sm text-[#90A3BF] bg-[#F6F7F9]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-lg md:text-xl font-bold text-[#1A202C]">
                Payment Method
              </p>
              <p className="text-sm md:text-base text-[#90A3BF] mt-1">
                Please enter your payment method
              </p>
            </div>
            <p className="text-sm md:text-base text-[#90A3BF]">Step 3 of 4</p>
          </div>

          {/* Payment details */}
          <div className="space-y-6 mt-6">
            {/* Add inputs for card details */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}