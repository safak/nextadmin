import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Angelo Toledo</div>
        <div className={styles.text}>© All rights reserved</div>
    </div>
  )
}

export default Footer