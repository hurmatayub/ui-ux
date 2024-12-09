// import { RentalForm } from "@/components/rentalForm/RentalForm";
// import { CarRental } from "./Componenets/CarRental/CarRental";
import { Footer } from "./Componenets/Footer/footer/Footer";
import Navbar from "./Componenets/Navbarr/Navbar";
// import { CarRentalPage } from "@/components/carRental/CarRentalPage";
// import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

import Ads from "./Componenets/Ads/Ads";
import Header from "./Componenets/Header/Header";


;



export default function Home() {
  return (
    <div>
      <Navbar />
      <Ads />
      <Header />
      {/* <CarRental />
     <CarRentalPage />
      <RentalForm />
      <DashboardLayout /> */}
      <Footer />
    
    </div>
  );
}
