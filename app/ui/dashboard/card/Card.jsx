import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>total of users</span>
        <span className={styles.number}>10.234</span>
        <span className={styles.details}>
          <span className={styles.positive}>12%</span> more than
        </span>
      </div>
    </div>
  );
};

export default Card;
