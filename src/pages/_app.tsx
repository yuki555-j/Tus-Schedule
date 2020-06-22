import React from "react";
import App, { AppContext } from "next/app";
import Head from "next/head";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "assets/theme";
import "assets/style.scss";
import "assets/loading.scss";
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
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />
            <title>Next.js PWA Example</title>

            <link rel="manifest" href="/manifest.json" />
            <link
              href="/favicon-16x16.png"
              rel="icon"
              type="image/png"
              sizes="16x16"
            />
            <link
              href="/favicon-32x32.png"
              rel="icon"
              type="image/png"
              sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#317EFB" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MuiThemeProvider>
      </>
    );
  }
}
