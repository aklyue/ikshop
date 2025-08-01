import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq } from "../../constants/faq";
import { motion } from "framer-motion";

function Faq() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box id="faq" sx={{ py: 8, px: isMobile ? 2 : 8 }}>
      <Typography variant="h4" fontWeight={700} mb={6}>
        Частые вопросы
      </Typography>
      {faq.map((item, index) => (
        <Accordion
          component={motion.div}
          initial={{ opacity: 0, y: 20, x: -50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          sx={{
            boxShadow: "none",
            bgcolor: "#F8F6F7",
            borderBottom: "1px solid #ddd",
            "&:before": {
              display: "none",
            },
          }}
          key={index}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default Faq;
