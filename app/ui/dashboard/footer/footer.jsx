import styles from './footer.module.css'



const Footer = () => {


  return (
    <div className={styles.container}>
      <div className={styles.logo}>dev🔥russ</div>
      <div className={styles.text}>&copy;all rights reserved</div>
    </div>
  )
}

export default Footer