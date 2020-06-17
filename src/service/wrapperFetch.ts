import axios from "axios";
import { User } from "types/types";

export const fetch = async (type = "", user: User) => {
  const params = new FormData();
  params.append("username", user["username"]);
  params.append("password", user["password"]);
  //Todo: 環境変数に置き換える
  const response = await fetch(
    "https://tus-schedule-api.herokuapp.com/api/works",
    {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin':'*'
      },
      body: params,
      mode: "cors",
    }
  );
  const json = await response.json();
  return json();
}; 
