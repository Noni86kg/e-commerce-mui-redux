import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/productsActions";
import CustomBtn from "../button/CustomBtn";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState({ value: "", error: false });
  const [password, setPassword] = useState({ value: "", error: false });
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleLogIn = (username) => {
    dispatch(logIn(username));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "username") {
      setUsername({
        value: value,
        error: value === "",
      });
    } else {
      setPassword({
        value: value,
        error: value === "",
      });
    }
  };

  const handleSubmit = () => {
    let valid = true;
    if (username.value === "") {
      valid = false;
      setUsername({
        value: username.value,
        error: true,
      });
    }

    if (password.value.length < 4) {
      valid = false;
      setPassword({
        value: password.value,
        error: true,
      });
    }

    if (valid) {
      handleLogIn(username.value);
      handleClick();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        minHeight: "70vh",
      }}
      className={
        theme.palette.mode === "light"
          ? "bg-lightBlue__light"
          : "bg-lightBlue__dark"
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          maxWidth: "350px",
          mx: "auto",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, m: 4 }}>
          <Typography variant="h6" align="center" sx={{ color: "#272727" }}>
            Log In
          </Typography>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            name="username"
            onChange={handleChange}
            value={username.value}
            error={username.error}
            helperText={username.error ? "Cannot be empty" : ""}
            className={"username"}
          />
          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel
              htmlFor="standard-adornment-password"
              error={password.error}
              sx={{ color: "#272727" }}
            >
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{ color: "#272727" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              name="password"
              value={password.value}
              onChange={handleChange}
              error={password.error}
              helperText="Incorrect aaentry."
              sx={{ color: "#272727" }}
            />
            {password.error && (
              <FormHelperText id="filled-weight-helper-text" error>
                {password.value === ""
                  ? "Cannot be empty"
                  : "Incorect password"}
              </FormHelperText>
            )}
          </FormControl>
          <CustomBtn
            variant="outlined"
            blackStyle
            maxWidth
            handleClick={handleSubmit}
          >
            Log In
          </CustomBtn>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
