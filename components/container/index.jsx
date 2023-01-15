import styles from "./container.module.scss";

export const Container = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
)
