import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { days } from "../../../constants/days";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Map() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="schedule"
      sx={{
        py: 8,
        px: isMobile ? 2 : 8,
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={6}>
        Местоположение и график
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          mt: 2,
          //   bgcolor: "#ffffff41",
          border: "1px solid #ddd",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: 1,
            minHeight: 300,
            height: isMobile ? 300 : "auto",
          }}
        >
          <MapContainer
            center={[49.788461, 73.101718]}
            zoom={13}
            scrollWheelZoom={false}
            style={{
              height: isMobile ? 300 : "100%",
              width: "100%",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.788461, 73.101718]}>
              <Popup>г. Караганда, ул. Космонавтов, д. 1Б</Popup>
            </Marker>
          </MapContainer>
        </Box>
        <Box
          sx={{
            flex: 1,
            minWidth: 280,
            p: 3,
            height: "100%",
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={2}>
            График работы
          </Typography>
          {days.map((day, index) => (
            <Typography
              key={day}
              variant="body1"
              sx={{
                mb: 1,
                color: index === 6 ? "error.main" : "text.primary",
                fontWeight: index === 6 ? 600 : "normal",
              }}
            >
              {day}: {index === 6 ? "Выходной" : "09:00 – 18:00"}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Map;
