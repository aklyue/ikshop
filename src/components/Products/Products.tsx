import React from "react";
import { Box, Typography } from "@mui/material";
import { products } from "../../constants/products";

const Products = () => {
  const rows = [
    products.slice(0, 3),
    products.slice(3, 5),
    products.slice(5, 8),
  ];

  return (
    <Box sx={{ py: 8, px: 8, backgroundColor: "#F8F6F7" }} id="catalog">
      <Typography variant="h4" fontWeight={700} mb={6}>
        Каталог IKShop
      </Typography>

      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
            justifyContent: "center",
            px: rowIndex === 1 ? "calc(16.66% + 8px)" : 0,
          }}
        >
          {row.map((product, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                height: 300,
                backgroundImage: `url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  px: 2,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {product.title}
                </Typography>
                <Typography variant="subtitle2" mb={1}>
                  {product.price}
                </Typography>
                <Typography variant="body2">{product.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Products;
