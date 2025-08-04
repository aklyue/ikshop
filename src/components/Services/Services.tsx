import React from "react";
import {
  Box,
  GridLegacy as Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { services } from "../../constants/services";

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{ py: 10, px: isMobile ? 2 : 8, backgroundColor: "#F8F6F7" }}
    >
      <Stack spacing={2} mb={6}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ fontSize: isMobile ? "1.8rem" : "2.2rem" }}
        >
          Сервис IKShop
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Мы не просто продаём одежду. Мы создаём опыт: от первого просмотра
          коллекции — до финальной примерки. Каждая деталь важна: упаковка,
          доставка, помощь стилиста, удобство возврата.
        </Typography>
      </Stack>

      <Grid container spacing={4} mb={10}>
        {services.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, x: isMobile ? 16 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Box
              sx={{
                border: "1px solid #ddd",
                p: 3,
                height: isMobile ? undefined : "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 2,
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "#2e2e2e",
                  backgroundColor: "#ffffff41",
                },
              }}
            >
              {item.icon}
              <Stack spacing={1}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          backgroundColor: "#F8F6F7",
          border: "1px solid #ddd",
          p: 4,
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography variant="h6" fontWeight={600} mb={1}>
          Хочешь больше от IKShop?
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Подпишись на наш клуб и получи доступ к новым дропам, приватным
          скидкам и персональным рекомендациям.
        </Typography>
        <Button
          href="https://www.instagram.com/ik_shop6"
          target="_blank"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "#2e2e2e",
            color: "#fff",
            px: 4,
            py: 1.5,
            textTransform: "none",
            "&:hover": { bgcolor: "#444" },
          }}
        >
          Присоединиться к IKClub
        </Button>
      </Box>
    </Box>
  );
};

export default Services;
