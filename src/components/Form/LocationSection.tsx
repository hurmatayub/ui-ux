import SelectInput from "./SelectInput";

interface LocationSectionProps {
  title: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({ title }) => (
  <div>
    <div className="flex items-center gap-[8px]">
      <div className="w-[16px] h-[16px] rounded-full bg-[#3563E94D] flex justify-center items-center">
        <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-full"></div>
      </div>
      <p className="text-[16px] font-semibold leading-[20px] text-[#1A202C]">{title}</p>
    </div>
    <div className="grid grid-cols-2 gap-[24px] mt-[24px]">
      <div>
        <SelectInput label="Location" placeholder="Select your city" />
      </div>
      <div>
        <SelectInput label="Date" placeholder="Select your date" />
      </div>
      <div>
        <SelectInput label="Time" placeholder="Select your time" />
      </div>
    </div>
  </div>
);

export default LocationSection;
