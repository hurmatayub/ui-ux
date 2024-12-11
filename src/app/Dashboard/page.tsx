import Image from 'next/image';
import DashboardRental from './dashoardRental';
import TopCars from './TopCarrs';
import RecentTransaction from './RecantTransiction';

export default function Dashboard(){
  return (
    <div className="w-full h-[900px] top-[124px] bg-[#F6F7F9] relative">
    <div className="w-[286px] h-[900px] bg-[#FFFFFF] border-r border-[#F3F5F7]">
     
      <div className="w-full h-auto gap-0 border-b  border-[#F3F5F7] py-4">
        <div className="pl-4">
          <p className="text-[#94A7CB66] font-semibold text-xs">M A I N  M E N U</p>
        </div>
        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-3 pl-4 py-2 rounded-lg bg-[#3563E9]">
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

      <div className="w-full h-auto gap-0 border-b border-[#F3F5F7] py-4">
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
          </div>
        </div>
      </div>

      
      <div className="w-full h-auto gap-0 py-4">
        <div className="flex items-center gap-3 pl-4 py-2 ">
          <div className="w-[24px] h-[24px]">
            <Image src="/icons/logout.png" alt="Log Out" width={24} height={24} />
          </div>
          <p className="text-[#90A3BF] font-medium text-base">Log Out</p>
        </div>
      </div>
      <DashboardRental />
      <TopCars />
      <RecentTransaction />
    </div>
    </div>
  );
};

