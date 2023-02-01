import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

import "../styles/globals.scss";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
