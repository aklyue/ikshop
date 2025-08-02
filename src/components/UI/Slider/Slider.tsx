import React from "react";
import { reviews } from "../../../constants/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import useSlider from "../../../hooks/useSlider";

import { motion } from "framer-motion";

function Slider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { slidePrev, slideNext, initialize } = useSlider();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        mb: 4,
      }}
    >
      {!isMobile && (
        <IconButton
          onClick={slidePrev}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
            mx: 1,
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}

      <Box
        sx={{
          width: isMobile ? "100%" : "85%",
          position: "relative",
        }}
      >
        <Paper
          sx={{
            borderRadius: 0,
            overflow: "hidden",
            backgroundColor: "transparent",
            boxShadow: 0,
          }}
        >
          <Swiper
            onSwiper={initialize}
            spaceBetween={10}
            slidesPerView={isMobile ? 1 : 3}
            style={{
              padding: isMobile ? "0" : "5px",
              overflow: "visible",
            }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect={isMobile ? undefined : "coverflow"}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} style={{ height: "100%" }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  sx={{
                    border: isMobile ? undefined : "1px solid #ddd",
                    bgcolor: "#f8f6f7",
                    p: 2,
                    height: "180px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Box
                      width={64}
                      height={64}
                      borderRadius="50%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bgcolor="#2e2e2e"
                      color="#ccc"
                      fontSize={28}
                      fontWeight="bold"
                    >
                      {review.name.charAt(0).toUpperCase()}
                    </Box>
                    <Typography fontWeight={600}>{review.name}</Typography>
                  </Box>

                  <Stack direction="row" spacing={0.5} sx={{ my: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        fontSize="small"
                        sx={{ color: "#2e2e2e" }}
                      />
                    ))}
                  </Stack>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontSize: 16 }}>{review.text}</Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Paper>

        {isMobile && (
          <>
            <IconButton
              onClick={slidePrev}
              sx={{
                position: "absolute",
                top: "90%",
                right: "55%",
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                zIndex: 2,
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={slideNext}
              sx={{
                position: "absolute",
                top: "90%",
                left: "55%",
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                zIndex: 2,
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </>
        )}
      </Box>

      {!isMobile && (
        <IconButton
          onClick={slideNext}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
            mx: 1,
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default Slider;
