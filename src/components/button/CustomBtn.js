import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
  } = props;

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
