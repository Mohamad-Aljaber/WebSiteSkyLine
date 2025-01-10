import { Outlet } from "react-router-dom";
import BackToTop from "./components/GoToWhatsApp";
import "./i18n";  

const App = () => {


  return (
    <>
      <BackToTop />
      <Outlet />
    </>
  );
};

export default App;
