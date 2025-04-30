import Image from "next/image"
import styles from "./rightbar.module.css"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"


const Rightbar = () => {


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src= "/astronaut.png" fill className={styles.bg} alt=""/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available</span>
          <h3 className={styles.title}>How to use the Admin Dashboard</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minima ducimus qui fuga a, iusto omnis magnam velit vel quos repellendus ea unde, eligendi culpa, quae tempore impedit temporibus illo.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Coming Soon</span>
          <h3 className={styles.title}>How server actions work!!</h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minima ducimus qui fuga a, iusto omnis magnam velit vel quos repellendus ea unde, eligendi culpa, quae tempore impedit temporibus illo.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Read More...
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar