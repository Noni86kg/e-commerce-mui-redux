import { useEffect, useState } from "react";

export const changeData = (name, data) => {
  let filteredData = [];
  let newData = [];
  switch (name) {
    case "Price: Low to High":
      filteredData = data.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
      });

      newData = [...filteredData];
      return newData;
      break;
    case "Price: High to Low":
      filteredData = data.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
      });

      newData = [...filteredData];
      return newData;
      break;
    case "Name: A to Z":
      filteredData = data.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
      });

      newData = [...filteredData];
      return newData;
      break;
    case "Name: Z to A":
      filteredData = data.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
      });

      newData = [...filteredData];
      return newData;
      break;
    default:
  }
};

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? false
    : true;
};

const validatePhone = (email) => {
  return String(email).match(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im
  )
    ? false
    : true;
};

export const handleRequired = (name, value) => {
  if (name === "Phone") {
    return validatePhone(value);
  } else if (name === "Mail") {
    return validateEmail(value);
  } else {
    return value === "";
  }
};
