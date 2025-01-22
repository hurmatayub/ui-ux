import Image from "next/image";

export default function Header() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center lg:gap-6 gap-11 bg-[#F6F7F9] lg:top-[-436px] top-[-710px]">
  <div className="flex flex-col sm:flex-row items-center justify-center lg:gap-4 gap-0">
 
    <div className="lg:w-[582px] w-[400px] lg:h-[136px] h-[130px] bg-white rounded-[10px] flex flex-col gap-4 p-6 lg:mb-12 mb-[-19px]">
      <div className="flex items-center gap-2">
        <div className="w-[16px] h-[16px]">
          <Image src="/icons/mark.png" width={16} height={16} alt="" />
        </div>
        <p className="text-[16px] font-semibold text-[#1A202C] whitespace-nowrap overflow-hidden text-ellipsis p-1 rounded-md mt-0">
          Pick - Up
        </p>
      </div>
      <div className="flex justify-between">

        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis  rounded-md mt-0">
            Locations
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#90A3BF] whitespace-nowrap overflow-hidden text-ellipsis ">
              Select your city
            </p>
            <Image
              src="/icons/Arrow-down.png"
              alt="arrow"
              width={14}
              height={14}
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis  rounded-md mt-0">
            Date
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#90A3BF] whitespace-nowrap overflow-hidden text-ellipsis">
              Select your date
            </p>
            <Image
              src="/icons/Arrow-down.png"
              alt="arrow"
              width={14}
              height={14}
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis  rounded-md mt-0">
            Time
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#90A3BF] whitespace-nowrap overflow-hidden text-ellipsis">
              Select your time
            </p>
            <Image
              src="/icons/Arrow-down.png"
              alt="arrow"
              width={14}
              height={14}
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="sm:absolute sm:top-[calc(50%-45px)] sm:left-[calc(50%-45px)] sm:z-10 lg:static flex items-center justify-center text-white">
      <Image
        src="/icons/Switch.png"
        width={90}
        height={90}
        alt="refresh"
        className="w-[90] h-[90]"
      />
    </div>

    <div className="lg:w-[582px] w-[400px] lg:h-[136px] h-[130px] bg-white rounded-[10px] flex flex-col gap-4 p-6 lg:mb-17 mb-4 mt-[-30px]">
      <div className="flex items-center gap-2">
        <div className="w-[16px] h-[16px] bg-gray-300 rounded-full">
          <Image src="/icons/mark.png" width={16} height={16} alt="" />
        </div>
        <p className="text-[16px] font-semibold text-[#1A202C] whitespace-nowrap overflow-hidden text-ellipsis p-1 rounded-md mt-0">
          Drop - Off
        </p>
      </div>
      <div className="flex justify-between">

        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis  rounded-md mt-0">
            Locations
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#90A3BF] whitespace-nowrap overflow-hidden text-ellipsis">
              Select your city
            </p>
            <Image
              src="/icons/Arrow-down.png"
              alt="arrow"
              width={14}
              height={14}
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis  rounded-md mt-0">
            Date
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#90A3BF] whitespace-nowrap overflow-hidden text-ellipsis">
              Select your date
            </p>
            <Image
              src="/icons/Arrow-down.png"
              alt="arrow"
              width={14}
              height={14}
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
        <div className="w-[48px] h-0 border-[1px] border-solid border-[#C3D4E966] mt-4 rotate-[270deg]"></div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis  rounded-md mt-0">
            Time
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#90A3BF] whitespace-nowrap overflow-hidden text-ellipsis">
              Select your time
            </p>
            <Image
              src="/icons/Arrow-down.png"
              alt="arrow"
              width={14}
              height={14}
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
