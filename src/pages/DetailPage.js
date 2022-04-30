/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Stack,
  Typography,
  CircularProgress,
  Backdrop,
  Button,
  Rating,
} from "@mui/material";
import Image from "mui-image";

const DetalPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await axios.get(url);

      if (response.data) {
        setProduct(response.data);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      {product.id === undefined ? (
        <Backdrop open={product.id === undefined}>
          <CircularProgress />
        </Backdrop>
      ) : (
        <Stack
          sx={{
            bgcolor: "pink",
            width: "60%",
            mx: "auto",
            mt: 10,
            py: 5,
            px: 10,
            borderRadius: 6,
            boxShadow: 3,
            alignItems: "center",
          }}
        >
          {/* title */}
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ fontWeight: "bold" }}
          >
            {product.title}
          </Typography>

          {/* image */}
          <Image
            src={product.image}
            height="200px"
            width="200px"
            fit="contain"
          />

          {/* description */}
          <Typography variant="h6" textAlign="center">
            {readMore
              ? product.description
              : `${product.description.substring(0, 200)}...`}
            <Button onClick={() => setReadMore(!readMore)} variant="text">
              {readMore ? "read less" : "read more"}
            </Button>
          </Typography>

          <Typography variant="h5" textAlign="center">
            {product.category}
          </Typography>

          <Typography variant="h5">${product.price}</Typography>
          <Rating
            size="large"
            precision={0.5}
            value={
              product.rating.rate === "undefined" ? 0 : product.rating.rate
            }
            readOnly={true}
          />
        </Stack>
      )}
    </>
  );
};

export default DetalPage;
