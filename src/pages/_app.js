import { useState, useEffec } from "react";
import { Layout } from "../components";

import "../styles/globals.css";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
