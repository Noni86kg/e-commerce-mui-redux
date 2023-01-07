import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();
  const iconsColor =
    theme.palette.mode === "light"
      ? "white"
      : "var(--mui-palette-primary-main)";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        pb: 2,
        gap: 4,
        backgroundColor: theme.palette.mode === "light" ? "#1976D2" : "#272727",
      }}
    >
      <Box
        sx={{
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          align="center"
          variant="p"
          component="p"
          sx={{ color: "var(--mui-palette-text-primary)" }}
        >
          Follow as on:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Link
            href="https://www.facebook.com/"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: iconsColor }} />
          </Link>
          <Link
            href="https://www.youtube.com/"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{ color: iconsColor }} />
          </Link>
          <Link
            href="https://www.instagram.com/"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: iconsColor }} />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: iconsColor }} />
          </Link>
        </Box>
      </Box>
      <Typography
        variant="p"
        component="p"
        sx={{ color: "var(--mui-palette-text-primary)" }}
      >
        Copyright © 2023 by Noni
      </Typography>
    </Box>
  );
};

export default Footer;
