import HomeIcon from "@mui/icons-material/Home";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DiamondIcon from "@mui/icons-material/Diamond";
import Accessibility from "@mui/icons-material/Accessibility";
import Woman from "@mui/icons-material/Woman";

import { Box } from "@mui/material";
import "./App.css";
import AppHeader from "./componets/AppHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  const navlinks = [
    {
      id: 0,
      title: "all",
      icon: <HomeIcon />,
      category: "products",
    },
    {
      id: 1,
      title: "electronics",
      icon: <ElectricBoltIcon />,
      category: "products/category/electronics",
    },
    {
      id: 2,
      title: "jewelry",
      icon: <DiamondIcon />,
      category: "products/category/jewelery",
    },
    {
      id: 3,
      title: "men's clothing",
      icon: <Accessibility />,
      category: "products/category/men's clothing",
    },
    {
      id: 4,
      title: "women's clothing",
      icon: <Woman />,
      category: "products/category/women's clothing",
    },
  ];

  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("products");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `https://fakestoreapi.com/${filter}`;
      const response = await axios.get(url);

      if (response.data) {
        setIsLoading(false);
        setAllProducts(response.data);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <>
      <Box width="100vw">
        <AppHeader navlinks={navlinks} setFilter={setFilter} />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage allProducts={allProducts} isLoading={isLoading} />
            }
          />

          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
