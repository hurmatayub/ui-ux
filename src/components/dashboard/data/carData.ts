import { TransactionItem, CarStatistic } from "../types";

export const recentTransactions: TransactionItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/db098139d77554681b4c90871c1b22412a8a3a44eafae98428c4eae100b1a960?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    name: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    price: "$80.00",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9ff921a0da71ce95c5d675d675cb15f7a4d548d37df0eabecaae74fae997a238?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    name: "Koegnigsegg",
    type: "Sport Car",
    date: "19 July",
    price: "$99.00",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7adf5e5025df5362aff638d44bf00cfa6b60ca57efd4b3fb1e34728004ec4878?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    name: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    price: "$96.00",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d0b0e394b2a31cf602da0ba139ad6225d9681665cc2f48a999f3375ca5a4847c?placeholderIfAbsent=true&apiKey=bb9eccc908104adb825db93903e12546",
    name: "CR - V",
    type: "SUV",
    date: "17 July",
    price: "$80.00",
  },
];

export const carStatistics: CarStatistic[] = [
  { type: "Sport Car", count: 17439, color: "bg-sky-950" },
  { type: "SUV", count: 9478, color: "bg-sky-700" },
  { type: "Coupe", count: 18197, color: "bg-blue-500" },
  { type: "Hatchback", count: 12510, color: "bg-blue-400" },
  { type: "MPV", count: 14406, color: "bg-blue-300" },
];
