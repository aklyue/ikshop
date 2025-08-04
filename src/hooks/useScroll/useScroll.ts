import { useState } from "react";

export const useScroll = () => {
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
  return {
    open,
    setOpen,
    handleMenuClick,
  };
};
