import HeroSection from "./heroSection/HeroSection";
import MainNavbar from "./navbar/MainNavbar";
import Services from "./services/Services";

const Main = () => {
  return (
    <div>
      <MainNavbar />
      <HeroSection />
      <Services/>
    </div>
  );
};

export default Main;
