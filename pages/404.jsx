import { Container } from "../components/container";
import { BaseHead } from "../components/BaseHead";
import styles from "../styles/404.module.scss";
import Head from "next/head";
import Link from "next/link";

const Error = () => {
  return(
    <Container>
      <Head>
        <BaseHead 
          title="Page Not Found" 
          description="Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance. Track your expenses, fast and on-the-go! ⚡ Discover powerful insights about your spending."
        />
      </Head>

      <div className={styles.content_wrapper}>
        <h2>This page does not exist</h2>  
        <Link href="/">
          <button className={styles.btn}>
            Back to Home
          </button>
        </Link>
      </div>
    </Container>
  )
}

export default Error;
