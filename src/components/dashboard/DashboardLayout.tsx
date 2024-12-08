import * as React from "react";
import { mainMenuItems, preferenceItems } from "./data/menuItems";
import { recentTransactions, carStatistics } from "./data/carData";
import { SidebarMenuItem } from "./components/SidebarMenuItem";
import { TransactionCard } from "./components/TransactionCard";
import { StatisticItem } from "./components/StatisticItem";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <nav
          className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full"
          aria-label="Main navigation"
        >
          <div className="flex overflow-hidden flex-col px-4 pt-20 pb-12 mx-auto w-full text-justify bg-white border-r border-solid border-r-gray-100 max-md:mt-8">
            <div className="flex shrink-0 h-14 bg-blue-600 rounded-xl" />
            <div className="flex z-10 flex-col self-center mt-0">
              <div className="flex flex-col self-start">
                <h2 className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
                  M A I N M E N U
                </h2>
                <div className="flex flex-col items-start mt-11 text-base font-medium tracking-tight leading-6 max-md:mt-10">
                  {mainMenuItems.map((item, index) => (
                    <div key={index} className="mt-8 first:mt-0">
                      <SidebarMenuItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mt-16 max-md:mt-10">
                <h2 className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
                  P R E F E R E N C E S
                </h2>
                <div className="flex flex-col items-start mt-7 text-base font-medium tracking-tight leading-6">
                  {preferenceItems.map((item, index) => (
                    <div key={index} className="mt-8 first:mt-0">
                      <SidebarMenuItem
                        item={item}
                        toggleImage={
                          item.hasToggle
                            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/12038560cf29b4da36bdfbdc445a33cf2c09045a05a63488ac92574a97386ff6?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                            : undefined
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="flex gap-3 items-center self-start ml-4 text-base font-medium tracking-tight leading-6 mt-[744px] text-slate-400 max-md:mt-10 max-md:ml-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f01d1fd6cc1dc0c9b7ae6af9e9dc3a8d5a6474bff4255c450d5b7c62f3c5137?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="self-stretch my-auto w-[68px]">Log Out</span>
            </button>
          </div>
        </nav>

        <main className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          {/* Rest of the main content */}
        </main>

        <aside className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <section className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
              <div className="flex gap-10 items-start text-xl font-bold tracking-tight text-gray-900 max-md:max-w-full">
                <h2 className="w-48">Top 5 Car Rental</h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b45a559e22eab88a7ef41214fd110ccca8bdb141a203ffc348c913235ab7d636?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                  alt=""
                  className="object-contain shrink-0 w-6 aspect-square"
                />
              </div>
              <div className="mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col justify-center items-center px-11 py-20 text-center rounded-md aspect-square max-md:px-5 max-md:mt-6">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b9ba1c69c975d8f978cfe9c002309164391c56ddf4b7ca16bfafb290cda8c68?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                        alt=""
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="flex relative flex-col items-start max-w-full w-[100px]">
                        <div className="text-2xl font-bold tracking-tighter text-gray-900">
                          72,030
                        </div>
                        <div className="mt-1 text-sm font-medium tracking-tight text-slate-400">
                          Rental Car
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full text-sm font-semibold tracking-tight max-md:mt-6">
                      {carStatistics.map((stat, index) => (
                        <div key={index} className="mt-6 first:mt-0">
                          <StatisticItem statistic={stat} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex overflow-hidden flex-col justify-center p-6 mt-8 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
              <div className="flex gap-10 items-start max-md:max-w-full">
                <h2 className="w-48 text-xl font-bold tracking-tight text-gray-900">
                  Recent Transaction
                </h2>
                <button className="text-xs font-medium leading-6 text-right text-blue-600 w-[68px]">
                  View All
                </button>
              </div>
              <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                {recentTransactions.map((transaction, index) => (
                  <React.Fragment key={index}>
                    <TransactionCard transaction={transaction} />
                    {index < recentTransactions.length - 1 && (
                      <div className="mt-4 max-w-full border border-solid border-slate-300 border-opacity-40 min-h-[1px] w-[476px]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
};
