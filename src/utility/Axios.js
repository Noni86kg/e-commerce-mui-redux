import axios from "axios";

export const getData = async (path) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products${path}`
    );
    const productsData = response.data;

    return { productsData, loading: false };
  } catch (error) {
    return { data: [{}], loading: true };
  }
};
