import * as React from "react";
import { CarCard } from "./CarCards";
import { SectionHeader } from "./SectionHeader";

const PopularCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car1.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    liked: true
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/images/car2.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80,
    originalPrice: 100,
    liked: false
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image: "/images/car3.png",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 96,
    liked: true
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/images/car4.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80,
    originalPrice: 100,
    liked: false
  }
];

const recommendedCars = [
  {
    name: "All New Rush",
    type: "SUV",
    image: "/images/car5.png",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "6 People",
    price: 72,
    originalPrice: 80,
    liked: false
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car6.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: true
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/images/car7.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: 74,
    liked: false
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car8.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: true
  },
  {
    name: "MG ZX Exclusice",
    type: "Hatchback",
    image: "/images/car9.png",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 76,
    originalPrice: 80,
    liked: true
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/images/car10.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: false
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    image: "/images/car9.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "4 People",
    price: 74,
    liked: true
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/images/car10.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: false
  }
];

export const PopularCar: React.FC = () => {
  return (
    <main className="flex flex-col" role="main">
      <section className="flex flex-col max-md:max-w-full" aria-label="Popular Cars">
        <SectionHeader title="Popular Car" showViewAll={true} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-start mt-5 max-md:max-w-full">
          {PopularCars.map((car, index) => (
            <CarCard key={`popular-${index}`} {...car} />
          ))}
        </div>
      </section>
      
      <section className="flex flex-col mt-8 max-md:max-w-full" aria-label="Recommended Cars">
        <SectionHeader title="Recomendation Car" />
        <div className="flex flex-col mt-5 max-md:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-start max-md:max-w-full">
            {recommendedCars.slice(0, 4).map((car, index) => (
              <CarCard key={`recommended-1-${index}`} {...car} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-start mt-8 max-md:max-w-full">
            {recommendedCars.slice(4).map((car, index) => (
              <CarCard key={`recommended-2-${index}`} {...car} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

