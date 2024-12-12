import React from 'react';

const carData = [
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

const Category1 = () => {
  return (
    <div className="absolute top-[200px] left-[392px] w-[1015px] h-auto flex flex-wrap gap-8">
     
      {carData.map((car, index) => (
        <div
          key={index}
          className="w-[317px] h-[388px] rounded-tl-[10px] bg-white shadow-md flex flex-col items-center justify-between p-4"
        >
          <img src={car.image} alt={car.name} className="w-full h-[200px] object-cover rounded" />
          <div className="w-full text-center">
            <p className="text-[16px] font-bold text-[#1A202C]">{car.name}</p>
            <p className="text-[14px] text-[#90A3BF]">{car.type}</p>
          </div>
          <div className="w-full flex justify-between text-[12px] text-[#90A3BF]">
            <p>Fuel: {car.fuelCapacity}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Capacity: {car.capacity}</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-[20px] font-bold text-[#1A202C]">
              ${car.price}
            </p>
            {car.originalPrice && (
              <p className="text-[14px] text-[#FF0000] line-through">${car.originalPrice}</p>
            )}
          </div>
        </div>
      ))}

  
      <div className="absolute top-[1492px] left-[822px] w-[586px] flex items-center justify-between gap-[290px]">
        <button className="w-[156px] h-[44px] rounded-tl-[4px] bg-[#3563E9] text-white font-semibold">
          Previous
        </button>
        <button className="w-[156px] h-[44px] rounded-tl-[4px] bg-[#3563E9] text-white font-semibold">
          Next
        </button>
      </div>

      <div className="absolute top-[1400px] left-[822px] w-[140px] h-[24px] flex items-center">
        <p className="text-[14px] font-medium text-[#90A3BF] text-right">
          120 Car
        </p>
      </div>
    </div>
  );
};

export default Category1;
