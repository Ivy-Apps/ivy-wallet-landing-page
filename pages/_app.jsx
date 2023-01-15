import Head from "next/head";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { RecoilRoot } from "recoil";

import "../styles/globals.scss";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <link rel="icon" type="image/png" href="./icon.png" />
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}

export default MyApp;
