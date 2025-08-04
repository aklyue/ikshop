import React from "react";
import Intro from "./components/Intro";
import SideNavigation from "./components/UI/SideNavigation";
import Welcome from "./components/Welcome";
import Info from "./components/Info";
import Services from "./components/Services";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
import Footer from "./components/UI/Footer";
import { Box, CircularProgress } from "@mui/material";
import Map from "./components/UI/Map";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import useLoader from "./hooks/useLoader";

function App() {
  const loading = useLoader();

  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8F6F7",
          zIndex: 9999,
        }}
      >
        <CircularProgress sx={{ color: "#2E2E2E" }} />
      </Box>
    );
  }

  return (
    <Box>
      <Intro />
      <Box
        sx={{
          bgcolor: "#F8F6F7",
          maxWidth: 2000,
          mx: "auto",
        }}
      >
        <SideNavigation />
        <Welcome />
        <Info />
        <Services />
        <Products />
        <Reviews />
        <Contacts />
        <Map />
        <Faq />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
