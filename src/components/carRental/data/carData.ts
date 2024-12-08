import { CarType, CarCapacity, ReviewType } from "../types";

export const carTypes: CarType[] = [
  {
    id: "1",
    name: "Sport",
    count: 10,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "2",
    name: "SUV",
    count: 12,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "3",
    name: "MPV",
    count: 16,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "4",
    name: "Sedan",
    count: 20,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "5",
    name: "Coupe",
    count: 14,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "6",
    name: "Hatchback",
    count: 14,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
];

export const carCapacities: CarCapacity[] = [
  {
    id: "1",
    capacity: "2 Person",
    count: 10,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "2",
    capacity: "4 Person",
    count: 14,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "3",
    capacity: "6 Person",
    count: 12,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92bd81f0f88e1728ef29b3626fc80b768ad8c90179c4d5e9b9a9e872b35f43db?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
  {
    id: "4",
    capacity: "8 or More",
    count: 16,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7f0601032a7728dc0ae7ccd1cd438ff27f0027c1885b88b3504dd25be46b56f?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
  },
];

export const reviews: ReviewType[] = [
  {
    id: "1",
    name: "Alex Stanton",
    position: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dbf5c25d646e34d50e468d9f8ad4993fe404333766e3b3f8a2bf166721959c2d?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    name: "Skylar Dias",
    position: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/455d3771e9fe8d6903f34a0ec980704f6068afe1684051c45d4d4c61256a9907?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
];

export const recentCars: CarCardProps[] = [
  {
    name: "Koenigsegg",
    type: "Sport",
    fuel: "90L",
    capacity: "2 People",
    transmission: "Manual",
    price: 99.0,
    image: "",
    isFavorite: false,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    fuel: "80L",
    capacity: "2 People",
    transmission: "Manual",
    price: 80.0,
    originalPrice: 100.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a63bcce64e94da2677313f0e72065ec2ff4f4ee6e0f3695fe0b80e71a2c03d66?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    isFavorite: true,
  },
  {
    name: "Rolls-Royce",
    type: "Sport",
    fuel: "70L",
    capacity: "4 People",
    transmission: "Manual",
    price: 96.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/42f6083fcf1ee12011927e138c1d5125c422755e28f4ae519647ecf5140099bd?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    isFavorite: true,
  },
];

export const recommendedCars: CarCardProps[] = [
  {
    name: "All New Rush",
    type: "SUV",
    fuel: "70L",
    capacity: "6 People",
    transmission: "Manual",
    price: 72.0,
    originalPrice: 80.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5ce85cf48604aa2526151b707a948b7e95887c6a9a567a90ba35b5c35f08a66d?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    isFavorite: true,
  },
  {
    name: "CR - V",
    type: "SUV",
    fuel: "80L",
    capacity: "6 People",
    transmission: "Manual",
    price: 80.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/330940eece2b4658f87f4fa52769048170f0781592a28982933379606d79a9eb?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    isFavorite: false,
  },
  {
    name: "All New Terios",
    type: "SUV",
    fuel: "90L",
    capacity: "6 People",
    transmission: "Manual",
    price: 74.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39cf5d2a6168013cd7331b7c6af409fd79cc30cbb9a645c44ea7f4597f680d9d?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    isFavorite: true,
  },
];
