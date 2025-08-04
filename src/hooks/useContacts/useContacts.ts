import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SnackbarProps } from "@mui/material";

export const useContacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"success" | "error">();

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправлено:", formData);
    try {
      await emailjs.send(
        "service_hpzqfjs",
        "template_5rb7d94",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "zx1-Twtfp6ZEp_Iee"
      );
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
