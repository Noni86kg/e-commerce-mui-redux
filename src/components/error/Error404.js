import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Error404 = () => {
  return (
    <Box
      sx={{
        minHeight: {
          xs: "calc(100vh - 128px - 160px)",
          md: "calc(100vh - 64px - 160px)",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="inherit"
        sx={{ fontSize: { xs: "32px", md: "56px" }, textAlign: "center" }}
      >
        Error. Page not found.
      </Typography>
    </Box>
  );
};

export default Error404;
