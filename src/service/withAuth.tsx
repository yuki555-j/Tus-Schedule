import { useState, useEffect } from "react";
import { NextPage } from "next";
import Layout from "layout/app";
import Router from "next/router";
import { isLogin } from "service/isLogin";

export const withAuth = (Component: NextPage) => {
   const [login, setLogin] = useState(isLogin());
    useEffect(() => {
      const loggedin = isLogin();
      setLogin(login);
      if (!loggedin) {
        Router.push("/login");
      }
    }, [login]);

    return (
      <div>
        {login ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          "loading..."
        )}
      </div>
    );
};
