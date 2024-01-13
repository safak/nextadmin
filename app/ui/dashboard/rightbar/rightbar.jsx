import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdNotes, MdPlayCircleFilled } from "react-icons/md";

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="A kid in a space suit sitting on a rocket."
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 times to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas
            quam doloremque sed quos nihil reprehenderit animi numquam omnis
            praesentium, commodi qui unde, ratione dignissimos, quidem eveniet.
            Asperiores, accusamus fuga.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Coming soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Takes 4 times to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas
            quam doloremque sed quos nihil reprehenderit animi numquam omnis
            praesentium, commodi qui unde, ratione dignissimos, quidem eveniet.
            Asperiores, accusamus fuga.
          </p>
          <button className={styles.button}>
            <MdNotes />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
