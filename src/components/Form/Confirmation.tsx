export default function Confirmation() {
    return(
        // <div className="w-[852px] h-[664px] rounded-[10px] bg-[#FFFFFF] mx-7 mt-7">
        
        // <div className="w-[852px] h-[484px] bg-white rounded-tl-lg p-6">
          
        //   <div className="flex justify-between items-start gap-4 mb-6">
            
        //     <div className="w-[436px]">
        //       <p className="text-[20px] font-bold text-[#1A202C] leading-[30px]">
        //         Confirmation
        //       </p>
        //       <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px] mt-2">
        //         We are getting to the end. Just a few clicks and your rental is ready!
        //       </p>
        //     </div>
            
        //     <div className="w-[72px] text-right mt-12">
        //       <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px]">
        //         Step 4 of 4
        //       </p>
        //     </div>
        //   </div>

        <>
          <div className="w-[804px] gap-[24px] mb-6 ">
          
            <div className="flex items-center h-[56px] mb-4 pl-6 bg-[#F6F7F9] rounded-[10px]">
              <input type="checkbox" className="w-[24px] h-[24px] mr-4" />
              <p className="text-[16px] font-semibold text-[#1F2544] leading-[24px]">
                I agree with sending Marketing and newsletter emails. No spam,
                promised!
              </p>
            </div>
           
            <div className="flex items-center h-[56px] pl-6 bg-[#F6F7F9] rounded-[10px]">
              <input type="checkbox" className="w-[24px] h-[24px] mr-4" />
              <p className="text-[16px] font-semibold text-[#1F2544] leading-[24px]">
                I agree with our terms and conditions and privacy policy.
              </p>
            </div>
          </div>

          
          <div className="flex items-center mb-6">
            <button className="w-[140px] h-[56px] bg-[#3563E9] rounded-lg flex justify-center items-center gap-2 text-white">
              <p className="text-[16px] font-bold leading-[20px]">Rent Now</p>
            </button>
          </div>

         
          <div className="flex flex-col gap-4">

            <div className="flex items-center">
              <div className="w-[32px] h-[32px] flex items-center justify-center bg-gray-200 rounded">
                <img src="/icons/Layer.png" alt="Security Icon" />
              </div>
              <p className="ml-4 text-[16px] font-semibold text-[#1A202C]">
                All your data are safe
              </p>
            </div>
            
            <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px]">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        {/* </div>
        </div> */}
        </>


    )
}