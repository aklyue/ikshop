import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
  GridLegacy as Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { menuItems } from "../../../constants/menu";

import { ReactComponent as Logo } from "../../../assets/Logo/logo.svg";
import useScroll from "../../../hooks/useScroll";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { handleMenuClick } = useScroll();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2e2e2e",
        color: "#F8F6F7",
        px: isMobile ? 2 : 8,
        py: 6,
        mt: 8,
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        spacing={isMobile ? 3 : 0}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box>
              <Logo width={30} height={30} color="white" />
            </Box>
            <Typography variant="h6" fontWeight={600}>
              IKShop
            </Typography>
          </Box>
          <Typography variant="body2" color="rgba(255,255,255,0.7)" mt={1}>
            Современный онлайн-магазин одежды. Твоя мода — твои правила.
          </Typography>
        </Box>

        <Box>
          {isMobile ? (
            <Grid container spacing={1}>
              {menuItems.map((item) => (
                <Grid item xs={6} key={item.label}>
                  <Link
                    onClick={() => handleMenuClick(item.id)}
                    underline="hover"
                    color="inherit"
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                  >
                    {item.label}
                  </Link>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Stack direction="row" spacing={3} mb={1}>
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  onClick={() => handleMenuClick(item.id)}
                  underline="hover"
                  color="inherit"
                  sx={{ cursor: "pointer" }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          )}

          <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/ik_shop6"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/ik_shop6"
              target="_blank"
            >
              <TelegramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://wa.me/77052314693"
              target="_blank"
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      <Typography
        variant="body2"
        color="rgba(255,255,255,0.5)"
        mt={5}
        textAlign={isMobile ? "left" : "center"}
      >
        © {new Date().getFullYear()} IKShop. Все права защищены.
      </Typography>
    </Box>
  );
};

export default Footer;
