import { Container } from "../components/container";
import styles from "../styles/404.module.scss";
import Link from "next/link";

const Error = () => {
  return(
    <Container title="Not Found">
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
