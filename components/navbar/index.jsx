import Link from "next/link";
import styles from "./navbar.module.scss";
import RightArrow from "../../state/icons/rightArrow"

const Logo = () => {
  return(
    <div className={styles.logo}>
      <div>
        <Link href="/">
          <a>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src="./logo.svg" alt="Ivy Logo" width="60" height="60" />
          </a>
        </Link>
        <span className={styles.beta_span}>Beta</span>
      </div>
    </div>
  )
}

const LinksBar = ({ links, titleToLinkMap }) => {
  return(
    <div className={styles.links}>
      {links.map((e) => (
        <Link href={titleToLinkMap[e]} key={e}>
          <a>{e}</a>
        </Link>
      ))}
    </div>
  )
}

const ActionButtons = () => {
  return(
    <div className={styles.cta}>
      <button>Donate</button>
        <a href="https://play.google.com/store/apps/details?id=com.ivy.wallet&hl=en&gl=US" target="_blank" rel="noreferrer">
          <button>
            Try Ivy Wallet{" "}
            <RightArrow />
        </button>
      </a>
    </div>
  )
}

export const Navbar = ({ links = [], titleToLinkMap = [] }) => {
  return(
      <header className={styles.container}>
        <Logo />
        <LinksBar links={links} titleToLinkMap={titleToLinkMap} />
        <ActionButtons />
      </header>
  )
};
