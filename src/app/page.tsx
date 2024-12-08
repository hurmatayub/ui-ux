
import { CarRental } from "@/components/carRental/CarRental";
import { Footer } from "./Componenets/Footer/footer/Footer";


import Navbar from "./Componenets/Navbarr/Navbar";



export default function Home() {
  return (
    <div>
      <Navbar />
      <CarRental />
     
      <Footer />
    
    </div>
  );
}
