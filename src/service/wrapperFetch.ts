import { User } from "types/types";

export const Fetch = async (path = "", method = "", params?: FormData) => {
  const cookie = localStorage.getItem("cookie");
  //Todo: 環境変数に置き換える

  const options: RequestInit = {
    method: method,
    headers: {
      Accept: "application/json",
      token: cookie,
    },
    mode: "cors",
  };

  if (params) {
    options["body"] = params;
  }

  if (process.browser) {
    const response = await fetch(
      `https://tus-schedule-api.herokuapp.com/api${path}`,
      options
    );
    const json = await response.json();
    return json;
  }
};
