import { Container } from "../components/container";
import { LockIcon, UsersIcon, ChartIcon, WalletIcon } from "../components/icons";
import styles from "../styles/index.module.scss";

export default function Features() {
  const perks = [
    {
      icon: <LockIcon />,
      heading: "Completely Open Source",
      paragraph:
        "We believe that people (not only corporations) can create innovative, open-source, and free software that can make the world a better place.",
    },
    {
      icon: <UsersIcon />,
      heading: "Easy to set-up and use",
      paragraph:
        "Ivy Wallet's biggest advantage is its UI/UX, simplicity, and customization which was recognized in the Top/Best Android App in 2021/2022 charts 10+ times by the YouTube tech community.",
    },
    {
      icon: <ChartIcon />,
      heading: "Graphs & Charts",
      paragraph:
        "See your monthly expenses in a beautiful Pie Chart by categories. This way you'll understand how much money you spent and for what.",
    },
    {
      icon: <WalletIcon />,
      heading: "Multiple Accounts ",
      paragraph:
        "Manually track multiple bank accounts (including crypto ones) in one place. Record incomes, expenses, and transfers between them to efficiently manage your money.",
    },
    {
      icon: <UsersIcon />,
      heading: "Community Driven",
      paragraph:
        "Ivy Wallet respects its users and community. We are open to any suggestions and feedback from the community.",
    },
    {
      icon: <WalletIcon />,
      heading: "Multi-currency Support",
      paragraph:
        "Ivy Wallet supports multiple currencies including international (USD, EUR, GBP, etc) ones and the top cryptocurrencies (like BTC, ETH, ADA, SOL) to help you manage all of your assets with one money manager app.",
    },
  ];

  return (
    <Container title="Features">
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
