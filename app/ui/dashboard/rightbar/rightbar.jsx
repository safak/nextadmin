import Image from "next/image";
import styles from "./rightbar.module.css";
// import { MdPlayCircleFilled } from "react-icons/md";
import FormControlLabelPosition from "../checkbox/checkbox";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        {/* <div className={styles.text}>
          <span className={styles.notification}>🔥 Alert</span>
          <h3 className={styles.title}>
            Buruaaan!!!
          </h3>
          <span className={styles.subtitle}>Kelarin hari ini semua ae</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div> */}
        <FormControlLabelPosition />
      </div>
    </div>
  );
};

export default Rightbar;