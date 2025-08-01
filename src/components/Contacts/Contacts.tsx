import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { contactItems } from "../../constants/contacts";

const Contacts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправлено:", formData);
    // здесь можешь подключить emailjs или API
  };

  return (
    <Box
      id="contacts"
      component="section"
      sx={{
        py: 8,
        px: isMobile ? 2 : 8,
        backgroundColor: "#F8F6F7",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 4,
      }}
    >
      <Box flex={1}>
        <Typography variant="h4" fontWeight={700} mb={6}>
          Контакты
        </Typography>

        {contactItems.map((item, index) => (
          <Stack direction="row" spacing={2} key={index} alignItems="center">
            {React.cloneElement(item.icon, {
              sx: { fontSize: 36, color: "#2e2e2e" },
            })}
            <Box>
              <Typography variant="body1" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.content}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Box>
      <Stack spacing={4} flex={1}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          flex={1}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h4" fontWeight={600}>
            Свяжитесь с нами
          </Typography>
          <TextField
            label="Ваше имя"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange("name")}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange("email")}
          />
          <TextField
            label="Сообщение"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
            value={formData.message}
            onChange={handleChange("message")}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              bgcolor: "#2e2e2e",
              color: "#fff",
              px: 4,
              py: 1.5,
              textTransform: "none",
              "&:hover": { bgcolor: "#444" },
            }}
          >
            Отправить
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contacts;
