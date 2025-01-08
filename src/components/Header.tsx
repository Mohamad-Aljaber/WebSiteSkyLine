import React, { useState } from "react";
import { Link } from "react-router-dom";

// تعريف نوع العناصر في القائمة
interface MenuItem {
  name: string;
  path: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const handleScrollToSection = (e: React.MouseEvent, path: string) => {
    if (path.includes("#")) {
      e.preventDefault();
      const section = document.getElementById(path.replace("#", ""));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header">
          <div className="header-bottom header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="assets/img/logo/logo.png"
                        alt="Logo"
                        width={"100px"}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-end d-lg-none">
                  <button
                    className="mobile-menu-toggle"
                    style={{
                      background: "none",
                      color: "#fff",
                      border: "none",
                      fontSize: "30px",
                    }}
                    onClick={toggleMobileMenu}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>

                <div className="col-xl-10 col-lg-10 d-none d-lg-block">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav>
                        <ul id="navigation">
                          {menuItems.map((item, index) => (
                            <li key={index}>
                              {/* {item.path.includes("#") ? (
                                <a
                                  href={item.path}
                                  onClick={e =>
                                    handleScrollToSection(e, item.path)
                                  }
                                >
                                  {item.name}
                                </a>
                              ) : ( */}
                              <Link to={item.path}>{item.name}</Link>
                              {/* )} */}
                            </li>
                          ))}
                          {/* Buttons */}
                          {/* <li className="button-header margin-left">
                            <Link
                              to="/register"
                              className="btn"
                            >
                              Sign Up
                            </Link>
                          </li>
                          <li className="button-header">
                            <Link
                              to="/login"
                              className="btn3"
                            >
                              Sign In
                            </Link>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className="col-12 d-block d-lg-none ">
                  <div
                    className={`mobile-menu-dropdown ${
                      isMobileMenuOpen ? "open" : ""
                    }`}
                    style={{
                      background: "#4C1E51",
                      maxHeight: isMobileMenuOpen ? "300px" : "0",
                      transition: "max-height 0.5s ease-out",
                      overflow: "hidden",
                      marginTop: "10px",
                    }}
                  >
                    <ul style={{ padding: "15px 30px" }}>
                      {menuItems.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            padding: "15px 0",
                          }}
                        >
                          {item.path.includes("#") ? (
                            <a
                              href={item.path}
                              onClick={e => handleScrollToSection(e, item.path)}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link to={item.path}>{item.name}</Link>
                          )}
                        </li>
                      ))}
                      {/* <li>
                        <Link
                          to="/register"
                          className="btn"
                        >
                          Sign Up
                        </Link>
                        <Link
                          to="/login"
                          className="btn3"
                        >
                          Sign In
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
