import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Image from "next/image";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import StyledButton from "./StyledButton";
import { Link } from "react-scroll";

const pages = ["Sobre o teste", "SEO", "Performance", "Blog"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <Grid
      container
      md={12}
      xs={12}
      sx={{
        pt: 2,
        pb: 2,
        // pl: { xs: 2},
        // pr: { xs: 0},
        paddingX: { xs: 2 },
        justifyContent: { md: "center", sm: "space-between" },
        position: "fixed",
        zIndex: 2,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Grid
        item
        md={8}
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid>
          <Image
            src="/images/Logo.png"
            width="150"
            height="43"
            alt="Logo Olivas Digital"
          />
        </Grid>
        <Grid
          sx={{ display: { md: "flex", xs: "none" }, alignItems: "center" }}
        >
          {pages.map((page) => (
            <Link
              to={`${page.replace(/\s+/g, "-").toLowerCase()}`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              key={page}
              sx={{ textDecoration: "none" }}
            >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "var(--light-main-color)",
                  display: "block",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "var(--white-color)",
                    color: "var(--secondary-color)",
                  },
                }}
              >
                {page}
              </Button>
            </Link>
          ))}
          <IconButton
            size="large"
            aria-label="search"
            sx={{
              color: "var(--secondary-color)",
              "&:hover": {
                backgroundColor: "var(--white-color)",
                color: "var(--dark-secondary-color)",
              },
            }}
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </IconButton>
          {searchVisible && (
            <Grid pr={2} sx={{ alignContent: "center" }}>
              <input type="text" placeholder="Digite sua busca" />
            </Grid>
          )}
          <Link
            to="contato"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            sx={{ textDecoration: "none" }}
          >
            <StyledButton>Contato</StyledButton>
          </Link>
        </Grid>
        <Box container sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <Link
                to={`${page.replace(/\s+/g, "-").toLowerCase()}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                key={page}
                sx={{ textDecoration: "none" }}
              >
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              </Link>
            ))}
            <Link
              to="contato"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              key="contato"
              sx={{ textDecoration: "none" }}
            >
              <MenuItem key="contato" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contato</Typography>
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Header;
