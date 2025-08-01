import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import IntroBackground from "../../assets/Intro/IntroBackground.jpg";
import MenuIcon from "@mui/icons-material/Menu";

import { menuItems } from "../../constants/menu";

const Intro = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
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
          {!isMobile ? (
            <Stack direction="row" spacing={2}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  sx={{ color: "#fff", textTransform: "none" }}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          ) : (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List sx={{ width: 250 }}>
                  {menuItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                      <ListItemButton onClick={() => handleMenuClick(item.id)}>
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          )}
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
