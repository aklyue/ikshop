import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Slider from "../UI/Slider";
import React from "react";

function Reviews() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box id="reviews" sx={{ py: 8, px: isMobile ? 2 : 8 }}>
      <Typography variant="h4" fontWeight={700} mb={6}>
        Отзывы
      </Typography>
      <Slider />
    </Box>
  );
}

export default Reviews;
