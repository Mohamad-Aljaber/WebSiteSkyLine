import Header from "../../components/Header";
import Slider from "./Slider";
import BlogSection from "./BlogSection";
import Footer from "../../components/Footer";

const BusinessGallery = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Business Gallery", path: "/business-gallery" },
    { name: "Contact", path: "/contact" },
  ];
  const quickLinks = [
    { name: "About Us", to: "/#aboutUs" },
    { name: "Business Gallery", to: "/business-gallery" },
    { name: "FAQs", to: "/#help" },
    { name: "Services", to: "/#services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <Header menuItems={menuItems} />
      <Slider />
      <BlogSection />
      <Footer quickLinks={quickLinks} />
    </div>
  );
};

export default BusinessGallery;
