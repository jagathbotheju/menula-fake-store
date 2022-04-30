import React from "react";
import { Box, Stack } from "@mui/material";
import ListItem from "./ListItem";

const List = ({ allProducts }) => {
  return (
    <>
      <Box justifyContent="center" sx={{ display: "flex" }}>
        <Stack m={2} gap={2} width="60%">
          {allProducts.map((product) => {
            return <ListItem key={product.id} product={product} />;
          })}
        </Stack>
      </Box>
    </>
  );
};

export default List;
