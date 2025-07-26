import React from "react";
import {
  Box,
  GridLegacy as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Welcome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="begin"
      component="section"
      sx={{
        py: 8,
        px: 8,
        backgroundColor: "#F8F6F7",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={8}>
          <Typography
            variant="h3"
            fontWeight={700}
            mb={3}
            sx={{ fontSize: isMobile ? "2rem" : "2.5rem" }}
          >
            Добро пожаловать в{" "}
            <Box component="span" sx={{ color: "#2e2e2e" }}>
              IKShop
            </Box>
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={2}>
            Одежда, в которой ты чувствуешь себя уверенно.
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={2}>
            Мы — не просто бренд. Мы — отражение стиля современной девушки,
            которая ценит эстетику, комфорт и индивидуальность. В наших
            коллекциях ты найдёшь баланс между трендами и повседневной
            носибельностью.
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={2}>
            Каждый элемент продуман до мелочей — от качества ткани до посадки.
            IKShop помогает быть собой и выделяться. Мы рядом, чтобы
            вдохновлять.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
            alt="IKShop collection"
            sx={{
              width: "100%",
              maxWidth: 450,
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
