import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { RecoilRoot } from "recoil";

import "../styles/globals.scss";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}

export default MyApp;
