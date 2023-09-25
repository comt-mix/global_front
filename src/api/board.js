import { Axios } from "./index";

export const getNewsList = () => {
  return Axios.get("/articles");
};
