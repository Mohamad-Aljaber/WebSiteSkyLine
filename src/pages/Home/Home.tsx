import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "./AboutSection";
import AskQuestionsSection from "./AskQuestionsSection";
import DedicatedSupportSection from "./DedicatedSupportSection";

import FeaturesSection from "./FeaturesSection";
import SliderArea from "./SliderArea";
import TestimonialSection from "./TestimonialSection";
const Home = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Business Gallery", path: "/business-gallery" },
    { name: "Help", path: "#help" },
    { name: "Contact", path: "/contact" },
  ];
  const quickLinks = [
    { name: "About Us", to: "#aboutUs" },
    { name: "Business Gallery", to: "/business-gallery" },
    { name: "FAQs", to: "#help" },
    { name: "Services", to: "#services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <Header menuItems={menuItems} />
      <SliderArea />
      {/* <DomainSearch /> */}
      <FeaturesSection />
      <AboutSection />
      <DedicatedSupportSection />
      <AskQuestionsSection />
      <TestimonialSection />
      <Footer quickLinks={quickLinks} />
    </div>
  );
};

export default Home;
