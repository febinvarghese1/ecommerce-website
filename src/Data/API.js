import axios from "axios";

export const baseUrl = "https://fakestoreapi.com/products/";


export const fetchApi = async (url) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

