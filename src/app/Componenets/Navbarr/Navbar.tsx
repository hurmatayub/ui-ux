

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-auto bg-white border-t border-b border-solid border-[#C3D4E966] flex flex-col md:flex-row items-center px-4 md:px-10 md:h-[124px]">
      <div className="flex justify-between items-center w-full md:w-auto md:flex-row md:gap-[191px] mt-4 md:mt-0">
        <div className="flex items-center gap-2">
          <p className="font-bold text-[24px] md:text-[32px] leading-[28.8px] md:leading-[48px] text-[#3563E9]">
            MORENT
          </p>
        </div>
        <Link href="/dashboard">
          <Image
            src="/icons/profile.png"
            alt="Profile Icon"
            width={44}
            height={44}
            className="lg:hidden"
          />
        </Link>
      </div>

      <div className="relative w-[263px] lg:w-[492px] h-[48px] bg-white border border-[#C3D4E966] lg:rounded-full rounded-[10px] mt-4 md:mt-0 md:mx-16 flex items-center">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full pl-10 pr-12 text-[14px] font-medium text-[#596780] bg-white lg:rounded-full rounded-[10px]"
        />
        <div className="absolute left-[12px] top-[50%] transform -translate-y-1/2">
          <Image
            src="/icons/search-normal.png"
            alt="Search Icon"
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
          />
        </div>
        <div className="absolute right-[12px] top-[50%] transform -translate-y-1/2">
          <Image
            src="/icons/filter.png"
            alt="Filter Icon"
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>

      <div className="absolute top-[75px] left-[440px] w-[48px] h-[48px] border border-solid border-[#C3D4E966] rounded-[10px] lg:hidden md:hidden flex justify-center items-center">
        <Image
          src="/icons/filter.png"
          alt="Filter Icon"
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />
      </div>

      <div className="hidden md:flex items-center space-x-5 ml-auto">
        <Image
          src="/icons/Like.png"
          alt="Like Icon"
          width={44}
          height={44}
          className="w-[44px] h-[44px]"
        />
        <Image
          src="/icons/Notification.png"
          alt="Notification Icon"
          width={44}
          height={44}
          className="w-[44px] h-[44px]"
        />
        <Image
          src="/icons/Settings.png"
          alt="Settings Icon"
          width={44}
          height={44}
          className="w-[44px] h-[44px]"
        />
        <Link href="/dashboard">
          <Image
            src="/icons/profile.png"
            alt="Profile Icon"
            width={44}
            height={44}
            className="w-[44px] h-[44px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;