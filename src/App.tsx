import { Outlet } from "react-router-dom";
import BackToTop from "./components/GoToWhatsApp";
// import Preloader from "./components/Preloader";

const App = () => {
  return (
    <>
      <BackToTop />
      <Outlet />
    </>
  );
};

export default App;
