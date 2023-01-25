import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { iconsState } from "../../state";
import { useRecoilValue } from "recoil";
import { useOutside } from "../../utils/useOutside"

const _links = ["About", "Features", "Roadmap", "Community", "FAQ"];
const _titleToLinkMap = {
  About: "/",
  Features: "/features",
  Roadmap: "https://github.com/orgs/Ivy-Apps/projects/1/views/1",
  Community: "https://t.me/+ETavgioAvWg4NThk",
  FAQ: "/",
};

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
  const icons = useRecoilValue(iconsState);

  return(
    <div className={styles.cta}>
      <button>Donate</button>
      <a href="https://play.google.com/store/apps/details?id=com.ivy.wallet&hl=en&gl=US" target="_blank" rel="noreferrer">
        <button>
          Try Ivy Wallet{" "}
          {icons['right_arrow_icon']()}
        </button>
      </a>
    </div>
  )
}

const DropdownMenu = ({ links, titleToLinkMap }) => {
  const buttonRef = useRef();
  const listRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = ({onlyClose = false}) => {
    if (!onlyClose) {
      setMenuOpen(!menuOpen);
    } else {
      setMenuOpen(false);
    }

  }

  useEffect(() => {
    const buttonNode = buttonRef.current;
    const listNode = listRef.current;

    if (menuOpen) {
      buttonNode.classList.add(styles.active_select);
      listNode.classList.add(styles.menu_open);
    } else {
      buttonNode.classList.remove(styles.active_select);
      listNode.classList.remove(styles.menu_open);
    }
  }, [menuOpen])

  useOutside(buttonRef, () => toggleMenu({onlyClose: true}));

  return(
    <div className={styles.dropdown}>
      <div onClick={toggleMenu}>
        <button ref={buttonRef} className={styles.select}>Menu</button>
      </div>
      <ul ref={listRef} className={styles.menu}>
        {links.map((e) => (
          <li key={e}>
            <Link href={titleToLinkMap[e]}>
              <a>{e}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Navbar = () => {
  return(
      <header className={styles.container}>
        <Logo />
        <LinksBar links={_links} titleToLinkMap={_titleToLinkMap}/>
        <ActionButtons />
        <DropdownMenu links={_links} titleToLinkMap={_titleToLinkMap}/>
      </header>
  )
};
