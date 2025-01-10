import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import BackToTop from "./components/GoToWhatsApp";
import i18n from "i18next"; 
import "./i18n";  

const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Current language: ", i18n.language);
  }, [i18n.language]); 

  return (
    <>
      <BackToTop />
      <Outlet />
      <h2>{t("welcome")}</h2> 
      <button
        onClick={() => {
          i18n.changeLanguage("ar"); 
        }}
      >
        Arabic
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en"); 
        }}
      >
        English
      </button>
    </>
  );
};

export default App;
