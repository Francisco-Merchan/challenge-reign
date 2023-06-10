import axios from "axios";

export const dataAxios = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/search_by_date",
});
