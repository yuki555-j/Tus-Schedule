import axios from "axios";
import { User } from "types/types";

export const fetch1 = async (type = "", user: User) => {
  const params = new FormData();
  params.append("username", user["username"]);
  params.append("password", user["password"]);
  const res = await axios.post(`/api/${type}`, params);
  console.log(res);
}; 