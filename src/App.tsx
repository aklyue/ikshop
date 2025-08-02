import React from "react";
import Intro from "./components/Intro";
import SideNavigation from "./components/UI/SideNavigation";
import Welcome from "./components/Welcome";
import Info from "./components/Info";
import Services from "./components/Services";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
import Footer from "./components/UI/Footer";
import { Box } from "@mui/material";
import Map from "./components/UI/Map";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";

function App() {
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
