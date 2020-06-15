import React from "react";
import App, { AppContext } from "next/app";
import Head from "next/head";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "assets/theme";
import "assets/sass/style.scss";
import Layout from "layout/app";

export default class extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <Head>
            <title>Tus-Schedule</title>
            <meta charSet="utf-8" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MuiThemeProvider>
      </>
    );
  }
}
