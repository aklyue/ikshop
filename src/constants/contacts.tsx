import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import { Link } from "@mui/material";

export const contactItems = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 28, color: "#2e2e2e" }} />,
    title: "Адрес",
    content: "г. Москва, Тверская ул., 12",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28, color: "#2e2e2e" }} />,
    title: "Телефон",
    content: (
      <Link href="tel:+78001234567" underline="hover" color="inherit">
        +7 (800) 123-45-67
      </Link>
    ),
  },
  {
    icon: <EmailIcon sx={{ fontSize: 28, color: "#2e2e2e" }} />,
    title: "Email",
    content: (
      <Link href="mailto:info@ikshop.ru" underline="hover" color="inherit">
        info@ikshop.ru
      </Link>
    ),
  },
];
