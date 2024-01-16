import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="astronaut.png"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.notification}>Available now!</div>
          <h3 className={styles.title}>
            How to use the new version of the dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn.</span>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            libero.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <div className={styles.notification}>Available now!</div>
          <h3 className={styles.title}>
            How to use the new version of the dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn.</span>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            libero.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
