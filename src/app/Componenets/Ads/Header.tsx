import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiRadioCircleMarked } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";


const Header = () => {
  return (
    <div className="bg-[#F6F7F9]  w-[100%] h-fit ">
      <div className="w-[100%] h-fit flex justify-around items-center p-2 bg-contentBg">
        <div className="w-[582px] h-[132px]   bg-white rounded-[10px]">
          <div className="w-[92px] h-[20px]  m-5 flex justify-start items-center">
            <BiRadioCircleMarked className="text-blue-800 text-[25px] shadow-sm" />
            <p>Pick-Up</p>
          </div>
          <div className="w-[486px] h-[48px]  m-5 flex justify-between items-center">
            <div className="w-[126px] h-[48px]  px-0.5">
              <p>
                <strong>Location</strong>
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[14px] text-gray-400">Slect your city </p>
                <p>
                  <RiArrowDropDownLine className="text-[20px]" />
                </p>
              </div>
            </div>
            <div className="w-[126px] h-[48px]  p-1">
              <p>
                <strong>Date</strong>
              </p>
              <div className="flex justify-between items-center">
                {" "}
                <p className="text-[14px] text-gray-400">Slect your date</p>
                <p>
                  <RiArrowDropDownLine className="text-[20px]" />
                </p>
              </div>
            </div>
            <div className="w-[126px] h-[48px]  p-1">
              <p>
                <strong>Time</strong>
              </p>
              <div className="flex justify-between items-center">
                {" "}
                <p className="text-[14px] text-gray-400">Slect your time </p>
                <p>
                  <RiArrowDropDownLine className="text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[60px] h-[60px] bg-primary500 rounded-[10px]">
          <LuArrowDownUp className="text-white bg-blue-700 m-auto mt-[20%] text-[40px] " />
        </div>

        <div className="w-[582px] h-[132px]  bg-white rounded-[10px]">
          <div className="w-[92px] h-[20px] m-5 flex justify-start items-center">
            <BiRadioCircleMarked className="text-blue-800 text-[25px] shadow-sm" />
            <p>Drop-Off</p>
          </div>
          <div className="w-[486px] h-[48px] m-5 flex justify-between items-center">
            <div className="w-[126px] h-[48px] px-0.5">
              <p>
                <strong>Location</strong>
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[14px] text-gray-400">Slect your city </p>
                <p>
                  <RiArrowDropDownLine className="text-[20px]" />
                </p>
              </div>
            </div>
            <div className="w-[126px] h-[48px] p-1">
              <p>
                <strong>Date</strong>
              </p>
              <div className="flex justify-between items-center">
                {" "}
                <p className="text-[14px] text-gray-400">Slect your date</p>
                <p>
                  <RiArrowDropDownLine className="text-[20px]" />
                </p>
              </div>
            </div>
            <div className="w-[126px] h-[48px] p-1">
              <p>
                <strong>Time</strong>
              </p>
              <div className="flex justify-between items-center">
                {" "}
                <p className="text-[14px] text-gray-400">Slect your time </p>
                <p>
                  <RiArrowDropDownLine className="text-[20px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

//  export default function Header() {
//     return (
//       <div className="flex flex-col items-center gap-4">
//
//         <div className="w-[582px] h-[136px] bg-white rounded-[10px] rounded-tr-none"></div>

//
//         <div className="w-[582px] h-[132px] relative top-[424px] left-[64px] bg-white rounded-tl-[10px] rounded-tr-none"></div>

//
//         <div className="w-[486px] h-[48px] relative top-[60px] left-[48px] flex gap-6 items-center">
//           {/* Image Div */}
//           <div className="w-[16px] h-[16px] rounded-tl-[70px] bg-gray-300 flex-shrink-0">
//             <img src="/icons/mark.png" alt="" className="w-[16px]" />
//           </div>

//
//           <div className="w-[126px] h-[48px] flex flex-col gap-2">
//             <p className="text-[16px] font-semibold leading-[24px] text-[#1A202C]">Pick - Up</p>
//           </div>

//           <div className="w-[126px] h-[48px] flex flex-col gap-2">
//             <p className="text-[16px] font-bold leading-[24px] text-[#1A202C]">Locations</p>
//             <div className="flex items-center gap-2">
//               <p className="text-[12px] font-medium leading-[15.12px] text-[#90A3BF]">Select your city</p>
//               <img src="/icons/Arrow-down.png" alt="arrow" className="w-[14px] h-[14px]" />
//             </div>
//           </div>

//
//           <div className="w-[134px] h-[48px] flex flex-col gap-2">
//             <p className="text-[16px] font-bold leading-[24px] text-[#1A202C]">Date</p>
//             <div className="flex items-center gap-2">
//               <p className="text-[12px] font-medium leading-[15.12px] text-[#90A3BF]">Select your date</p>
//               <img src="/icos/Arrow-down.png" alt="arrow" className="w-[14px] h-[14px]" />
//             </div>
//           </div>

//           <div className="w-[130px] h-[48px] flex flex-col gap-2">
//             <p className="text-[16px] font-bold leading-[24px] text-[#1A202C]">Time</p>
//             <div className="flex items-center gap-2">
//               <p className="text-[12px] font-medium leading-[15.12px] text-[#90A3BF]">Select your time</p>
//               <img src="/icos/Arrow-down.png" alt="arrow" className="w-[14px] h-[14px]" />
//             </div>
//           </div>
//         </div>

//     <div className="flex flex-col space-y-4">
//
//       <div className="w-[582px] h-[136px] bg-white rounded-t-lg"></div>

//       <div className="w-[582px] h-[132px] bg-white relative top-[424px] left-[794px] rounded-t-lg"></div>

//
//       <div className="flex flex-col w-[582px] p-6 bg-gray-800 text-white rounded-lg space-y-6">
//         <div className="flex items-center space-x-2">
//           <div className="w-[16px] h-[16px] rounded-t-lg bg-white"></div>
//           <p className="text-lg font-semibold leading-6">Drop - Off</p>
//         </div>
//         <div className="flex flex-col space-y-4">
//
//           <div className="flex items-center justify-between">
//             <div className="flex flex-col">
//               <p className="text-lg font-bold">Locations</p>
//               <p className="text-sm font-medium text-gray-500">Select your city</p>
//             </div>
//             <div className="w-[14px] h-[14px] bg-gray-300"></div>
//           </div>
//           <div className="w-[48px] h-0 border-t border-gray-300 opacity-50"></div>

//           <div className="flex items-center justify-between">
//             <div className="flex flex-col">
//               <p className="text-lg font-bold">Date</p>
//               <p className="text-sm font-medium text-gray-500">Select your date</p>
//             </div>
//             <div className="w-[14px] h-[14px] bg-gray-300"></div>
//           </div>
//           <div className="w-[48px] h-0 border-t border-gray-300 opacity-50"></div>

//
//           <div className="flex items-center justify-between">
//             <div className="flex flex-col">
//               <p className="text-lg font-bold">Time</p>
//               <p className="text-sm font-medium text-gray-500">Select your time</p>
//             </div>
//             <div className="w-[14px] h-[14px] bg-gray-300"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>
//     );
//   }
