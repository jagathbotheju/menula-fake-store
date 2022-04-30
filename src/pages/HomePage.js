import React from "react";
import List from "../componets/List";
import { Backdrop, CircularProgress } from "@mui/material";

const HomePage = ({ allProducts, isLoading }) => {
  return (
    <>
      <List allProducts={allProducts} />
      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
    </>
  );
};

export default HomePage;
