import React from "react";

const TopCars = () => {
  return (
    <div className="absolute w-[524px] h-[324px] top-[32px] left-[884px]  rounded-[10px] bg-white">
      <div className="absolute top-[24px] left-[24px] flex gap-[260px]">
        <div className="w-[192px] h-[24px] ">
          <p className="font-bold text-[20px] leading-[30px] text-[#1A202C]">
            Top 5 Car Rental
          </p>
        </div>
        <div className="w-[24px] h-[24px]">
          <img src="/icons/more.png" alt="Icon" className="w-full h-full" />
        </div>
      </div>

      <div className="absolute w-[220px] h-[220px] top-[80px] left-[25px]">
        <img src="/icons/Chart.png" alt="Chart" className="w-full h-full" />
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

     
      <div className="absolute top-[80px] left-[268px] flex gap-[36px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[12px] h-[12px] p-[2px] rounded-full bg-[#0D3559]"></div>
          <p className="font-semibold text-[14px] leading-[21px] text-[#90A3BF]">
            SportCar
          </p>
        </div>
        <div className="w-[72px] h-[24px]">
          <p className="font-semibold text-[14px] leading-[21px] text-right text-[#1A202C]">
            17,439
          </p>
        </div>
      </div>
      <div className="absolute top-[110px] left-[268px] flex gap-[36px]">
        
        <div className="flex items-center gap-[12px]">
          <div className="w-[12px] h-[12px] p-[2px] rounded-full bg-[#175D9C]"></div>
          <p className="font-semibold text-[14px] leading-[21px] text-[#90A3BF]">
            SUV
          </p>
        </div>
        <div className="w-[72px] h-[24px]">
          <p className="font-semibold text-[14px] leading-[21px] text-right text-[#1A202C]">
            9,478
          </p>
        </div>
      </div>

      <div className="absolute top-[140px] left-[268px] flex gap-[36px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[12px] h-[12px] p-[2px] rounded-full bg-[#2185DE]"></div>
          <p className="font-semibold text-[14px] leading-[21px] text-[#90A3BF]">
            Coupe
          </p>
        </div>
        <div className="w-[72px] h-[24px]">
          <p className="font-semibold text-[14px] leading-[21px] text-right text-[#1A202C]">
            18,197
          </p>
        </div>
      </div>

      <div className="absolute top-[170px] left-[268px] flex gap-[36px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[12px] h-[12px] p-[2px] rounded-full bg-[#63A9E8]"></div>
          <p className="font-semibold text-[14px] leading-[21px] text-[#90A3BF]">
            Hatchback
          </p>
        </div>
        <div className="w-[72px] h-[24px]">
          <p className="font-semibold text-[14px] leading-[21px] text-right text-[#1A202C]">
            12,510
          </p>
        </div>
      </div>

      <div className="absolute top-[200px] left-[268px] flex gap-[36px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[12px] h-[12px] p-[2px] rounded-full bg-[#A6CEF2]"></div>
          <p className="font-semibold text-[14px] leading-[21px] text-[#90A3BF]">
            MPV
          </p>
        </div>
        <div className="w-[72px] h-[24px]">
          <p className="font-semibold text-[14px] leading-[21px] text-right text-[#1A202C]">
            14,406
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCars;
