import React from "react";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { motion } from "motion/react";

const secondaryTheme = "#F067FF";
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "AI-Powered Systems Development",
    description:
      "Developing advanced AI-powered systems to meet your company's needs and enhance efficiency.",
    icon: (
      <MemoryOutlinedIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />
    ),
  },
  {
    title: "Automated Systems for Enterprises",
    description:
      "Providing automated systems tailored for organizations and enterprises, ensuring seamless operations.",
    icon: (
      <SettingsOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
  {
    title: "Cloud and Technical Services",
    description:
      "Enhancing your existing systems with cloud services and advanced technical solutions.",
    icon: (
      <CloudOutlinedIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />
    ),
  },
  {
    title: "Security Testing Team",
    description:
      "Our dedicated security team ensures the safety of your organization’s systems by conducting thorough security tests.",
    icon: <SecurityIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />,
  },
  {
    title: "Technology Consulting",
    description:
      "Expert consulting services from our specialized engineers to drive innovation in your organization.",
    icon: (
      <WorkOutlineOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
  {
    title: "Marketing & Media Services",
    description:
      "Providing marketing and media solutions to enhance your company’s visibility and outreach.",
    icon: (
      <CampaignOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
];

const FeaturesSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };
  return (
    <section
      className="team-area section-bg1"
      id="services"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-tittle text-center mb-105">
              <h2>Our Services at Skyline</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-4 col-sm-6"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="single-cat">
                <div className="cat-icon">{feature.icon}</div>
                <div className="cat-cap">
                  <h5>
                    <a href="#">{feature.title}</a>
                  </h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
