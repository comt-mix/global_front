import { Axios } from "./index";

export const serviceInquiry = (...postData) => {
  return Axios.post("/inquiry/services", ...postData);
};
export const appInquiry = (...postData) => {
  return Axios.post("/inquiry/apps", ...postData);
};
export const collaboInquiry = (...postData) => {
  return Axios.post("/inquiry/collaborations", ...postData);
};
