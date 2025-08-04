import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { ReactComponent as Logo } from "../assets/Logo/logo.svg";

export const navButtons = [
  { id: "intro", icon: <Logo width={20} height={20} />, title: "Интро" },
  { id: "begin", icon: <HomeOutlinedIcon />, title: "Начало" },
  { id: "aboutus", icon: <InfoOutlinedIcon />, title: "О нас" },
  { id: "catalog", icon: <StorefrontOutlinedIcon />, title: "Каталог" },
  { id: "reviews", icon: <ReviewsOutlinedIcon />, title: "Отзывы" },
  { id: "contacts", icon: <ContactsOutlinedIcon />, title: "Контакты" },
  { id: "schedule", icon: <AccessTimeOutlinedIcon />, title: "График" },
  { id: "faq", icon: <HelpOutlineOutlinedIcon />, title: "Вопросы" },
];
