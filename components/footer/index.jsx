import styles from "./footer.module.scss";
import Link from "next/link";

const Sections = () => (    
  <div className={styles.list_container}>
    <div className={styles.container_sublist}>
      <div className={styles.list_item}>
        <div>
          <h3>Product</h3>
          <a>Features</a>
          <a href="https://github.com/orgs/Ivy-Apps/projects/1/views/1">
            Roadmap
          </a>
          <a>Philosophy</a>
          <a>Journey</a>
          <a>Error Reporting</a>
        </div>
      </div>

      <div className={styles.list_item}>
        <div>
          <h3>About</h3>
          <a>Why Ivy?</a>
          <a>Blog</a>
          <Link href="/terms-and-conditions">
            Terms of use
          </Link>
          <Link href="/privacy">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>

    <div className={styles.container_sublist}>
      <div className={styles.list_item}>
        <div>
          <h3>Company</h3>
          <a>About</a>
          <a>Updates</a>
          <a>Sponsers</a>
        </div>
      </div>

      <div className={styles.list_item}>
        <div>
          <h3>Support</h3>
          <a href="https://github.com/Ivy-Apps/ivy-wallet">Github</a>
          <a>FAQs</a>
          <a href="https://t.me/+ETavgioAvWg4NThk">Community</a>
        </div>
      </div>
    </div>
  </div>
)

const Copyright = () => (
  <div className={styles.copyright}>
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
);

export const Footer = () => {
  return (   
    <footer className={styles.footer}>
      <Sections />
      <Copyright /> 
    </footer>
  )
};
