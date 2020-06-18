import axios from "axios";
import { User } from "types/types";

export const Fetch = async (path = "", method="", params: FormData ) => {
  //Todo: 環境変数に置き換える
  const response = await fetch(
    `https://tus-schedule-api.herokuapp.com/api${path}`,
    {
      method: method,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: params,
      mode: "cors",
    }
  );
  const json = await response.json();
  return json;
}; 
