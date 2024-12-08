
import React from "react";

// Data
const carTypes = [
  { id: 1, name: "Sport", count: 10, icon: "sport-icon.png", isActive: true },
  { id: 2, name: "SUV", count: 12, icon: "suv-icon.png" },
  { id: 3, name: "MPV", count: 16, icon: "mpv-icon.png" },
  { id: 4, name: "Sedan", count: 20, icon: "sedan-icon.png" },
  { id: 5, name: "Coupe", count: 14, icon: "coupe-icon.png" },
];

const carCapacities = [
  { id: 1, name: "2 Seats", count: 8, icon: "two-seats-icon.png" },
  { id: 2, name: "4 Seats", count: 15, icon: "four-seats-icon.png" },
  { id: 3, name: "6 Seats", count: 10, icon: "six-seats-icon.png" },
];

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    category: "Sedan",
    fuelCapacity: "50L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 40,
    originalPrice: 45,
    image: "car-image.png",
  },
  {
    id: 2,
    name: "Honda Civic",
    category: "Sedan",
    fuelCapacity: "55L",
    transmission: "Manual",
    capacity: "5 People",
    price: 50,
    image: "car-image.png",
  },
];

// Types
interface FilterType {
  id: number;
  name: string;
  count: number;
  icon: string;
  isActive?: boolean;
}

interface CarType {
  id: number;
  name: string;
  category: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  originalPrice?: number;
  image: string;
}

interface LocationDateType {
  locations: string;
  date: string;
  time: string;
}

// Components
const FilterSection: React.FC<{ title: string; items: FilterType[] }> = ({
  title,
  items,
}) => (
  <div className="flex flex-col font-semibold text-slate-400">
    <div className="text-xs tracking-tight">{title}</div>
    <div className="flex flex-col items-start mt-7 text-xl tracking-tight text-justify">
      {items.map((item) => (
        <div key={item.id} className="flex gap-2 items-start mt-8 first:mt-0">
          <img
            loading="lazy"
            src={item.icon}
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div
            className={`${
              item.isActive ? "text-gray-900" : "text-slate-500"
            }`}
          >
            {item.name} <span className="text-slate-400">({item.count})</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CarCard: React.FC<{ car: CarType }> = ({ car }) => (
  <div className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[317px] max-md:px-5">
    <div className="flex gap-5 justify-between font-bold">
      <div className="flex flex-col">
        <h3 className="text-xl tracking-tight text-gray-900">{car.name}</h3>
        <div className="mt-1 text-sm tracking-tight text-slate-400">
          {car.category}
        </div>
      </div>
      <button
        aria-label={`Add ${car.name} to favorites`}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          loading="lazy"
          src={car.image}
          alt=""
          className="object-contain shrink-0 self-start w-6 aspect-square"
        />
      </button>
    </div>
    <div className="flex shrink-0 mt-14 h-[108px] max-md:mt-10" />
    <div className="flex gap-4 items-start mt-7 text-sm font-medium tracking-tight leading-5 text-slate-400">
      <div className="flex gap-2 items-start">
        <img src="fuel-icon.png" alt="" className="w-6" />
        <div>{car.fuelCapacity}</div>
      </div>
      <div className="flex gap-2 items-start">
        <img src="transmission-icon.png" alt="" className="w-6" />
        <div>{car.transmission}</div>
      </div>
      <div className="flex gap-2 items-start">
        <img src="capacity-icon.png" alt="" className="w-6" />
        <div>{car.capacity}</div>
      </div>
    </div>
    <div className="flex gap-5 justify-between mt-9 w-full">
      <div className="text-xl font-bold text-slate-400">
        ${car.price.toFixed(2)}/ <span className="text-sm">day</span>
        {car.originalPrice && (
          <div className="mt-1 text-sm">${car.originalPrice.toFixed(2)}</div>
        )}
      </div>
      <button
        className="px-5 text-base font-semibold tracking-tight text-white bg-blue-600 rounded hover:bg-blue-700"
        aria-label={`Rent ${car.name}`}
      >
        Rent Now
      </button>
    </div>
  </div>
);

const LocationDatePicker: React.FC<{
  title: string;
  type: "pickup" | "dropoff";
  data: LocationDateType;
}> = ({ title, type, data }) => {
  const bgColor = type === "pickup" ? "bg-blue-600" : "bg-blue-400";

  return (
    <div className="flex flex-col p-6 bg-white rounded-xl">
      <div className="flex gap-2 items-center">
        <div className={`w-4 h-4 ${bgColor} rounded-full`} />
        <div className="text-base font-semibold">{title}</div>
      </div>
      <div className="flex mt-4">
        {/* Additional UI */}
      </div>
    </div>
  );
};

const CarRental: React.FC = () => (
  <main className="pr-8 bg-neutral-100">
    <div className="flex gap-5">
      <aside className="w-[26%]">
        <FilterSection title="T Y P E" items={carTypes} />
        <FilterSection title="C A P A C I T Y" items={carCapacities} />
      </aside>
      <section className="w-[74%]">
        <LocationDatePicker title="Pick - Up" type="pickup" data={{}} />
        <LocationDatePicker title="Drop - Off" type="dropoff" data={{}} />
        <div className="flex flex-wrap gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default CarRental;
