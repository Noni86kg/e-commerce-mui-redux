import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import useDebounce from "../../utility/Utility";
import CloseIcon from "@mui/icons-material/Close";

function valuetext(value) {
  return `$${value}`;
}

const Filter = ({ data, handleFilterData, isMob, handleClose }) => {
  const [value, setValue] = useState([0, 1000]);
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(10);
  const [fiveStar, setFiveStar] = useState(true);
  const [fourStar, setFourStar] = useState(true);
  const [threeStar, setThreeStar] = useState(true);
  const [twoStar, setTwoStar] = useState(true);
  const [oneStar, setOneStar] = useState(true);
  const debouncedValue = useDebounce(value, 300);

  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCheckBox = (event) => {
    const name = event.target.name;

    switch (name) {
      case "5":
        setFiveStar((prevValue) => !prevValue);
        break;
      case "4":
        setFourStar((prevValue) => !prevValue);
        break;
      case "3":
        setThreeStar((prevValue) => !prevValue);
        break;
      case "2":
        setTwoStar((prevValue) => !prevValue);
        break;
      case "1":
        setOneStar((prevValue) => !prevValue);
        break;
      default:
        break;
    }
  };

  const marks = [
    {
      value: 0,
      label: `$${minRange}`,
    },
    {
      value: 100,
      label: `$${maxRange}`,
    },
  ];

  const handlePriceRange = () => {
    const dataPrice = data.map((item) => {
      return item.price;
    });

    const minNumb = Math.min(...dataPrice);
    const maxNumb = Math.max(...dataPrice);

    return { minNumb, maxNumb };
  };

  const checkRate = (rate) => {
    const value = Math.floor(rate);

    switch (value) {
      case 5:
        return fiveStar;
      case 4:
        return fourStar;
        break;
      case 3:
        return threeStar;
        break;
      case 2:
        return twoStar;
        break;
      case 1:
      case 0:
        return oneStar;
        break;
      default:
        return false;
        break;
    }
  };

  const handleAllChanges = () => {
    const newMinRange = value[0];
    const newMaxRange = value[1];
    const dataFiltered = data.filter(
      (item) =>
        item.price >= newMinRange &&
        item.price <= newMaxRange &&
        checkRate(item.rating.rate)
    );

    return dataFiltered;
  };

  useEffect(() => {
    const { minNumb, maxNumb } = handlePriceRange();
    setMinRange(minNumb);
    setMaxRange(maxNumb);
    setValue([minNumb, maxNumb]);
  }, []);

  useEffect(() => {
    const filteredData = handleAllChanges();
    handleFilterData(filteredData);
  }, [debouncedValue, oneStar, twoStar, threeStar, fourStar, fiveStar]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: isMob ? 2 : 5,
        pr: 4,
        pl: isMob ? 4 : 0,
        width: "15%",
        minWidth: "250px",
        my: isMob ? 0 : 4,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
        }}
      >
        <CloseIcon
          onClick={handleClose}
          sx={{ color: isLight ? "#1976D2" : "#272727", cursor: "pointer" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            color: isLight ? "#1976D2" : "#272727",
          }}
          variant="p"
          component="p"
        >
          Price range
        </Typography>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
          sx={{
            color: isLight ? "#1976D2" : "#272727",
          }}
          className={isLight ? "rangeSlider__light" : "rangeSlider__dark"}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            color: isLight ? "#1976D2" : "#272727",
          }}
          variant="p"
          component="p"
        >
          Rate
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={fiveStar} name={"5"} />}
            label="5 stars"
            onChange={handleChangeCheckBox}
            className={isLight ? "rangeSlider__light" : "rangeSlider__dark"}
          />
          <FormControlLabel
            control={<Checkbox checked={fourStar} name={"4"} />}
            label="4 stars"
            onChange={handleChangeCheckBox}
            className={isLight ? "rangeSlider__light" : "rangeSlider__dark"}
          />
          <FormControlLabel
            control={<Checkbox checked={threeStar} name={"3"} />}
            className={isLight ? "rangeSlider__light" : "rangeSlider__dark"}
            label="3 stars"
            onChange={handleChangeCheckBox}
          />
          <FormControlLabel
            control={<Checkbox checked={twoStar} name={"2"} />}
            className={isLight ? "rangeSlider__light" : "rangeSlider__dark"}
            label="2 stars"
            onChange={handleChangeCheckBox}
          />
          <FormControlLabel
            control={<Checkbox checked={oneStar} name={"1"} />}
            className={isLight ? "rangeSlider__light" : "rangeSlider__dark"}
            label="1 stars"
            onChange={handleChangeCheckBox}
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Filter;
