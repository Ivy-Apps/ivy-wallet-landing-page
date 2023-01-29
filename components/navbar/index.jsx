import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { iconsState } from "../../state";
import { useRecoilValue } from "recoil";
import { useOutside } from "../../utils/useOutside"

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

const LinkElement = ({ title, src, external = false}) => {
  if (external) {
    return(
      <a href={src} target="_blank" rel="noreferrer"> 
        {title} <i className="ri-external-link-line" />
      </a>
    )
  }

  return(
    <Link href={src}>
      <a>{title}</a>
    </Link>
  )

}

const LinksBar = () => {
  return(
    <nav className={styles.links}>
      <LinkElement title="About" src="/" />
      <LinkElement title="Features" src="/features" />
      <LinkElement title="Roadmap" src="https://github.com/orgs/ivy-apps/projects/1/views/1" external />
      <LinkElement title="Community" src="https://t.me/+etavgioavwg4nthk" external />
      <LinkElement title="FAQ" src="/" />
    </nav>
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

const DropdownMenu = () => {
  const elementRef = useRef();
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

  useOutside(elementRef, () => toggleMenu({onlyClose: true}));

  return(
    <div ref={elementRef} className={styles.dropdown}>
      <div onClick={toggleMenu}>
        <button ref={buttonRef} className={styles.select}>Menu</button>
      </div>
      <ul ref={listRef} className={styles.menu}>
        <li>
          <LinkElement title="About" src="/" />
        </li>
        <li>
          <LinkElement title="Features" src="/features" />
        </li>
        <li>
          <LinkElement title="Roadmap" src="https://github.com/orgs/ivy-apps/projects/1/views/1" external />
        </li>
        <li>
          <LinkElement title="Community" src="https://t.me/+etavgioavwg4nthk" external />
        </li>
        <li>
          <LinkElement title="FAQ" src="/" />
        </li>
      </ul>
    </div>
  )
}

export const Navbar = () => {
  return(
      <header className={styles.container}>
        <Logo />
        <LinksBar />
        <ActionButtons />
        <DropdownMenu />
      </header>
  )
};
