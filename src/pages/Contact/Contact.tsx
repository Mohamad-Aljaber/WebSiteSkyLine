import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactForm from "./ContactForm";
import Slider from "./Slider";

const Contact = () => {
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
      <ContactForm />
      <Footer quickLinks={quickLinks} />
    </div>
  );
};

export default Contact;
