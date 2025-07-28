import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

import { Link } from "@mui/material";

export const contactItems = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 28, color: "#2e2e2e" }} />,
    title: "Адрес",
    content: "г. Караганда, ул. Космонавтов, д. 1Б",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28, color: "#2e2e2e" }} />,
    title: "Телефон",
    content: (
      <Link href="tel:+77052314693" underline="hover" color="inherit">
        +7 (705) 231-46-93
      </Link>
    ),
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 28, color: "#2e2e2e" }} />,
    title: "Instagram",
    content: (
      <Link
        href="https://www.instagram.com/ik_shop6"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        color="inherit"
      >
        @ik_shop6
      </Link>
    ),
  },
];
