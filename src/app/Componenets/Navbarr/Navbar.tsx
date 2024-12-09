const Navbar = () => {
  return (
    <div className="w-full h-auto bg-white border-t border-b border-solid border-[#C3D4E966] flex flex-col md:flex-row items-center px-4 md:px-10 md:h-[124px]">
      
      <div className="flex justify-between items-center w-full md:w-auto md:flex-row md:gap-[191px] mt-4 md:mt-0">
    
        <div className="flex items-center gap-2">
          <p className="font-bold text-[24px] md:text-[32px] leading-[28.8px] md:leading-[48px] text-[#3563E9]">
            MORENT
          </p>
        </div>
    
        <div className="ml-auto md:ml-0">
          <img
            src="/icons/profile.png"
            alt="Profile Icon"
            className="w-[28px] h-[28px] md:hidden rounded-full"
          />
        </div>
      </div>

      
      <div className="relative w-[263px] md:w-[492px] h-[48px] bg-white border border-[#C3D4E966] rounded-lg mt-4 md:mt-0 md:mx-16 flex items-center">
   
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full pl-10 pr-12 text-[14px] font-medium text-[#596780] bg-white focus:outline-none rounded-lg"
        />
  
        <div className="absolute left-[12px] top-[50%] transform -translate-y-1/2">
          <img
            src="/icons/search-normal.png"
            alt="Search Icon"
            className="w-[24px] h-[24px]"
          />
        </div>
       
        <div className="absolute right-[12px] top-[50%] transform -translate-y-1/2">
          <img
            src="/icons/filter.png"
            alt="Filter Icon"
            className="w-[24px] h-[24px]"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-5 ml-auto">
        <img
          src="/icons/Like.png"
          alt="Like Icon"
          className="w-[44px] h-[44px] border border-[#C3D4E966] rounded-full"
        />
        <img
          src="/icons/Notification.png"
          alt="Notification Icon"
          className="w-[44px] h-[44px] border border-[#C3D4E966] rounded-full"
        />
        <img
          src="/icons/Settings.png"
          alt="Settings Icon"
          className="w-[44px] h-[44px] border border-[#C3D4E966] rounded-full"
        />
         <img
            src="/icons/profile.png"
           alt="Icon 4"
           className="w-[44px] h-[44px] border border-[#C3D4E966] rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
