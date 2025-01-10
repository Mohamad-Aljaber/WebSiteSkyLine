import {
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import quotes from "/assets/img/icon/quotes-sign.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import engIssa from "/assets/img/engissa.jpg";
import engsuhaeb from "/assets/img/engsuhaeb.jpg";
import engabd from "/assets/img/engabd.jpg";
import engAbdulrahman from "/assets/img/engAbdulrahman.jpg";
import engahmad from "/assets/img/engahmad.jpg";
import engKhaled from "/assets/img/engKhaled.jpg";
import { useTranslation } from "react-i18next";

const PersonalCards = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      text: t("personalCards.testimonials.0.text"),
      name: t("personalCards.testimonials.0.name"),
      role: t("personalCards.testimonials.0.role"),
      avatar: engIssa,
    },
    {
      id: 2,
      text: t("personalCards.testimonials.1.text"),
      name: t("personalCards.testimonials.1.name"),
      role: t("personalCards.testimonials.1.role"),
      avatar: engsuhaeb,
    },
    {
      id: 3,
      text: t("personalCards.testimonials.2.text"),
      name: t("personalCards.testimonials.2.name"),
      role: t("personalCards.testimonials.2.role"),
      avatar: engabd,
    },
    {
      id: 4,
      text: t("personalCards.testimonials.3.text"),
      name: t("personalCards.testimonials.3.name"),
      role: t("personalCards.testimonials.3.role"),
      avatar: engAbdulrahman,
    },
    {
      id: 5,
      text: t("personalCards.testimonials.4.text"),
      name: t("personalCards.testimonials.4.name"),
      role: t("personalCards.testimonials.4.role"),
      avatar: engahmad,
    },
    {
      id: 6,
      text: t("personalCards.testimonials.5.text"),
      name: t("personalCards.testimonials.5.name"),
      role: t("personalCards.testimonials.5.role"),
      avatar: engKhaled,
    },
  ];

  const primaryTheme = "#2D0A31";
  const secondaryTheme = "#4c1e51";

  return (
    <Box
      sx={{
        pl: { xs: 3, md: 0 },
        backgroundColor: primaryTheme,
        py: { xs: 5, sm: 7, md: 10 },
        pt: { xs: 10, sm: 12, md: 15 },
        color: "#fff",
      }}
      id="aboutUs"
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          className="swiper-button-prev"
          sx={{
            p: 1.5,
            position: "absolute",
            top: "50%",
            left: { md: "3%" },
            zIndex: 3,
            color: "#fff",
            transform: "translateY(-50%)",
            backgroundColor: secondaryTheme,
            "&:hover": { backgroundColor: "#444" },
            display: { xs: "none", md: "block" },
          }}
        >
          <ArrowBack sx={{ fontSize: "30px" }} />
        </IconButton>

        <IconButton
          className="swiper-button-next"
          sx={{
            position: "absolute",
            p: 1.5,
            top: "50%",
            right: { md: "3%" },
            zIndex: 3,
            color: "#fff",
            transform: "translateY(-50%)",
            backgroundColor: secondaryTheme,
            "&:hover": { backgroundColor: "#444" },
            display: { xs: "none", md: "block" },
          }}
        >
          <ArrowForward sx={{ fontSize: "30px" }} />
        </IconButton>
        <Box
          component="img"
          src={quotes}
          alt="quotes"
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "8%", sm: "14%", md: "22%" },
            zIndex: 3,
            transform: "translate(-50%, -150%)",
            width: { xs: "50px", sm: "70px", md: "90px" },
          }}
        />

        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          loop
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Box
                sx={{
                  backgroundColor: secondaryTheme,
                  width: { xs: "85%", sm: "80%" },
                  py: { xs: 5, sm: 8, md: 10 },
                  px: { xs: 2, sm: 8, md: 8 },
                  borderRadius: 5,
                  m: "auto",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    mb: { xs: 3, sx: 5 },
                    textAlign: "center",
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#fff",
                  }}
                >
                  {testimonial.text}
                </Typography>
                <Stack
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 3,
                  }}
                >
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.avatar}
                    sx={{
                      width: { xs: 50, sm: 60, md: 70 },
                      height: { xs: 50, sm: 60, md: 70 },
                    }}
                  />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: { xs: "16px", sm: "20px" },
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: { xs: "12px", sm: "16px" },
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default PersonalCards;
