import React, { useEffect, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

const navVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
};

const SideNavigation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <Box
          component={motion.div}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderBottomLeftRadius: "12px",
            padding: "10px",
            backdropFilter: "blur(8px)",
          }}
        >
          <Tooltip title="Начало" placement="left">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => scrollTo("begin")}
            >
              <HomeOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="О нас" placement="left">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => scrollTo("aboutus")}
            >
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Каталог" placement="left">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => scrollTo("catalog")}
            >
              <StorefrontOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Контакты" placement="left">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => scrollTo("contacts")}
            >
              <ContactsOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default SideNavigation;
