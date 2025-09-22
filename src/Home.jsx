import "./Home.css";
import Classes from "./pages/Classes";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Program from "./pages/Program";
import Schedule from "./pages/Schedule";
import Today from "./pages/Today";
import Trainers from "./pages/Trainers";
import MyLocation from "./pages/MyLocation";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />

      <Hero />

      <Program />

      <Today />

      <Classes />

      <Schedule />

      <Trainers />

      <MyLocation />

      <Footer />
    </div>
  );
}
