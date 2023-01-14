import { Navbar } from "../components/navbar";
import styles from "../styles/index.module.scss";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { iconsState } from "../state";

export default function Features() {
  const icons = useRecoilValue(iconsState);
  const links = ["About", "Features", "Roadmap", "Community", "FAQ"];
  const titleToLinkMap = {
    About: "/",
    Features: "/",
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
      heading: "Graphs & Charts",
      paragraph:
        "See your monthly expenses in a beautiful Pie Chart by categories. This way you'll understand how much money you spent and for what.",
    },
    {
      icon: icons["wallet_icon"](),
      heading: "Multiple Accounts ",
      paragraph:
        "Track multiple bank accounts (including crypto ones) in one place. Record incomes, expenses, and transfers between them to efficiently manage your money.",
    },
    {
      icon: icons["users_icon"](),
      heading: "Community Driven",
      paragraph:
        "Ivy Wallet is fully community driven. We are open to any suggestions and feedback from the community.",
    },
    {
      icon: icons["wallet_icon"](),
      heading: "Multi-currency Support",
      paragraph:
        "Ivy Wallet supports 180+ currencies including all international (USD, EUR, GBP, etc) ones and the top 20 cryptocurrencies (e.g. BTC, ETH, ADA, SOL) to manage all of your assets with one money manager app.",
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
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar links={links} titleToLinkMap={titleToLinkMap} />

      <div className={styles.about}>
        <div className={styles.heading}>
          <div>Why Ivy Wallet?</div>
          <div>
            Discover, explore and visualize data to better understand your
            finances.
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
      <footer>
        <div className={"list_container"}>
          <div className={"footer_list"}>
            <div>Product</div>
            <a>Features</a>
            <a href="https://github.com/orgs/Ivy-Apps/projects/1/views/1">
              Roadmap
            </a>
            <a>Philosophy</a>
            <a>Journey</a>
            <a>Error Reporting</a>
          </div>
          <div className={"footer_list"}>
            <div>About</div>
            <a>Why Ivy?</a>
            <a>Blog</a>

            <a href="https://github.com/ILIYANGERMANOV/privacy-policies/blob/master/ivy-wallet-tc.md">
              Terms of use
            </a>
            <a href="https://github.com/ILIYANGERMANOV/privacy-policies/blob/master/ivy-wallet-privacy-policy.md">
              Privacy policy
            </a>
          </div>
          <div className={"footer_list"}>
            <div>Company</div>
            <a>About</a>
            <a>Updates</a>
            <a>Sponsers</a>
          </div>
          <div className={"footer_list"}>
            <div>Support</div>
            <a href="https://github.com/Ivy-Apps/ivy-wallet">Github</a>
            <a>FAQs</a>
            <a href="https://t.me/+ETavgioAvWg4NThk">Community</a>
          </div>
        </div>
        <div className="copyright">
          <div>
            <a href="https://github.com/Ivy-Apps/ivy-wallet">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://t.me/c/1647280565/8186">
              <i className="ri-telegram-fill"></i>
            </a>
            <a>
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
          Copyright &copy; {new Date().getFullYear()} Ivy Apps
        </div>
      </footer>
    </div>
  );
}
