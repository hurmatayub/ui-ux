import Image from 'next/image';
import DashboardRental from './dashoardRental';
import TopCars from './TopCarrs';
import RecentTransaction from './RecantTransiction';
import Navbar from '../Componenets/Navbarr/Navbar';


export default function Dashboard(){
  return (
    <>
      <Navbar />
      <div className="w-full h-[900px] bg-[#F6F7F9] relative">
       
        <div className="hidden md:block w-[286px] h-[895px] bg-[#FFFFFF] border border-[#F3F5F7]">
          <div className="w-full h-auto border-b border-[#F3F5F7] py-4">
            <div className="pl-4">
              <p className="text-[#94A7CB66] font-semibold text-xs">M A I N  M E N U</p>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3 pl-2 py-4 mx-3 rounded-[10px] bg-[#3563E9]">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/home.png" alt="Dashboard" width={24} height={24} />
                </div>
                <p className="text-white font-medium text-base">Dashboard</p>
              </div>
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/cari.png" alt="Car Rent" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Car Rent</p>
              </div>
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/insight.png" alt="Insight" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Insight</p>
              </div>
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/wallet.png" alt="Reimburse" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Reimburse</p>
              </div>
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/message.png" alt="Inbox" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Inbox</p>
              </div>
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/calendar.png" alt="Calendar" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Calendar</p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto gap-0 border-b border-[#F3F5F7] py-4 mt-9">
            <div className="pl-4">
              <p className="text-[#94A7CB66] font-semibold text-xs">P R E F E R E N C E S</p>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/setting.png" alt="Settings" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Settings</p>
              </div>
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/info-circle.png" alt="Help" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Help & Center</p>
              </div>
              <div className="flex items-center gap-3 pl-4 py-2 ">
                <div className="w-[24px] h-[24px]">
                  <Image src="/icons/briefcase.png" alt="Dark Mode" width={24} height={24} />
                </div>
                <p className="text-[#90A3BF] font-medium text-base">Dark Mode</p>
                <Image src="/icons/toggle.png" alt='' />
              </div>
            </div>
          </div>
          <div className="w-full h-auto py-4 mt-20">
            <div className="flex items-center gap-3 pl-4 py-2 ">
              <div className="w-[24px] h-[24px]">
                <Image src="/icons/logout.png" alt="Log Out" width={24} height={24} />
              </div>
              <p className="text-[#90A3BF] font-medium text-base">Log Out</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <DashboardRental />
          <TopCars />
          <RecentTransaction />
        </div>
      </div>
    </>
  );
}

