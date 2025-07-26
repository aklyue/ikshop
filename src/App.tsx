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

function App() {
  return (
    <Box bgcolor={"#F8F6F7"}>
      <Intro />
      <SideNavigation />
      <Welcome />
      <Info />
      <Services />
      <Products />
      <Contacts />
      <Footer />
    </Box>
  );
}

export default App;
