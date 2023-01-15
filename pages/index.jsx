import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import styles from "../styles/index.module.scss";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { iconsState } from "../state";

const World = dynamic(import("../components/world"), {
  ssr: false,
});

const Index = () => {
  const icons = useRecoilValue(iconsState);
  const links = ["About", "Features", "Roadmap", "Community", "FAQ"];
  const titleToLinkMap = {
    About: "/",
    Features: "/features",
    Roadmap: "https://github.com/orgs/Ivy-Apps/projects/1/views/1",
    Community: "https://t.me/+ETavgioAvWg4NThk",
    FAQ: "/",
  };
  const perks = [
    {
      icon: icons["lock_icon"](),
      heading: "Completely Open Source",
      paragraph:
        "We believe that people (not corporations) can create innovative, open-source, and free software that can make the world a better place.",
    },
    {
      icon: icons["users_icon"](),
      heading: "Easy to set-up and use",
      paragraph:
        "Ivy Wallet's biggest advantage is its UI/UX, simplicity, and customization which was recognized in the Top/Best Android App in 2021/2022 charts 10+ times by the YouTube tech community.",
    },
    {
      icon: icons["chart_icon"](),
      heading: "Finances Easy to Read",
      paragraph:
        "Our Best in class design, coupled with a very fast and responsive codebase makes the app very easy and quick to use.",
    },
    {
      icon: icons["wallet_icon"](),
      heading: "Completely Free",
      paragraph:
        "There are no hidden fees or charges - there is nothing to pay to use the app. We currenly run on donation model.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Ivy Wallet — Tracking Finances Done Right</title>
        <meta
          name="description"
          content="Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance.
          Track your expenses, fast and on-the-go! ⚡ Discover powerful insights about your spending."
        />
      </Head>

      <Navbar links={links} titleToLinkMap={titleToLinkMap} />

      <main className={styles.main}>
        <div className={styles.product}>
          <div className={styles.news}>
            <a href="https://t.me/+ETavgioAvWg4NThk" target="_blank" rel="noreferrer">

              Join our telegram communinty for updates
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M8.20248 13.1903L4.50325 13.5175C3.67308 13.5175 3 12.8378 3 11.9996C3 11.1613 3.67308 10.4817 4.50325 10.4817L8.20248 10.8088C8.85375 10.8088 9.38174 11.3419 9.38174 11.9996C9.38174 12.6583 8.85375 13.1903 8.20248 13.1903Z"
                  fill="currentColor"
                />
                <path
                  d="M20.6247 13.1302C20.5669 13.1885 20.3509 13.4353 20.148 13.6402C18.9644 14.9234 15.8739 17.0218 14.2572 17.664C14.0117 17.7665 13.391 17.9846 13.0583 18C12.7408 18 12.4375 17.9262 12.1485 17.7808C11.7874 17.577 11.4994 17.2554 11.3401 16.8764C11.2387 16.6143 11.0794 15.8267 11.0794 15.8124C10.9212 14.9521 10.835 13.5531 10.835 12.0066C10.835 10.535 10.9212 9.19332 11.051 8.31871C11.0652 8.30329 11.2245 7.32623 11.3979 6.99137C11.7154 6.37892 12.3361 6 13.0005 6H13.0583C13.4914 6.01432 14.4012 6.39435 14.4012 6.40756C15.9317 7.04975 18.9491 9.04681 20.1622 10.3742C20.1622 10.3742 20.5047 10.7156 20.6531 10.9282C20.8844 11.2344 21 11.6134 21 11.9923C21 12.4153 20.8702 12.8085 20.6247 13.1302Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          Track your expenses, fast and on-the-go! ⚡
          <span>
            Imagine Ivy Wallet as a manual expense tracker that will replace the
            good old spreadsheet for managing your personal finance.
          </span>
          <div className={styles.heading_buttons}>
            <a
              href="https://play.google.com/store/apps/details?id=com.ivy.wallet&hl=en&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Try Ivy Wallet{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M8.20248 13.1903L4.50325 13.5175C3.67308 13.5175 3 12.8378 3 11.9996C3 11.1613 3.67308 10.4817 4.50325 10.4817L8.20248 10.8088C8.85375 10.8088 9.38174 11.3419 9.38174 11.9996C9.38174 12.6583 8.85375 13.1903 8.20248 13.1903Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.6247 13.1302C20.5669 13.1885 20.3509 13.4353 20.148 13.6402C18.9644 14.9234 15.8739 17.0218 14.2572 17.664C14.0117 17.7665 13.391 17.9846 13.0583 18C12.7408 18 12.4375 17.9262 12.1485 17.7808C11.7874 17.577 11.4994 17.2554 11.3401 16.8764C11.2387 16.6143 11.0794 15.8267 11.0794 15.8124C10.9212 14.9521 10.835 13.5531 10.835 12.0066C10.835 10.535 10.9212 9.19332 11.051 8.31871C11.0652 8.30329 11.2245 7.32623 11.3979 6.99137C11.7154 6.37892 12.3361 6 13.0005 6H13.0583C13.4914 6.01432 14.4012 6.39435 14.4012 6.40756C15.9317 7.04975 18.9491 9.04681 20.1622 10.3742C20.1622 10.3742 20.5047 10.7156 20.6531 10.9282C20.8844 11.2344 21 11.6134 21 11.9923C21 12.4153 20.8702 12.8085 20.6247 13.1302Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </a>

            <button>
              <a href="https://github.com/Ivy-Apps/ivy-wallet">
                Explore our Github
              </a>
            </button>
          </div>
        </div>
      </main>
      <div
        style={{
          position: "relative",
          pointerEvents: "none",
          height: 500,
          bottom: -100,
          right: -30,
        }}
      >
        <World />
      </div>
      <div className={styles.about}>
        <div className={styles.heading}>
          <div>Why Ivy Wallet?</div>
          <div>
            Discover, explore and visualize data to maximize your growth.
          </div>
        </div>
        <p></p>
        <div className={styles.perks_container}>
          {perks.map((e) => (
            <div key={e.heading} className={styles.perk}>
              <div>{e.icon}</div>
              <div>{e.heading}</div>
              <div>{e.paragraph}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Index;
