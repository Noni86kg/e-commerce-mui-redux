import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

function SkeletonChildrenDemo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        borderRadius: "5px",
        border: "1px solid var(--mui-palette-Skeleton-bg)",
      }}
    >
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "57%", width: "80%" }} />
      </Skeleton>

      <Skeleton width="100%">
        <Typography>.</Typography>
      </Skeleton>

      <Skeleton width="100%">
        <Typography>.</Typography>
      </Skeleton>

      <Skeleton width="100%">
        <Typography>.</Typography>
      </Skeleton>
    </Box>
  );
}

export default function SkeletonChildren({ numOfChildren, isGrid }) {
  let array = [];
  for (let i = 0; i < numOfChildren; i++) {
    array = [...array, ""];
  }

  return (
    <Grid
      container
      spacing={4}
      sx={{ p: 2 }}
      style={{
        display: isGrid ? "grid" : "flex",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
      }}
    >
      {array.map((item, index) => {
        return (
          <Grid item xs key={index}>
            <SkeletonChildrenDemo />
          </Grid>
        );
      })}
    </Grid>
  );
}
