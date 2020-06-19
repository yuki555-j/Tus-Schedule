import axios from "axios";
import { User } from "types/types";

export const Fetch = async (path = "", method="", params?: FormData ) => {
  //Todo: 環境変数に置き換える
  const cookie = localStorage.getItem("cookie");
  const headers = {
    "Accept": "application/json",
    "Content-type": "application/json",
    "token": cookie
  };
  const response = await fetch(
    `https://tus-schedule-api.herokuapp.com/api${path}`,
    {
      method: "GET",
      headers: headers,
      body: params,
      mode: "cors",
    }
  );
  const json = await response.json();
  console.log(json);
  return json;
}; 

