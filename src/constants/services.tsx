import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import StyleIcon from "@mui/icons-material/Style";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const services = [
  {
    title: "Подбор образа",
    description: "Мы поможем собрать комплект на каждый день или событие.",
    icon: <StyleIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
  {
    title: "Быстрая доставка",
    description: "Доставим заказ в течение 1–3 дней по всей стране.",
    icon: <LocalShippingIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
  {
    title: "Лёгкий возврат",
    description: "14 дней на возврат или обмен без объяснений.",
    icon: <AutorenewIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
  {
    title: "Ограниченные коллекции",
    description: "Дропы в ограниченном тираже — успей до sold out.",
    icon: <StarBorderIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
];
