import {useState, useCallback, useEffect} from "react";
import { Container } from "../components/container";
import styles from "../styles/terms.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Terms = () => {
  const [markdownData, setMarkdownData] = useState();
  
  const getData = useCallback(async () => {
    try {
      const url = "https://raw.githubusercontent.com/ILIYANGERMANOV/privacy-policies/master/ivy-wallet-tc.md";
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
    <Container title="Terms & Conditions">
      <div className={styles.content_wrapper}>
        <ReactMarkdown remarkPlugind={[remarkGfm]}>
          {markdownData}
        </ReactMarkdown>
      </div>
    </Container>
  )
}

export default Terms;
