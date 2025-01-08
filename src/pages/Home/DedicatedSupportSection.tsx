import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GppGoodIcon from "@mui/icons-material/GppGood";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { motion } from "motion/react";

const DedicatedSupportSection: React.FC = () => {
  return (
    <motion.div
      className="about-area1 pb-bottom"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="about-caption about-caption3 mb-50">
              {/* Section Title */}
              <motion.div className="section-tittle section-tittle2 mb-30">
                <h2 style={{ fontSize: "35px" }}>
                  Building Systems for Enterprises
                </h2>
              </motion.div>
              <p className="mb-40">
                We specialize in building advanced systems for companies aiming
                to enhance operations, improve management, and optimize
                resources. Our solutions also integrate artificial intelligence
                to boost decision-making and streamline processes.
              </p>
              <ul className="mb-30">
                <li>
                  <GppGoodIcon sx={{ fontSize: "25px", mr: 1 }} />

                  <p>
                    Advanced security protocols to protect your data and
                    systems.
                  </p>
                </li>
                <li>
                  <ThumbUpAltIcon sx={{ fontSize: "25px", mr: 1 }} />
                  <p>
                    Building trust through reliable and transparent services.
                  </p>
                </li>
                <li>
                  <VisibilityOffIcon sx={{ fontSize: "25px", mr: 1 }} />
                  <p>
                    Ensuring privacy and confidentiality of client information.
                  </p>
                </li>
              </ul>
              <a
                href="#"
                className="btn"
              >
                <i className="fas fa-phone-alt"></i> +352 681 555 826
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">
            {/* about-img */}
            <div className="about-img">
              <img
                style={{ width: "80%" }}
                src="assets/img/gallery/about2.png"
                alt="Support"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DedicatedSupportSection;
