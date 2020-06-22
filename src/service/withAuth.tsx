import { useState, useEffect } from "react";
import { NextPage } from "next";
import Layout from "layout/app";
import Router from "next/router";
import { isLogin } from "service/isLogin";

export const withAuth = (Component: NextPage) => {
  return (props) => {
    const [login, setLogin] = useState(isLogin());
    useEffect(() => {
      const login = isLogin();
      setLogin(login);
      if (!login) {
        Router.push("/");
      } 
    }, [login]);

    return (
      <Component {...props} />
    );
  }
};
