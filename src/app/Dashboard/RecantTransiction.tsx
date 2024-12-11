import React from 'react';

const RecentTransaction = () => {
  return (
    <div className="absolute w-[524px] h-[480px] top-[388px] left-[884px] p-[24px] rounded-[10px]  bg-white">
      <div className="absolute w-[476px] h-[24px] top-[24px] left-[24px] flex justify-between items-center">
        <p className="font-bold text-[20px] leading-[30px] text-[#1A202C]">
          Recent Transaction
        </p>
        <p className="font-medium text-[12px] leading-[24px] text-right text-[#3563E9]">
          View All
        </p>
      </div>

  
      <div className="absolute top-[80px] left-[24px] w-[476px] flex flex-col gap-[16px]">
  <div className="flex w-[476px] h-[70px] items-center">
    <div className="w-[132px] h-[70px] p-[17px_9px] rounded-[8px]">
        <img src='/images/GTR.png' />
    </div>
    <div className="flex flex-col justify-center gap-[8px] ml-[16px]">
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        Nissan GT - R
      </p>
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        Sport Car
      </p>
    </div>
    <div className="ml-auto flex flex-col items-end gap-[8px]">
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        20 July
      </p>
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        $80.00
      </p>
    </div>
  </div>

  <div className="flex w-[476px] h-[70px] items-center">
    <div className="w-[132px] h-[70px] p-[17px_9px] rounded-[8px]">
        <img src='/images/Kgg.png' />
    </div>
    <div className="flex flex-col justify-center gap-[8px] ml-[16px]">
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        Koegnigsegg
      </p>
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        Sport Car
      </p>
    </div>
    <div className="ml-auto flex flex-col items-end gap-[8px]">
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        19 July
      </p>
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        $99.00
      </p>
    </div>
  </div>

  <div className="flex w-[476px] h-[70px] items-center">
    <div className="w-[132px] h-[70px] p-[17px_9px] rounded-[8px]">
        <img src='/images/RR.png' />
    </div>
    <div className="flex flex-col justify-center gap-[8px] ml-[16px]">
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        Rolls - Royce
      </p>
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        Sport Car
      </p>
    </div>
    <div className="ml-auto flex flex-col items-end gap-[8px]">
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        18 July
      </p>
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        $96.00
      </p>
    </div>
  </div>

  <div className="flex w-[476px] h-[70px] items-center">
    <div className="w-[132px] h-[70px] p-[17px_9px] rounded-[8px]">
        <img src='/images/CR.png' />
    </div>
    <div className="flex flex-col justify-center gap-[8px] ml-[16px]">
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        CR - V
      </p>
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        Sport Car
      </p>
    </div>
    <div className="ml-auto flex flex-col items-end gap-[8px]">
      <p className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF]">
        17 July
      </p>
      <p className="font-bold text-[16px] leading-[24px] text-[#1A202C]">
        $80.00
      </p>
    </div>
  </div>

        <div className="w-[476px] h-[0px] border-t border-[#C3D4E966]"></div>
      </div>
    </div>
  );
};

export default RecentTransaction;
