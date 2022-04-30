import { Typography, Stack, Button, Box } from "@mui/material";
import React from "react";
import Image from "mui-image";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ product }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <Stack
        sx={{ boxShadow: 3, borderRadius: 3, pl: 3 }}
        direction={{ sm: "column", md: "row" }}
      >
        <Box
          sx={{
            cursor: "pointer",
            justifyContent: "center",
            display: "flex",
          }}
          component={Link}
          to={`/product/${product.id}`}
          m={3}
        >
          <Image
            src={product.image}
            height="200px"
            width="200px"
            fit="contain"
            showLoading
          />
        </Box>
        <Stack
          direction="column"
          disabled
          color="primary"
          sx={{ cursor: "not-allowed", mt: 2, pr: 2 }}
        >
          <Typography fontWeight="bold" pl={3}>
            {product.title}
          </Typography>
          <Typography pl={3}>
            {readMore
              ? product.description
              : `${product.description.substring(0, 200)}...`}
            <Button
              onClick={() => setReadMore(!readMore)}
              variant="text"
              sx={{ cursor: "pointer" }}
            >
              {readMore ? "read less" : "read more"}
            </Button>
          </Typography>
          <Typography fontWeight="bold" pl={3}>
            ${product.price}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default ListItem;
