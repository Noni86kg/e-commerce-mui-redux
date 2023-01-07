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
