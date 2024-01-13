import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>GK DEV</div>
      <div className={styles.text}>© All Rights Reserved.</div>
    </div>
  );
}
