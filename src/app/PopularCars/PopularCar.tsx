import * as React from "react";
import { CarCard } from "./CarCards";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";

const PopularCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car1.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: 99,
    liked: true,
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
    liked: false,
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image: "/images/car3.png",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: 96,
    liked: true,
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
    liked: false,
  },
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
    liked: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car6.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/images/car7.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "6 People",
    price: 74,
    liked: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car8.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: true,
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
    liked: true,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/images/car10.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: false,
  },
  {
    name: "MG ZX Excite",
    type: "Hatchback",
    image: "/images/car9.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: "4 People",
    price: 74,
    liked: true,
  },
  {
    name: "New MG ZS",
    type: "SUV",
    image: "/images/car10.png",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: "6 People",
    price: 80,
    liked: false,
  },
];
export const PopularCar: React.FC = () => {
  return (
    <>
      <main
        className="flex flex-col bg-[#F6F7F9] w-full h-auto gap-[32px] overflow-x-hidden"
        role="main"
      >
        <section
          className="flex flex-col max-w-[1200px] ml-[270px]"
          aria-label="Popular Cars"
        >
          <SectionHeader title="Popular Car" showViewAll={true} />
          <div className="overflow-x-auto sm:overflow-hidden mt-5">
            <div className="flex sm:grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-40">
              {PopularCars.map((car, index) => (
                <CarCard key={`popular-${index}`} {...car} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="flex flex-col mt-8 max-w-[1200px] ml-[270px]"
          aria-label="Recommended Cars"
        >
          <SectionHeader title="Recommendation Car" />
          <div className="flex flex-col mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-40 ">
              {recommendedCars.slice(0, 4).map((car, index) => (
                <CarCard key={`recommended-1-${index}`} {...car} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-40 mt-8">
              {recommendedCars.slice(4).map((car, index) => (
                <CarCard key={`recommended-2-${index}`} {...car} />
              ))}
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between max-w-[1200px] mx-auto mt-[20px] px-4">
          <div className="w-[156px] h-[44px] px-[20px] bg-[#3563E9] rounded-[4px] flex items-center justify-center gap-[8px]">
            <Link href="/Catogory">
              <p className="font-['Plus Jakarta Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-white text-center">
                Show more car
              </p>
            </Link>
          </div>
          <div className="text-[#90A3BF]">
            <p className="font-['Plus Jakarta Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em]">
              120 Car
            </p>
          </div>
        </div>
      </main>
    </>
  );
}










// import Image from "next/image";
// import { client } from "../lib/sanity";
// import simplifiedProduct from "./interface";

// async function getData() {
//   const query = `*[_type == 'product'] [0...4] | order(_createdAt desc) {
//     _id,
//     name,
//     "likedImageUrl": liked.asset->url,
//     type,
//     price,
//     originalPrice,
//     feulCapacity,
//     transmissionn,
//     peopleCapacity,
//     "feulImageUrl": feul.asset->url,
//     "transmissionImageUrl": transmission.asset->url,
//     "capacityImageUrl": capacity.asset->url,
//     buttonText,
//     "slug": slug.current,
//     "categoryName": category->name,
//     "firstImageUrl": images[0].asset->url
//   }`;

//   const data = await client.fetch(query);
//   return data;
// }

// export default async function Popular() {
//   const data: simplifiedProduct[] = await getData();

//   return (
//     <div className="flex flex-col bg-[#F6F7F9] lg:top-[-274px]  w-full h-auto gap-8 overflow-x-hidden">
//       {/* Heading Section */}
//       <div className="flex justify-between items-center px-6">
//         <h2 className="text-[16px] font-semibold text-[#90A3BF]">
//           Popular Cars
//         </h2>
//         <a href="#" className="text-[16px] font-semibold text-[#3563E9]">
//           View All
//         </a>
//       </div>

//       {/* Product Cards */}
//       <div className="flex flex-wrap justify-center gap-8">
//         {data.map((product) => (
//           <div
//             key={product._id}
//             className="w-[304px] h-[388px] bg-white rounded-lg shadow-sm p-6"
//           >
//             {/* Product Header */}
//             <div className="flex justify-between items-center">
//               <div>
//                 <h3 className="text-[20px] font-bold text-[#1A202C]">
//                   {product.name}
//                 </h3>
//                 <p className="text-[14px] font-bold text-[#90A3BF]">
//                   {product.type}
//                 </p>
//               </div>
//               <Image
//                 src={product.likedImageUrl}
//                 alt="Liked Icon"
//                 className="w-6 h-6"
//                 width={24}
//                 height={24}
//               />
//             </div>

//             {/* Product Image */}
//             <Image
//               src={product.firstImageUrl}
//               alt={product.name}
//               className="mt-14 w-full object-contain "
//               width={232}
//               height={72}
//             />

//             {/* Features */}
//             <div className="flex gap-4 mt-16 text-[#90A3BF] text-sm">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={product.feulImageUrl}
//                   alt="Fuel"
//                   width={24}
//                   height={24}
//                 />
//                 <span>{product.feulCapacity}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={product.transmissionImageUrl}
//                   alt="Transmission"
//                   width={24}
//                   height={24}
//                 />
//                 <span>{product.transmissionn}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={product.capacityImageUrl}
//                   alt="Capacity"
//                   width={24}
//                   height={24}
//                 />
//                 <span>{product.peopleCapacity}</span>
//               </div>
//             </div>

//             {/* Price and Button */}
//             <div className="flex justify-between items-center mt-5">
//               <div>
//                 <p className="text-[20px] font-bold">
//                   ${product.price}.00/{" "}
//                   <span className="text-[14px] text-[#90A3BF]">day</span>
//                 </p>
//                 <p className="text-[14px] text-[#90A3BF] line-through">
//                   ${product.originalPrice}.00
//                 </p>
//               </div>
//               <button className="w-[116px] h-[44px] bg-[#3563E9] text-white font-semibold rounded-[10px]">
//                 {product.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { ReactNode, useEffect, useState } from "react";
// import { fetchCarsData } from "../api/car"; // Import the API function

// interface Car {
//   // feulImage: any;
//   carType: ReactNode;
//   carName: ReactNode;
//   image: string | undefined;
//   id: string;
//   name: string;
//   type: string;
//   price: number;
//   oldPrice: string | number;
//   fuelCapacity: string;
//   transmission: string;
//   peopleCapacity: string;
//   images: string[];
//   feulImage: string;
//   transmissionImage: string;
//   capacity: string;
// }

// const PopularCar = () => {
//   const [cars, setCars] = useState<Car[]>([]);

//   useEffect(() => {
//     const getCarsData = async () => {
//       const data = await fetchCarsData();
//       // Map the data to the required format
//       const processedData = data.map((car: Car) => ({
//         id: car.id,
//         carName: car.carName,
//         carType: car.carType,
//         price: car.price,
//         oldPrice: car.oldPrice || 'N/A',
//         fuelCapacity: car.fuelCapacity,
//         transmission: car.transmission,
//         capacity: car.peopleCapacity,
//         image: car.images[0], 
//         feulImage: car.feulImage,
//         transmissionImage: car.transmissionImage,
//         // capacity: car.capacity,
//       }));
//       setCars(processedData);
//     };
//     getCarsData();
//   }, []);

//   return (
//     <main className="flex flex-col bg-[#F6F7F9] w-full h-auto gap-[32px] overflow-x-hidden" role="main">
//       <section className="flex flex-col max-w-[1200px] ml-[270px]" aria-label="Popular Cars">
//         <h2>Popular Cars</h2>
//         <div className="overflow-x-auto sm:overflow-hidden mt-5">
//           <div className="flex sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-40">
//             {cars.map((car) => (
//               <div key={car.id}>
//                 <img src={car.image} alt={car.name} />
//                 <h3>{car.carName}</h3>
//                 <p>{car.carType}</p>
//                 <p>{car.price}</p>
//                 <p>{car.fuelCapacity}</p>
//                 <p>{car.transmission}</p>
//                 <p>{car.peopleCapacity}</p>
//                 {car.oldPrice && <p>Old Price: {car.oldPrice}</p>}
//                 <div className="flex gap-4">
//                   <img src={car.feulImage} alt="Fuel Icon" />
//                   <img src={car.transmissionImage} alt="Transmission Icon" />
//                   <img src={car.capacity} alt="Capacity Icon" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PopularCar;

