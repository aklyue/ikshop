import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StyleIcon from "@mui/icons-material/Style";

export const features = [
  {
    title: "Качество без компромиссов",
    description:
      "Ткани премиум-класса и внимание к деталям. Мы не экономим на важном.",
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
  {
    title: "Современный стиль",
    description:
      "Мы сочетаем актуальные тренды с лаконичным, уверенным дизайном.",
    icon: <StyleIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
  {
    title: "Быстрая доставка",
    description: "Заказ у тебя — быстрее, чем ты успеешь придумать новый лук.",
    icon: <LocalShippingIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
  {
    title: "Поддержка на связи",
    description:
      "Никаких чат-ботов. Только реальные люди, которые действительно помогают.",
    icon: <SupportAgentIcon sx={{ fontSize: 32, color: "#2e2e2e" }} />,
  },
];
