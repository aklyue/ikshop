import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";

import IntroBackground from "../../assets/Intro/IntroBackground.jpg"

const Intro = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        height: "550px",
        width: "100%",
        backgroundImage: `url('${IntroBackground}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(6px)",
          px: 4,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
            IKShop
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              sx={{ color: "#fff", textTransform: "none" }}
              onClick={() => scrollToSection("begin")}
            >
              Начало
            </Button>
            <Button
              color="inherit"
              sx={{ color: "#fff", textTransform: "none" }}
              onClick={() => scrollToSection("aboutus")}
            >
              О нас
            </Button>
            <Button
              color="inherit"
              sx={{ color: "#fff", textTransform: "none" }}
              onClick={() => scrollToSection("catalog")}
            >
              Каталог
            </Button>
            <Button
              color="inherit"
              sx={{ color: "#fff", textTransform: "none" }}
              onClick={() => scrollToSection("contacts")}
            >
              Контакты
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight="bold"
          gutterBottom
        >
          IKShop — стиль начинается здесь
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"}>
          Твоя мода. Твои правила. Мы предлагаем одежду, которая выделяет.
        </Typography>
      </Box>
    </Box>
  );
};

export default Intro;
