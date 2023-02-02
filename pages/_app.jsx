import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import localFont from '@next/font/local'
import Head from "next/head";

import "../styles/globals.scss";
import "remixicon/fonts/remixicon.css";

const myFont = localFont({src: "../styles/fonts/satoshi.woff"})

function MyApp({ Component, pageProps }) {
  const title="Ivy Wallet: Money Manager"; 
  const description="Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance. Track your expenses, fast and on-the-go! ⚡ Discover powerful insights about your spending.";
  const url = "https://ivywallet.app/";
  const image = "/cover.jpg";

  return (
    <>
      <Head>
        {/* Global Metadata */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="./icon.png" />
        <link rel="shortcut icon" href="./favicon.ico" />

        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={new URL(image, url)} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={new URL(image, url)} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
