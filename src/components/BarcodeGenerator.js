import React, { useState } from "react";
import Barcode from "react-barcode";
import { TextField, Button, Box, Typography, List, ListItem } from "@mui/material";

const BarcodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    if (inputValue.trim() && price.trim()) {
      setProducts((prevProducts) => [
        ...prevProducts,
        { name: inputValue, price, code: `${inputValue} - ${price}` },
      ]);
      setInputValue("");
      setPrice("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        gap: 2,
      }}
    >
      <Typography variant="h4">Multiple Barcode Generator</Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", maxWidth: "400px" }}>
        <TextField
          label="Product Name or ID"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </Box>

      {products.length > 0 && (
        <Box
          sx={{
            marginTop: 3,
            width: "100%",
            maxWidth: "600px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: 2,
            overflowY: "auto",
            maxHeight: "400px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Generated Barcodes
          </Typography>
          <List>
            {products.map((product, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: 2,
                }}
              >
                <Barcode value={product.code} />
                <Typography>{product.code}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default BarcodeGenerator;
