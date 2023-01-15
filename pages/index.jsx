import { Container } from "../components/container";
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
    <Container>
      <Head>
        <title>Ivy Wallet — Tracking Finances Done Right</title>
        <meta
          name="description"
          content="Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance.
          Track your expenses, fast and on-the-go! ⚡ Discover powerful insights about your spending."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.product}>
          <div className={styles.news}>
            <a href="https://t.me/+ETavgioAvWg4NThk" target="_blank" rel="noreferrer">

              Join our telegram communinty for updates
              {icons["right_arrow_icon"]()}
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
                {icons["right_arrow_icon"]()}
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
    </Container>
  );
}

export default Index;
