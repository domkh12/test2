import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
     <ScrollToTop smooth color="#4C3DE3" className="flex justify-center items-center rounded-md" />
        <NavBarComponent />
        <HeroSection />
        <TemplatesSection />
        <FeatureSection />
        <OurTeamSection />
        <ContactSection />
        <FooterSection />
    </>
  );
}

export default App;
