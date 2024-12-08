import * as React from "react";
import { CarTypeList } from "./components/CarTypeList";
import { CarCapacityList } from "./components/CarCapacityList";
import { CarCard } from "./components/CarCard";
import { carTypes, carCapacities } from "./data/carTypes";

export const CarRentalPage: React.FC = () => {
  return (
    <div className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col grow items-start px-8 pt-8 w-full bg-white border-r border-solid border-r-gray-100 pb-[1176px] max-md:px-5 max-md:pb-24 max-md:mt-8">
            <CarTypeList types={carTypes} />
            <CarCapacityList capacities={carCapacities} />

            <div className="flex flex-col self-stretch mt-14 max-md:mt-10">
              <div className="text-xs font-semibold tracking-tight text-slate-400">
                P R I C E
              </div>
              <div className="flex flex-col mt-7 w-full max-w-[296px]">
                <div className="flex items-center pr-14 w-full rounded-none max-md:pr-5">
                  <div className="flex flex-col grow shrink-0 items-start self-stretch my-auto mr-0 rounded-xl basis-0 bg-slate-400 w-fit">
                    <div className="flex shrink-0 w-full h-3 bg-blue-600 rounded-xl" />
                  </div>
                  <div className="flex shrink-0 self-stretch my-auto w-6 h-6 bg-blue-600 rounded-full border-4 border-white border-solid fill-blue-600 stroke-[4px] stroke-white" />
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight text-justify text-slate-500">
                  Max. $100.00
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col mt-8 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <CarCard
                name="Nissan GT - R"
                type="Sport"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/61dca3c18edae9715d94e012f6ab7da42fec461d4c96a39f708b9d92936f844b?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                fuel="70L"
                transmission="Manual"
                capacity="2 Person"
                price={80.0}
                originalPrice={100.0}
                isFavorite={false}
              />
              <CarCard
                name="Koenigsegg"
                type="Sport"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/a63bcce64e94da2677313f0e72065ec2ff4f4ee6e0f3695fe0b80e71a2c03d66?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                fuel="90L"
                transmission="Manual"
                capacity="2 Person"
                price={99.0}
                isFavorite={false}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
