import Image from "next/image";
import React from "react";

const TopCars = () => {
  return (
    <div className="absolute w-[524px] h-[355px] top-[32px] left-[884px] rounded-[10px] bg-white">
   
      <div className="absolute top-[24px] left-[24px] flex gap-[260px]">
        
        <div className="w-[192px] h-[24px]">
          <p className="font-bold text-[20px] leading-[30px] text-[#1A202C]">
            Top 5 Car Rental
          </p>
        </div>

        <div className="w-[24px] h-[24px]">
          <Image 
            src="/icons/more.png" 
            alt="Icon"
            width={24} height={24}
            className="w-full h-full" 
          />
        </div>
      </div>

      <div className="absolute w-[220px] h-[220px] top-[80px] left-[25px]">
        <Image 
          src="/icons/Chart.png" 
          alt="Chart" 
          width={220}
          height={220}
          className="w-full h-full" 
        />
      </div>

      <div className="absolute top-[158px] left-[84px] flex flex-col items-center gap-4">
       
        <div className="w-[100px] h-[39px]">
          <p className="font-bold text-[24px] leading-[36px] text-[#1A202C] text-center">
            72,030
          </p>
        </div>

   
        <div className="w-[100px] h-[20px]">
          <p className="font-medium text-[14px] leading-[21px] text-[#90A3BF] text-center">
            Rental Car
          </p>
        </div>
      </div>


      <div className="absolute top-[80px] left-[268px] flex flex-col gap-[24px]">
        {[
          { name: "Sport Car", color: "#0D3559", number: "17,439" },
          { name: "SUV", color: "#175D9C", number: "9,478" },
          { name: "Coupe", color: "#2185DE", number: "18,197" },
          { name: "Hatchback", color: "#63A9E8", number: "12,510" },
          { name: "MPV", color: "#A6CEF2", number: "14,406" },
        ].map((car, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center w-full"
          >
     
            <div className="flex items-center gap-[12px]">
              <div
                className="w-[12px] h-[12px] rounded-full"
                style={{ backgroundColor: car.color }}
              ></div>

              <p className="font-semibold text-[14px] leading-[21px] text-[#90A3BF]">
                {car.name}
              </p>
            </div>

            <div className="text-right ml-20">
              <p className="font-semibold text-[14px] leading-[21px] text-[#1A202C]">
                {car.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCars;




