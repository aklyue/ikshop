import React from "react";
import {
  Box,
  GridLegacy as Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";

import { motion } from "framer-motion";

import { features } from "../../constants/features";

const Info = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{ py: 8, px: isMobile ? 2 : 8, backgroundColor: "#F8F6F7" }}
      id="aboutus"
    >
      <Typography
        variant="h4"
        fontWeight={700}
        mb={6}
        sx={{
          textAlign: "left",
          fontSize: isMobile ? "1.8rem" : "2.2rem",
        }}
      >
        Преимущества IKShop
      </Typography>

      <Grid container spacing={4}>
        {features.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Box
              sx={{
                border: "1px solid #ddd",
                p: 3,
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 2,
                transition: "all 0.2s",
                "&:hover": {
                  borderColor: "#2e2e2e",
                  transform: "scale(1.02)",
                  backgroundColor: "#ffffff41",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: "#bbb", mr: 1 }}
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </Typography>
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
    </Box>
  );
};

export default Info;
