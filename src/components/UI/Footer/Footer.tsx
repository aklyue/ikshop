import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2e2e2e",
        color: "#F8F6F7",
        px: isMobile ? 4 : 8,
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
          <Typography variant="h6" fontWeight={600}>
            IKShop
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.7)" mt={1}>
            Современный онлайн-магазин одежды. Твоя мода — твои правила.
          </Typography>
        </Box>

        <Box>
          <Stack direction="row" spacing={3} mb={1}>
            <Link href="#begin" underline="hover" color="inherit">
              Начало
            </Link>
            <Link href="#aboutus" underline="hover" color="inherit">
              О нас
            </Link>
            <Link href="#catalog" underline="hover" color="inherit">
              Каталог
            </Link>
            <Link href="#contacts" underline="hover" color="inherit">
              Контакты
            </Link>
          </Stack>

          <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <TelegramIcon />
            </IconButton>
            <IconButton color="inherit">
              <FacebookIcon />
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
