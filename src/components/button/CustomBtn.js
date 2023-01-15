import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const CustomBtn = (props) => {
  const {
    children,
    disabled,
    size,
    variant,
    handleClick,
    maxWidth,
    sx,
    blackStyle,
    blueStyle,
    color,
  } = props;

  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const buttonProps = () => {
    let allProps = { ...sx };

    if (maxWidth) {
      allProps = { ...allProps, flex: 1 };
    }
    if (blackStyle) {
      allProps = {
        ...allProps,
        border: "1px solid #272727",
        color: "#272727",
        "&:hover": {
          border: "1px solid #272727",
          backgroundColor: "rgba(39, 39, 39, .25)",
        },
      };
    } else if (blueStyle) {
      allProps = {
        ...allProps,
        color: isLight ? "#1976d2" : "white",
        backgroundColor: isLight ? "transparent" : "#1976d2",
        "&:hover": {
          background: isLight
            ? "rgba(var(--mui-palette-primary-mainChannel)"
            : "hsl(220, 79%, 46%)",
        },
      };
    }

    return allProps;
  };

  const btn = () => {
    return (
      <Button
        disabled={disabled}
        size={size}
        variant={variant}
        onClick={handleClick}
        sx={buttonProps()}
        color={color}
      >
        {children}
      </Button>
    );
  };

  return maxWidth ? (
    <Box sx={{ width: "100%", display: "flex" }}>{btn()}</Box>
  ) : (
    btn()
  );
};

export default CustomBtn;
