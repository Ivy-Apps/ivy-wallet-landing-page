import { Container } from "../components/container";
import styles from "../styles/index.module.scss";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { iconsState } from "../state";

export default function Features() {
  const icons = useRecoilValue(iconsState);
  const perks = [
    {
      icon: icons["lock_icon"](),
      heading: "Completely Open Source",
      paragraph:
        "We believe that people (not only corporations) can create innovative, open-source, and free software that can make the world a better place.",
    },
    {
      icon: icons["users_icon"](),
      heading: "Easy to set-up and use",
      paragraph:
        "Ivy Wallet's biggest advantage is its UI/UX, simplicity, and customization which was recognized in the Top/Best Android App in 2021/2022 charts 10+ times by the YouTube tech community.",
    },
    {
      icon: icons["chart_icon"](),
      heading: "Graphs & Charts",
      paragraph:
        "See your monthly expenses in a beautiful Pie Chart by categories. This way you'll understand how much money you spent and for what.",
    },
    {
      icon: icons["wallet_icon"](),
      heading: "Multiple Accounts ",
      paragraph:
        "Manually track multiple bank accounts (including crypto ones) in one place. Record incomes, expenses, and transfers between them to efficiently manage your money.",
    },
    {
      icon: icons["users_icon"](),
      heading: "Community Driven",
      paragraph:
        "Ivy Wallet respects its users and community. We are open to any suggestions and feedback from the community.",
    },
    {
      icon: icons["wallet_icon"](),
      heading: "Multi-currency Support",
      paragraph:
        "Ivy Wallet supports multiple currencies including international (USD, EUR, GBP, etc) ones and the top cryptocurrencies (like BTC, ETH, ADA, SOL) to help you manage all of your assets with one money manager app.",
    },
  ];

  return (
    <Container>
      <Head>
        <title>Ivy Wallet: money</title>
        <meta
          name="description"
          content="Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance.
          Track your expenses, fast and on-the-go! ⚡ Discover powerful insights about your spending."
        />
      </Head>

      <div className={styles.about}>
        <div className={styles.heading}>
          <div>Why Ivy Wallet?</div>
          <div>
            Track your income and spending from your phone with ease to better
            understanding your personal finance.
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
