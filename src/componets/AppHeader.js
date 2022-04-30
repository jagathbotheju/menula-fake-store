import { useState } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "material-ui-image";
import drawerImage from "../assets/store.png";
import { Link } from "react-router-dom";

const AppHeader = ({ navlinks, setFilter }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [openMenu, setOpenMenu] = useState(false);

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        onClick={() => setOpenDrawer(false)}
      >
        <Box>
          <Image src={drawerImage} />
          <List disablePadding>
            {navlinks.map((link) => (
              <ListItemButton
                component={Link}
                to="/"
                key={link.id}
                divider
                //component={Link}
                //to={link.route}
                onClick={() => setFilter(link.category)}
                //selected={tabIndex === link.route}
                sx={{
                  opacity: 0.7,
                  "&.Mui-selected": {
                    backgroundColor: "secondary.main",
                    opacity: 1,
                  },
                  ":hover": {
                    backgroundColor: "secondary.main",
                    opacity: 1,
                  },
                }}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText>{link.title.toUpperCase()}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );

  const buttonStyle = {
    bgcolor: blue[500],
    color: "secondary.main",
    fontWeight: "bold",
  };

  return (
    <AppBar position="static" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box alignItems="center" sx={{ display: "flex" }}>
          <MenuIcon
            cursor="pointer"
            onClick={() => setOpenDrawer(true)}
            sx={{
              fontSize: 35,
              display: { xs: "block", sm: "block", md: "none" },
            }}
          />
          {drawer}
          <Typography
            noWrap
            color="secondary.main"
            fontFamily={["Pacifico", "cursive"].join(",")}
            padding={3}
            fontSize={[30, 30, 50]}
            //variant="h3"
          >
            My Fake Store
          </Typography>
        </Box>

        <Box
          sx={{ gap: "20px", display: { xs: "none", sm: "none", md: "flex" } }}
        >
          {navlinks.map((link, index) => (
            <Button
              component={Link}
              to="/"
              onClick={() => setFilter(link.category)}
              key={index}
              sx={buttonStyle}
              variant="contained"
            >
              {link.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
