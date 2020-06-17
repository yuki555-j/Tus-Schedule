import axios from "axios";
import { User } from "types/types";

export const fetch1 = async (type = "", user: User) => {
  const params = new FormData();
  params.append("username", user["username"]);
  params.append("password", user["password"]);
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

  console.log(response)
  const json = await response.json();

  console.log(json);

}; 
