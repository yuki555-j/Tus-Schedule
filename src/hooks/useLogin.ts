import { useState } from "react";
import { User } from "types/types";
import { Fetch } from "service/wrapperFetch";
export const useLogin = () => {
  const [user, setInfo] = useState({username: "", password: ""});
  const [error, setError] = useState("");

  const login = async (user: User) => {
    const params = new FormData();
    params.append("username", user["username"]);
    params.append("password", user["password"]);
    const data = await Fetch("/login", "POST", params); 
    const { status, message, cookie } = data;
    if (status === 500) {
      setError(message)
    } else {
      localStorage.setItem("cookie", cookie)
    }
  }

  const handleSubmit = () => {
    login(user)  
  }

  const handleChange = (e) => {
    const name = e.target.name;
    setInfo({ ...user, [name]: e.target.value });
  };

  return { handleSubmit, handleChange, error };
}