import Header from "../Header/Header";


const Ads = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#F6F7F9] py-10 flex justify-center gap-8">
        
        <div className="w-[640px] h-[360px] bg-[#54A6FF] rounded-[10px] flex flex-col p-6">
       
          <div className="w-[284px] h-[160px] flex flex-col gap-4">
            <p className="text-[32px] font-semibold text-[#FFFFFF] leading-[48px] tracking-[-0.03em]">
              The Best Platform for Car Rental
            </p>
            <p className="text-[16px] font-medium text-[#FFFFFF] leading-[24px] tracking-[-0.02em]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
          </div>
        
          <div className="w-[120px] h-[44px]  px-3 py-5 bg-[#3563E9] rounded-[4px] gap-2 flex justify-center items-center text-center mt-4">
            <p className="text-[16px] font-semibold text-[#FFFFFF]">
              Rental Car
            </p>
          </div>
        
          <div className="relative w-[406px] h-[116px] ">
            <img src="/images/carImg1.png" alt="" className="ml-32 " />
          </div>
        </div>

    
        <div className="w-[640px] h-[360px] bg-[#3563E9] rounded-[10px] flex flex-col p-6">
          
          <div className="w-[284px] h-[160px] flex flex-col gap-4">
            <p className="text-[32px] font-semibold text-[#FFFFFF] leading-[48px] tracking-[-0.03em]">
              Easy way to rent a car at a low price
            </p>
            <p className="text-[16px] font-medium text-[#FFFFFF] leading-[24px] tracking-[-0.02em]">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
          </div>
          
          <div className="w-[120px] h-[44px] px-3 py-5 bg-[#54A6FF] rounded-[4px] gap-2 flex justify-center items-center mt-4">
            <p className="text-[16px] font-semibold text-[#FFFFFF]">
              Rental Car
            </p>
          </div>
          
          <div className="relative w-[406px] h-[116px] ">
            <img src="/images/carImg2.png" alt="" className="ml-32  " />
          </div>
        </div>
       
      </div>
      <Header />
    </>
  );
};

export default Ads;
