import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const navVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
};

const menuButtonVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
};

const SideNavigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobile) setMenuOpen(false);
  };

  const navButtons = [
    { id: "begin", icon: <HomeOutlinedIcon />, title: "Начало" },
    { id: "aboutus", icon: <InfoOutlinedIcon />, title: "О нас" },
    { id: "catalog", icon: <StorefrontOutlinedIcon />, title: "Каталог" },
    { id: "reviews", icon: <ReviewsOutlinedIcon />, title: "Отзывы" },
    { id: "contacts", icon: <ContactsOutlinedIcon />, title: "Контакты" },
    { id: "schedule", icon: <AccessTimeOutlinedIcon />, title: "График" },
    { id: "faq", icon: <HelpOutlineOutlinedIcon />, title: "Вопросы" },
  ];

  return (
    <>
      <AnimatePresence>
        {isMobile && visible && (
          <Box
            component={motion.div}
            key="menu-button"
            variants={menuButtonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              zIndex: 1000,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                backdropFilter: "blur(4px)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
              }}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
          </Box>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {((menuOpen && visible) || (!isMobile && visible)) && (
          <Box
            component={motion.div}
            key="side-nav"
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
            {navButtons.map(({ id, icon, title }) => (
              <Tooltip title={title} placement="left" key={id}>
                <IconButton sx={{ color: "#fff" }} onClick={() => scrollTo(id)}>
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNavigation;
