import { Footer } from "./Componenets/Footer/footer/Footer";
import Navbar from "./Componenets/Navbarr/Navbar";
import Ads from "./Componenets/Ads/Ads";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { RentalForm } from "@/components/rentalForm/RentalForm";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Ads />
      <DashboardLayout />
      <RentalForm />
      <Footer />
    
    </div>
  );
}
