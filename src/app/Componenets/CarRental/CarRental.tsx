import * as React from "react";
import { CarCard } from "./CarCard";
import { PickupDropoff } from "./PickupDropoff";

const popularCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4c3b6c59318191c4d16fdbba0cf0566c8b74e804539a66f63156a99c6d841ada?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    isFavorite: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3a186543802b2c235fee13f923ce4a5062235eabdd9730cb0330f411578ec2e9?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80,
    originalPrice: 100,
    isFavorite: false,
  },
];

const recommendedCars = [
  {
    name: "All New Rush",
    type: "SUV",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57f07081a13038d734c6cb4bdfd569f7e2138d4e53f565991ff54787a89ea193?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72,
    originalPrice: 80,
    isFavorite: false,
  },
];

export const CarRental: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col px-16 pt-8 pb-16 bg-neutral-100 max-md:px-5">
      <section className="max-md:max-w-full" aria-label="Hero section">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow w-full bg-blue-400 rounded-xl max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col items-start rounded-full border-solid border-[20px] border-white border-opacity-10 max-md:pr-5 max-md:max-w-full">
                <div className="flex flex-col pt-6 rounded-full border-solid border-[20px] border-white border-opacity-10 max-md:pr-5 max-md:max-w-full">
                  <div className="flex shrink-0 rounded-full border-solid border-[20px] border-white border-opacity-10 h-[336px] max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow w-full text-white bg-blue-600 rounded-xl max-md:mt-8 max-md:max-w-full">
              <div className="flex relative flex-col items-start px-6 pt-6 pb-28 w-full min-h-[360px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/67b0364fd9e9b2a039e1352b7e170feb702b444c51550547b4499099befd72f2?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
                  className="object-cover absolute inset-0 size-full"
                  alt="Car rental background"
                />
                <div className="flex relative flex-col mb-0 max-w-full w-[284px] max-md:mb-2.5">
                  <div className="flex flex-col w-full">
                    <h1 className="text-3xl font-semibold tracking-tighter leading-10">
                      Easy way to rent a car at a low price
                    </h1>
                    <p className="mt-4 text-base font-medium tracking-tight leading-6">
                      Providing cheap car rental services and safe and
                      comfortable facilities.
                    </p>
                  </div>
                  <button
                    className="gap-2 self-stretch px-5 mt-5 max-w-full text-base font-semibold tracking-tight text-center bg-blue-400 rounded min-h-[44px] w-[120px]"
                    aria-label="Browse rental cars"
                  >
                    Rental Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-wrap gap-5 justify-between mt-8 max-md:max-w-full"
        aria-label="Search section"
      >
        <PickupDropoff type="pickup" dotColor="blue-600" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b517bec46d03f26739d87d2bb26ae90cd348b71e87ce1031d8ba805cc37be40b?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546"
          className="object-contain shrink-0 my-auto rounded-none aspect-square w-[60px]"
          alt="Swap pickup and dropoff locations"
        />
        <PickupDropoff type="dropoff" dotColor="blue-400" />
      </section>

      <section
        className="flex flex-col mt-9 max-md:max-w-full"
        aria-label="Car listings"
      >
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start text-base font-semibold text-center max-md:max-w-full">
            <h2 className="gap-2 self-stretch px-5 rounded min-h-[44px] text-slate-400 w-[132px]">
              Popular Car
            </h2>
            <button
              className="gap-2 self-stretch px-5 text-blue-600 rounded min-h-[44px] w-[104px]"
              aria-label="View all cars"
            >
              View All
            </button>
          </div>
          <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
            {popularCars.map((car, index) => (
              <CarCard key={`popular-${index}`} {...car} />
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-8 max-md:max-w-full">
          <h2 className="gap-2 self-stretch px-5 max-w-full text-base font-semibold text-center rounded min-h-[44px] text-slate-400 w-[196px]">
            Recomendation Car
          </h2>
          <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
            {recommendedCars.map((car, index) => (
              <CarCard key={`recommended-${index}`} {...car} />
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-10 items-center self-end mt-16 max-md:mt-10 max-md:max-w-full">
        <button
          className="gap-2 self-stretch px-5 my-auto text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] w-[156px]"
          aria-label="Show more cars"
        >
          Show more car
        </button>
        <div className="self-stretch my-auto text-sm font-medium tracking-tight leading-5 text-right text-slate-400 w-[140px]">
          120 Car
        </div>
      </div>
    </main>
  );
};
