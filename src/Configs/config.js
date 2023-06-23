import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com"
});

export const GetProducts = async () => {
  try {
    const res = await API.get("/products");
    return res;
  } catch (error) {
    return error;
  }
};
