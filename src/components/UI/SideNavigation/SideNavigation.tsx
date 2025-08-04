import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { navButtons } from "../../../constants/nav";
import { navVariants } from "../../../constants/variants";
import { menuButtonVariants } from "../../../constants/variants";
import useScroll from "../../../hooks/useScroll";
import MenuButton from "../MenuButton";

const SideNavigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [visible, setVisible] = useState(false);
  const { open, setOpen, handleMenuClick } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <MenuButton open={open} toggle={() => setOpen((prev) => !prev)} />
          </Box>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {((open && visible) || (!isMobile && visible)) && (
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
                <IconButton
                  sx={{ color: "#fff" }}
                  onClick={() => handleMenuClick(id)}
                >
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
