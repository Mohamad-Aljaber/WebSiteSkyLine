import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import { motion } from "motion/react";

const AboutSection: React.FC = () => {
  return (
    <motion.div
      className="about-area1 section-padding40"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      id="support"
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">
            {/* about-img */}
            <div className="about-img">
              <img
                style={{ width: "80%" }}
                src="assets/img/gallery/about1.png"
                alt="About"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="about-caption">
              {/* Section Title */}
              <div className="section-tittle section-tittle2 mb-30">
                <h2 style={{ fontSize: "35px" }}>
                  Building Systems for Enterprises
                </h2>
              </div>
              <p className="mb-40">
                We specialize in building advanced systems for companies aiming
                to enhance operations, improve management, and optimize
                resources. Our solutions also integrate artificial intelligence
                to boost decision-making and streamline processes.
              </p>
              <ul>
                <li>
                  <SettingsOutlinedIcon sx={{ fontSize: "25px", mr: 1 }} />

                  <p>
                    Develop advanced systems tailored for your business needs.
                  </p>
                </li>
                <li>
                  <StackedBarChartOutlinedIcon
                    sx={{ fontSize: "25px", mr: 1 }}
                  />

                  <p>
                    Improve management efficiency with intelligent solutions.
                  </p>
                </li>
                <li>
                  <MemoryOutlinedIcon sx={{ fontSize: "25px", mr: 1 }} />

                  <p>
                    Leverage AI to optimize resource allocation and
                    decision-making.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
