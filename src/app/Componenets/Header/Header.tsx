import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiRadioCircleMarked } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";



const Header = () => {
    return (
        <div className=' bg-contentBg w-[100%] h-fit '>
            {/* Ads section  */}
            <div className='w-[100%]  flex justify-center gap-5 items-center  p-5  '>
                {/* Ads1  */}
                <div className='w-[640px] h-[360px]  bg-Ads1 rounded-[15px]'>
                    <div className=' w-[284px] h-[224px] m-7 text-white ' >
                        <h1 className='text-[24px] '>The Best Platform for Car Rental</h1>
                        <p className='font-serif'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        <button className='w-[120px] h-[44px] bg-primary500 rounded-[10px] mt-5'>Rental Car</button>
                        <img src="/images/carImg.png" alt="" className='ml-32 mt-8 ' />
                    </div>
                </div>
                {/* Ads2  */}
                <div className='w-[640px] h-[360px] bg-primary500 rounded-[15px] '>
                    <div className=' w-[284px] h-[224px] m-5 text-white '>
                        <h1 className='text-[24px] '>Easy way to rent a car at a low price</h1>
                        <p>Providing cheap car rental services and safe and comfortable facilities.</p>
                        <button className='w-[120px] h-[44px]  bg-Ads1 rounded-[10px] mt-5'>Rental Car</button>
                        <img src="/images/carImg.png" alt="" className='ml-32 mt-8 ' />
                    </div>

                </div>
            </div>
            {/* 2nd section  */}

            <div className="w-[100%] h-fit flex justify-around items-center p-2 bg-contentBg">
                {/* pic up  */}
                <div className="w-[582px] h-[132px]   bg-white rounded-[10px]">
                    <div className="w-[92px] h-[20px]  m-5 flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Pick-Up</p></div>
                    <div className='w-[486px] h-[48px]  m-5 flex justify-between items-center'>
                        <div className='w-[126px] h-[48px]  px-0.5'>
                            <p><strong>Location</strong></p>
                            <div className='flex justify-between items-center'><p className='text-[14px] text-gray-400'>Slect your city </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                        <div className='w-[126px] h-[48px]  p-1'>
                            <p><strong>Date</strong></p>
                            <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your date</p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                        <div className='w-[126px] h-[48px]  p-1'>
                            <p><strong>Time</strong></p>
                            <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your time </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>

                    </div>

                </div>
                {/* center div  */}
                <div className="w-[60px] h-[60px] bg-primary500 rounded-[10px]"><LuArrowDownUp className='text-white m-auto mt-[20%] text-[40px] ' /></div>
                {/* right div  */}
                <div className="w-[582px] h-[132px]  bg-white rounded-[10px]">
                    <div className="w-[92px] h-[20px] m-5 flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Drop-Off</p></div>
                    <div className='w-[486px] h-[48px] m-5 flex justify-between items-center'>
                        
                        <div className='w-[126px] h-[48px] px-0.5'>
                            <p><strong>Location</strong></p>
                            <div className='flex justify-between items-center'><p className='text-[14px] text-gray-400'>Slect your city </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                        <div className='w-[126px] h-[48px] p-1'>
                            <p><strong>Date</strong></p>
                            <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your date</p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                        <div className='w-[126px] h-[48px] p-1'>
                            <p><strong>Time</strong></p>
                            <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your time </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default  Header