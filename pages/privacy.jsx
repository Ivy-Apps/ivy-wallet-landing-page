import {useState, useCallback, useEffect} from "react";
import { BaseHead } from "../components/BaseHead";
import { Container } from "../components/container";
import styles from "../styles/privacy.module.scss";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Privacy = () => {
  const [markdownData, setMarkdownData] = useState();
  
  const getData = useCallback(async () => {
    try {
      const url = "https://raw.githubusercontent.com/ILIYANGERMANOV/privacy-policies/master/ivy-wallet-privacy-policy.md";
      const response = await fetch(url);
      const data = await response.text();
      setMarkdownData(data);
    } catch {
      console.error('error on fetch MD')
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return(
    <Container>
      <Head>
        <BaseHead 
          title="Ivy Wallet: Money Manager - Privacy" 
          description="Imagine Ivy Wallet as a manual expense tracker that will replace the good old spreadsheet for managing your personal finance. Track your expenses, fast and on-the-go! ⚡ Discover powerful insights about your spending."
        />
      </Head>

      <div className={styles.content_wrapper}>
        <ReactMarkdown remarkPlugind={[remarkGfm]}>
          {markdownData}
        </ReactMarkdown>
      </div>
    </Container>
  )
}

export default Privacy;
